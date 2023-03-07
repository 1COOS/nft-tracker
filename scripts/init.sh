#!/bin/sh

mkdir -p /config

if [ ! -f "/config/config.yaml" ]; then
  cp /app/config.yaml /config/config.yaml
fi

pnpm run run
