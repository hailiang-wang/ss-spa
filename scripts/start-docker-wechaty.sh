#! /bin/bash 
###########################################
# start ss-spa with Wechaty Client
###########################################

# constants
baseDir=$(cd `dirname "$0"`;pwd)
# functions

# main 
[ -z "${BASH_SOURCE[0]}" -o "${BASH_SOURCE[0]}" = "$0" ] || return
cd $baseDir/..
docker-compose -f docker-compose.yml -f docker-compose-wechaty.yml up
