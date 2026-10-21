#!/usr/bin/env bash
# Hva: sjekker prosjektmappa og VS Code-innstillingene dine før du åpner
# prosjektet i containeren, og før du kjører git på egen maskin.
#
# Hvorfor: alt som kjører i containeren – også KI-assistenten – kan skrive
# fritt i prosjektmappa. Legger noe der inn en fil som git eller VS Code kjører
# automatisk (en git-hook, en oppgave som starter når mappa åpnes), kjører den
# på DIN maskin, utenfor sandboxen. Skriptet fanger slike filer og manglende
# innstillinger før de får virke. Sandboxen beskytter bare så lenge ingenting
# derfra slipper ut på maskinen din – dette er kontrollen ved døra.
#
# Bruk: .devcontainer/check-host.sh  (fra hvor som helst). ADVARSEL per funn og
# exit 1; ingen funn gir «OK».
set -uo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT" || exit 2
n=0; warn() { n=$((n+1)); echo "ADVARSEL  $1"; }

# 1. git-config som host-git kjører/leser fra arbeidstreet (hooks, fsmonitor, include).
while read -r key val; do
  case "$key:$val" in
    core.fsmonitor:true|core.fsmonitor:false) ;;
    *:/*) [[ "$val" == "$ROOT"/* ]] && warn "git $key=$val peker inn i arbeidstreet" ;;
    *) warn "git $key=$val er relativ til arbeidstreet (sandboxen kan skrive dit)" ;;
  esac
done < <(git config --local --get-regexp '^(core\.hookspath|core\.fsmonitor|include\.path|includeif\..*\.path)$' 2>/dev/null)
[ -f package.json ] && grep -qE '"(prepare|postinstall)"[[:space:]]*:[[:space:]]*"[^"]*(husky|lefthook|simple-git-hooks)' package.json \
  && warn "package.json installerer git-hooks i arbeidstreet (husky/lefthook) – kjør aldri npm install på verten"
[ -f .pre-commit-config.yaml ] && [ -x .git/hooks/pre-commit ] \
  && warn "pre-commit er installert på verten; hook-definisjonene ligger i arbeidstreet"

# 2. git-metadata i arbeidstreet som styrer host-git (submodule-URL-er, LFS-endepunkt).
[ -n "$(git status --porcelain -- .gitmodules .lfsconfig 2>/dev/null)" ] \
  && warn ".gitmodules/.lfsconfig er endret uten commit – sjekk URL-ene før submodule/push"
nested="$(find . -mindepth 2 -name .git -not -path './node_modules/*' -print -quit 2>/dev/null)"
[ -n "$nested" ] && warn "nøstet git-katalog utenfor RO-overlayet: $nested (hooks/config er skrivbare for sandboxen)"

# 3. Absolutte symlinker: følges av host-verktøy (arkiv, deploy, indeksering), ikke av git.
link="$(find . -type l -lname '/*' -not -path './node_modules/*' -print -quit 2>/dev/null)"
[ -n "$link" ] && warn "absolutt symlink i arbeidstreet: $link"

# 4. .devcontainer/ kjøres på verten ved rebuild – review før du bygger.
[ -n "$(git status --porcelain -- .devcontainer 2>/dev/null)" ] \
  && warn "ucommittede endringer i .devcontainer/ – review før Rebuild"
if git rev-parse --verify -q '@{upstream}' >/dev/null 2>&1 \
   && [ -n "$(git diff --stat '@{upstream}' -- .devcontainer 2>/dev/null)" ]; then
  warn ".devcontainer/ avviker fra upstream – review før Rebuild"
fi
grep -q '"initializeCommand"' .devcontainer/devcontainer.json 2>/dev/null \
  && warn "initializeCommand kjører på verten før containeren finnes – skal ikke brukes"

# 5. VS Code-brukerinnstillinger (Vertsinnstillinger.md) – kan ikke håndheves fra repoet.
case "$(uname -s)" in
  Darwin) settings="$HOME/Library/Application Support/Code/User/settings.json" ;;
  MINGW*|MSYS*|CYGWIN*) settings="${APPDATA:-}/Code/User/settings.json" ;;
  *) settings="${XDG_CONFIG_HOME:-$HOME/.config}/Code/User/settings.json" ;;
esac
if [ -f "$settings" ]; then
  for kv in 'dev\.containers\.dockerPath:"podman"' 'dev\.containers\.dockerComposePath:"podman compose"' \
            'dev\.containers\.cacheVolume:false' 'dev\.containers\.gitCredentialHelperConfigLocation:"none"' \
            'dev\.containers\.copyGitConfig:false' 'task\.allowAutomaticTasks:"off"' 'remote\.autoForwardPorts:false'; do
    grep -Eq "\"${kv%%:*}\"[[:space:]]*:[[:space:]]*${kv#*:}" "$settings" || warn "VS Code User Settings mangler \"${kv%%:*}\": ${kv#*:}"
  done
else
  warn "fant ikke VS Code User Settings ($settings) – sjekk Vertsinnstillinger.md manuelt"
fi

[ "$n" -eq 0 ] && echo "OK – ingen funn"
exit $((n > 0))
