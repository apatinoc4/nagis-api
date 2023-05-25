#!/bin/bash

echo 'run after_install.sh: ' >> /home/ubuntu/nagis-api/deploy.log

echo 'cd /home/ubuntu/nagis-api' >> /home/ubuntu/nagis-api/deploy.log
cd /home/ubuntu/nagis-api >> /home/ubuntu/nagis-api/deploy.log

echo 'npm install' >> /home/ubuntu/nagis-api/deploy.log
npm install >> /home/ubuntu/nagis-api/deploy.log
