#!/usr/bin/env bash
# prerequisites
# IAM user
# aws cli and aws config setup locally

# build the image
docker build -t digital-artwork-base:latest . &&
# get login
aws ecr get-login-password --region eu-west-1 | docker login --username AWS --password-stdin 882907016759.dkr.ecr.eu-west-1.amazonaws.com &&
# tag it
docker tag digital-artwork-base:latest 882907016759.dkr.ecr.eu-west-1.amazonaws.com/digital-artwork-base:latest &&
# push it to ecr
docker push 882907016759.dkr.ecr.eu-west-1.amazonaws.com/digital-artwork-base:latest;
