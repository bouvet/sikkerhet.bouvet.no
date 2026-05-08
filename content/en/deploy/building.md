---
title: "Building"
weight: 2
translationKey: build
description: >
  Building is about producing a reproducible artifact that can be verified and trusted before deployment. Build environment, dependencies, and signing are critical control points.
---

Building is the step where source code becomes a deployable artifact. The goal is for the artifact to be reproducible, verifiable, and traceable back to a specific commit and pipeline run.

This article focuses on the building process itself. Overall pipeline management is described in [CI/CD]({{< ref "deploy/cicd.md" >}}), and deployment to environments is described in [Deployment]({{< ref "deploy/deploy.md" >}}).

## Build environments and build agents
Build agents typically come in two main forms:

* Cloud provider-managed agents
* Self-hosted agents (in the cloud or on-premise)

Cloud provider-managed agents often provide lower operating costs and simpler maintenance. Self-hosted agents give you more control but full responsibility for hardening, patching, and access management.

Regardless of which model you choose, the build environment is a high-risk point. If it's compromised, all artifacts produced there become unreliable.

## Requirements for secure building
A robust build setup should have at least:

* **Reproducibility**: Same input should produce the same artifact. Avoid hidden dependencies and undocumented manual steps.
* **Pinned dependencies**: Lock versions explicitly and avoid "latest" in builds.
* **Isolation**: Separate build jobs between projects with different risk levels.
* **Control over build tools**: Compilers, base images, and plugins should be versioned and approved.
* **Traceability**: The artifact must be traceable back to the commit, pipeline run, and build configuration.

Risk in third-party dependencies is described in [Software Supply Chain Security]({{< ref "develop/software-supply-chain.md" >}}).

## Signing and artifact integrity
Yes, signing naturally belongs in the build phase. Signing should happen right after the artifact is produced and verified.

Practical controls:

* **Sign artifacts**: Sign containers, binaries, and packages with a controlled key.
* **Verify signature on deployment**: Deployment should stop if the signature is missing or invalid.
* **Generate SBOM**: Create an inventory of what's in the artifact for traceability and vulnerability management.
* **Build provenance attestation**: Document what built the artifact, where it came from, and under what conditions.

## Building for AI systems
For AI solutions, building encompasses more than just application code. Trained models, supporting files for text processing, data representations, and runtime containers are all artifacts that need controlled handling throughout the process.

* **Version model artifacts**: Treat model versions the same way as code versions.
* **Sign model and runtime artifacts**: Use the same integrity requirements for models as for other artifacts.
* **Document dataset and model versions**: Clearly describe what's included in each release.
* **Avoid dynamic downloads in production**: Don't download model files outside of controlled release workflows.

## Further reading
* [Microsoft: Secure your Azure Pipelines](https://learn.microsoft.com/en-us/azure/devops/pipelines/security/overview?view=azure-devops)
* [SLSA: Supply-chain Levels for Software Artifacts](https://slsa.dev/)
* [Sigstore: Cosign](https://www.sigstore.dev/)
* [OWASP: Software Supply Chain Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Software_Supply_Chain_Security_Cheat_Sheet.html)
* [OWASP: Top 10 CI/CD Security Risks](https://owasp.org/www-project-top-10-ci-cd-security-risks/)
* [OWASP: CI/CD Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/CI_CD_Security_Cheat_Sheet.html)
