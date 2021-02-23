#!/bin/bash
echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
docker push olanrewaju1992/udacity-c3-restapi-user
docker push olanrewaju1992/udacity-c3-restapi-feed
docker push olanrewaju1992/reverseproxy
docker push olanrewaju1992/udacity-c3-frontend:local