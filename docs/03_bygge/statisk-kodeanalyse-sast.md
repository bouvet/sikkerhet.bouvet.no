---
sidebar_position: 4
title: Statisk kodeanalyse (SAST)
---

# Statisk kodeanalyse (SAST)

Statisk kodeanalyse, også kjent som _SAST_ (Static Application Security Testing), kan brukes mot en kodebase for å fange opp potensielle feil og sårbarheter.

> "Don't live with broken windows"

Når man benytter et verktøy for statisk kodeanalyse, er det svært viktig å starte med null advarseler for at utviklerne skal ta tak i nye advarsler.
Dersom kodebasen allerede har hundrevis eller tusenvis av feil, så er det stor sjanse for at en nyinnført feil heller ikke blir tatt tak i og fikset.
Bruk tid på å tilpasse kodeanalyseverktøyet til eksisterende kodebase, og sørg for at det er null advarsler. Da vil man også se at utviklerne tar tak i nye advarsler som dukker opp.
Det er viktig at Security Champion eller en annen person i prosjektet aktivt følger opp verktøyet.

Noen alternativer:
- [SonarQube](https://www.sonarqube.org/features/security/)
- [SonarCloud](https://www.sonarcloud.io)
- [CodeQL](https://codeql.github.com)
- [Bandit](https://github.com/PyCQA/bandit) (kun for python)
- [Snyk Code](https://snyk.io/product/snyk-code/)
- [dockle](https://github.com/goodwithtech/dockle) - Sikkerhets linter for Dockerimage

