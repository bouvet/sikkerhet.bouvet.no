#!/usr/bin/env bash
# Full reset fra verten: fjerner container, nett og volumer (devhome, vscodeserver).
# Proxy-loggen (sporet av hva sandboxen gjorde utad) lagres først i
# ~/.local/state/devcontainer-logs/. «Rebuild Container» beholder hjemmevolumet
# og alt sandboxen la der; dette skriptet er hendelsesrutinen.
#   .devcontainer/reset.sh [--vscode-volume]
# --vscode-volume sletter i tillegg VS Codes GLOBALE «vscode»-volum (delt av alle
# prosjekter) – kun relevant når dev.containers.cacheVolume ikke er false.
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
# Prosjektnavnet leses fra compose-labelen på eksisterende container; ellers utledes
# det som Dev Containers gjør: mappenavn i små bokstaver, kun [a-z0-9_-] beholdes.
PROJECT="$(podman ps -a --filter "label=com.docker.compose.project.working_dir=$DIR" \
  --format '{{ index .Labels "com.docker.compose.project" }}' | head -1)"
: "${PROJECT:=$(basename "$(dirname "$DIR")" | tr '[:upper:]' '[:lower:]' | tr -cd 'a-z0-9_-')_devcontainer}"
proxy="$(podman ps -a --filter "label=com.docker.compose.project=$PROJECT" \
  --filter "label=com.docker.compose.service=proxy" --format '{{.Names}}' | head -1)"
if [ -n "$proxy" ]; then
  LOGDIR="${XDG_STATE_HOME:-$HOME/.local/state}/devcontainer-logs"
  mkdir -p "$LOGDIR"
  podman logs "$proxy" > "$LOGDIR/$PROJECT-$(date +%Y%m%d-%H%M%S).log" 2>&1 || true
  echo "proxy-logg lagret i $LOGDIR"
fi
podman compose -p "$PROJECT" -f "$DIR/docker-compose.yml" down -v
if [ "${1:-}" = "--vscode-volume" ]; then podman volume rm vscode; fi
