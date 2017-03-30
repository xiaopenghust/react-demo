#!/bin/bash

log=~/log.log
nohup npm run start 1>~/log.log 2>&1 &
