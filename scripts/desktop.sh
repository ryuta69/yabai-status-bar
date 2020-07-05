#!/usr/bin/env bash

DATE_TIME=$(date +"%Y-%m-%d %H:%M")

echo $(cat <<EOF
{
  "date_time": "$DATE_TIME"
}
EOF
)
