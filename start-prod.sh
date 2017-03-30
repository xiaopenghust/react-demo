#!/bin/bash

log=~/log.log
pid=./run.pid
# killproc npm
nohup jsonserver --path db.json 1>~/log.log 2>&1 &
nohup npm run start-prod 1>~/log.log 2>&1 & echo $! > $pid
