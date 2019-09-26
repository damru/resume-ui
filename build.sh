#!/usr/bin/env bash

DIR="$(dirname "$(readlink -f "$0")")"

docker login --username ${DOCKER_USERNAME} --password ${DOCKER_TOKEN}
docker build -t damru/web-resume ${DIR}
docker push damru/web-resume