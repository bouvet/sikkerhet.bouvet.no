---
sidebar_position: 4
---

# Containers

Containers is the recommended method used to build, distribute and run the software we deliver. Container technology will help you increase the overall security level by isolating the software, ensuring that it can't affect other environments or components in the case of errors or other issues. While many associate containers with _Docker Containers_, and container images with _Docker images_, be aware that there are other container implementations that may offer other advantages in the case where Docker can't be used. 

Containers were primarily developed for Linux in the beginning, but it is possible to run them on other hosts such as Windows and MacOS as well. The most common use case is still to deploy them to a Linux _container host_, but for local development any commonly used OS can be used. Be aware that the following elements is applicable primarily to Linux; Windows and MacOS implementations may need somewhat different configurations. 

## Never run as _root_

The user with the name `root`(user id 0) is the superuser in a Linux system. Operations modifying the systems typically require superuser access.
<!-- There are a few examples of _container breakout_, where an attacker can move laterally from the container guest to the host has only been possible when the container runs as root.   -->
Many _base images_ still uses root as the standard user inside the container, so by changing this you can protect yourself from many attack methods. 

You can do this by using the keyword `USER` in a Dockerfile.

```Dockerfile
# Dockerfile
FROM python:alpine
USER 1000
```

Many Linux distros uses UID 1000 and upwards for user accounts, this convention is also used in Docker. 

## No secrets stored in the image

Container images are often treated as any other publicly available component. They are uploaded to _container registries_, and can be downloaded and run by anyone from there. Even with a _private container registry_ where access is limited best practice is to avoid storing secrets in the image. 

```Dockerfile
# Dockerfile
FROM python:alpine
COPY ./secretfile ./secretfile
# !Don't do this!
```
Secrets must be fed into the container during boot as environment variables. If the secret is a file it should be mounted during boot. 
To reduce the risk of secrets being stored in the image, a `.dockerignore`-file can be used. This works in a similar manner as `.gitignore` and will hide files from the _build context_ when building an image and preventing the listed files from being added. 

Also be aware of other things ending up in the image, particularly if the Dockerfile contains entries such as `COPY . /src`.

## Which image is used as the base?

[_Most_](https://docs.docker.com/develop/develop-images/baseimages/) container images uses other images as a base, typically by modifying a general image into a more specialized image. The image used is specified in the `FROM` tag in a Dockerfile.  
Be careful when using docker images; there are risks associated with using any image created externally, same as for [external libraries](../03_bygge/software-composition-analysis-sca.md). 
Threat vectors such as [typosquatting](https://en.wikipedia.org/wiki/Typosquatting) and _dependency confusion_ also applies to container images.

## No _capability_ flags

[_Capabilities_](https://man7.org/linux/man-pages/man7/capabilities.7.html) is a Linux functionality making it possible to reduce which operations a process is allowed to execute. When Docker, Kubernetes or others start a container, they will give the container a limited set of  _capabilities_. These should be sufficient in most cases. 
If you by any chance run into issues caused by missing capabilities, be careful before adding them. Analyze the risk and consequence of adding them, and consider finding a different solution as adding capabilities may increase the attack surface or require additional configuration to secure the system. 

Flags __never__ to use: `--cap-add, --privileged, --device`.

The following is an example of a Docker-compose file with two added capabilities:

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

For more information, please see [this article on capabilities]](https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities).

## Regular updates

In the same way as keeping a smartphone or a laptop up-to-date is important to fix vulnerabilities, keeping the underlying Docker image updated is equally important. Many _base image_ providers will build new versions of their image every night to ensure that the latest updates are added. This won't help you if your CI/CD pipeline caches the old image and you don't have a process in place to ensure regular updates. 

In addition to having a procedure in place that builds the image without basing it on a cached version, keeping the OS updated is also recommended. Building the image can be done regularly, such as whenever a new version is released while OS-components should be upgraded automatically whenever you build your project. If you're using a Debian-based image this can be done as in the example below, where the `RUN` command updates the OS. 

```Dockerfile
# Dockerfile
FROM python:3.11-slim
RUN apt-get update && apt-get upgrade -y

```

## Limit the use of volume mounts

Avoid _mounting_ folders and files inside the container whenever they're not needed. Containers are supposed to be isolated, having shared resources such as mount points undermines this. If mounts are needed, try to be specific. Rather than using `--volume /home:/app/home`, use `--volume /home/app/somefile.txt:/app/somefile.txt` to only mount the one file required. 
