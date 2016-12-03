#!/bin/sh

PORT="22813"
DIST_PATH="dist/*"

REMOTE_USER="dev"
REMOTE_ADDR="94.244.54.52"
REMOTE_PATH="/www/test/"

echo -e "Uploading \e[4m\e[92m$DIST_PATH\e[39m\e[0m to \e[96m$REMOTE_ADDR\e[39m server"

scp -P $PORT -r $DIST_PATH $REMOTE_USER@$REMOTE_ADDR:$REMOTE_PATH