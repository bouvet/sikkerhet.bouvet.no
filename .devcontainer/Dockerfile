# syntax=docker/dockerfile:1
#
# PROSJEKT-image: bygger på et sentralt stack-image og legger på det ditt team
# trenger. Bump BASE-taggen for å ta inn upstream-vedlikehold.
#
# Velg BASE etter stack: devcontainer-{base,python,dotnet,full}.
# Lokalt uten registry: kjør ./scripts/build-images.sh først (tagger
# localhost/devcontainer-*:dev); med registry: pek BASE på registry-taggen.
ARG BASE=ghcr.io/bouvet/devcontainer-base:1.4
FROM ${BASE}

# --- Prosjekt-spesifikke tillegg --------------------------------
# Dette nettstedet bygges med Hugo:
#   * Hugo må være «extended» – Docsy-temaet bruker SCSS.
#   * Go trengs fordi temaet hentes som Hugo-modul (github.com/google/docsy),
#     og modulnedlasting krever go-verktøykjeden.
# apt krever root; vi bytter tilbake til node til slutt så containeren kjører
# ikke-root.
USER root

# Go fra Debian trixie (1.24) – dekker go.mod (go 1.12) med god margin.
RUN apt-get update \
    && apt-get install -y --no-install-recommends ca-certificates golang-go \
    && rm -rf /var/lib/apt/lists/*

# Hugo extended, pinnet på versjon. NB: package.json pinner npm-pakka
# hugo-extended på 0.157.0 – containeren kjører 0.166.0, som er nyere enn
# npm-pinnet. Bump gjerne begge sammen. Nye sjekksummer hentes fra
# https://github.com/gohugoio/hugo/releases/download/v<versjon>/hugo_<versjon>_checksums.txt
ARG HUGO_VERSION=0.166.0
ARG HUGO_SHA256_AMD64=0e39b901e3f919f1daae05c8ff64f0c14c8a348ef46886d63f8e6d1bb2653885
ARG HUGO_SHA256_ARM64=4b282afd8181e5ed182f50f293fc24dd6c42bfa569e555d53bfbc5ee6a1b2982
RUN set -eux; \
    case "$(dpkg --print-architecture)" in \
      amd64) hugo_arch=linux-amd64; hugo_sha="${HUGO_SHA256_AMD64}" ;; \
      arm64) hugo_arch=linux-arm64; hugo_sha="${HUGO_SHA256_ARM64}" ;; \
      *) echo "Hugo: ingen release for arkitekturen $(dpkg --print-architecture)" >&2; exit 1 ;; \
    esac; \
    tarball="hugo_extended_${HUGO_VERSION}_${hugo_arch}.tar.gz"; \
    curl -fsSL -o /tmp/hugo.tar.gz \
      "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/${tarball}"; \
    echo "${hugo_sha}  /tmp/hugo.tar.gz" | sha256sum -c -; \
    tar -xzf /tmp/hugo.tar.gz -C /usr/local/bin hugo; \
    rm -f /tmp/hugo.tar.gz; \
    chmod 0755 /usr/local/bin/hugo; \
    hugo version

USER node
