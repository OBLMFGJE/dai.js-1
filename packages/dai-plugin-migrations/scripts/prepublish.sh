#!/bin/bash

if [ $(basename $(pwd)) != "dai-plugin-migrations" ]; then
  echo "This script must be run from the dai-plugin-migrations directory."
  exit
fi

if [ ! SKIP_VERSION_UPDATE ]; then
  yarn version
fi

./scripts/build.sh
