#!/bin/bash

echo 'run application_start.sh: ' >> /home/ubuntu/nagis-api/deploy.log

echo 'pm2 restart nagis-api' >> /home/ubuntu/nagis-api/deploy.log
pm2 restart nagis-api >> /home/ubuntu/nagis-api/deploy.lo