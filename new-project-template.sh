#!/bin/bash

mkdir -p $1/images $1/scripts $1/styles
touch $1/scripts/main.js $1/styles/style.css

INDEX_TEMPLATE_SCRIPT_PATH="./index-html-template.sh"
bash "$INDEX_TEMPLATE_SCRIPT_PATH" >> $1/index.html
