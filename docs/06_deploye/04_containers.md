---
sidebar_position: 4
---

# Containere

Containere vil i mange tilfeller være den anbefalte måten å bygge, distribuere, og kjøre programvaren vi utvikler.  
Containere i seg selv bidrar med økt sikkerhet ved at programmet eksekveres i et isolert miljø, som potensielt kan begrense skadeomfanget ved eventuelle feil.  
Containere er for mange synonymt med _Docker Containere_, og container image med _Docker image_, men vær obs på at det også finnes andre implementasjoner (podman, moby, etc.).

Containere er en løsning som først ble utviklet for Linux, og senere tilpasset til Windows og MacOS. Det er fortsatt mest vanlig å deploye containere på en Linux _container host_, men for lokal utvikling er det opp til hver enkelt utvikler. Ikke alt som nevnes her vil nødvendigvis fungere på MacOS/Windows på helt samme måte.

## Ikke kjør som _root_

Brukeren med navnet `root`(user id 0) er forbehold _rootbrukeren_ (i.e. superbruker) i et Linux system. Mange av operasjonene som endrer på systemet krever _root-tilgang_ for å utføres.  
<!-- De få eksemplene på _container breakout_, altså at en angriper får tilgang til _container hosten_, har bare vært mulig om brukeren som programmet inne i containeren kjører som har _uid 0_.   -->
Mange _base images_ har fortsatt root som standard bruker inne i containeren, ved å endre dette beskytter man seg fra en rekke ulike angrepsmetoder.

Dette gjøres ved å bruke nøkkelorder `USER` i en Dockerfil.

```Dockerfile
# Dockerfile
FROM python:alpine
USER 1000
```

Det er vanlig konvensjon å bruke UID 1000 for "sin egen bruker".

## Ingen secrets i imaget

Container images behandles ofte på samme måte som offentlig tilgjengelige pakker. De pushes opp til _container registries_, og kan lastes ned og kjøres av hvem som helst.  
Selv om man ikke gjør det, men heller har et _private container registry_, er det god secret hygiene å ikke legge secrets inn i image.

```Dockerfile
# Dockerfile
FROM python:alpine
COPY ./secretfile ./secretfile
# !Ikke gjør dette!
```

Secrets skal heller mates inn ved oppstart av containere som miljøvariabler. Om det må være en fil så bør den mountes inn ved oppstart av containeren.

For å minske faren for feil kan man legge inn en `.dockerignore`-fil. Denne fungerer på samme måte som `.gitignore`, bare at filene som legges inn her ikke vil være tilgjengelig for _build contexten_ ved bygging av image.

Vær også obs på hva som faktisk havner inne i imaget, spesielt dersom man i Dockerfilen har linjer som dette; `COPY . /src`.

## Hvilket image bygger du på?

De [_aller fleste_](https://docs.docker.com/develop/develop-images/baseimages/) container images bygger videre på et eksisterende image. Hvilket image dette er spesifiseres i `FROM` taggen i en Dockerfil.  
Her vil de samme retningslinjene som for kode dependencies gjelde. Hvor kommer det fra? Kan det stoles på?  
Farene rundt [typosquatting](https://en.wikipedia.org/wiki/Typosquatting) og _dependency confusion_ gjelder også her.

## Ingen _capability_ flagg

[_Capabilities_](https://man7.org/linux/man-pages/man7/capabilities.7.html) er en Linux-funksjonalitet som gjør det mulig å begrense hvilke operasjoner en prosess har rettigheter til å gjøre.  
Når Docker, Kubernetes, etc., starter en container vil de gi containeren et begrenset standard sett med _capabilities_. Disse er som regel tilstrekkelig.
Om du mot formodning møter problemer på grunn av manglende capabilities, vær svært nøye med hva du gjør, og finn helst en annen løsning enn å legge de til.

Flaggene man skal __styre unna__ er: `--cap-add, --privileged, --device`.

I docker-compose kan det se slik ut:

```yaml
# docker-compose.yaml
app:
  image: python:alpine
  privileged: true
  cap_add:
    - NET_ADMIN
    - SYS_ADMIN
# !Ikke gjør dette!
```

Du kan lese Docker-referansen om capabilities [her](https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities).

## Oppdater regelmessig

På samme måte som at det er viktig å oppdatere Windows laptopen og mobiltelefonen sin for å motta sikkerhetsfikser, må operativsystemet inne i containeren oppdateres jevnlig.

Mange av de som bygger _base image_, slik som `python:3.11-slim`, bygger nye image hver natt med de siste oppdateringene.
Dette hjelper lite om man i sin CI/CD alltid bruker det gamle imaget som cache, og sist man lastet ned base imaget var 6 måneder siden.

I tillegg til å bygge imaget uten cache jevnlig (kanskje ved hver nye release?), anbefales det å oppdatere OS-pakker ved bygging. I et Debian-basert container image kan det se slik ut:

```Dockerfile
# Dockerfile
FROM python:3.11-slim
RUN apt-get update && apt-get upgrade -y

```

Når vi bygger dette imaget (uten cache), er vi sikker på å få de siste tilgjengelige sikkerhetsfiksene for operativsystemet.

## Begrense volume mounts

Ganske enkelt; unngå å _mounte_ mapper og filer inne i containeren som den ikke trenger.  
Vi ønsker å dra nytte av at containere i stor grad er isolerte, ved å mounte for mange filer undergraves dette.

Så istedenfor å bruke: `--volume /home:/app/home`,  
kan man være mer spesifikk: `--volume /home/app/somefile.txt:/app/somefile.txt`.
