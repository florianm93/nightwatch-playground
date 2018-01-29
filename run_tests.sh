#!/bin/bash

SLEEPTIME=3

./node_modules/.bin/http-server & (sleep ${SLEEPTIME} && ./node_modules/.bin/nightwatch)
