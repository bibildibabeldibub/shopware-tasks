# Setup

volumes can't be mounted to empty directories so for the first docker-compose up you need following steps: 

- comment the volumes 
- start the containers
- use `docker cp shopware:var/lib/mysql/ ./db_volume/ `
- probably create a db dump and cp it this way either (script for automated script creation not there yet, no time :D)
- use `docker cp shopware:var/www/html/ ./shopware/ `
- uncomment the volumes restart the containers

# Credentials

| Service | Username | Password |
|---------|----------|----------|
| Admin   | admin    | shopware |
| MySQL   | root     | root     |

