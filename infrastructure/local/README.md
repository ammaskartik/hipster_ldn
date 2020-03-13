# Local Infrastructure

We will just use docker-compose for mongo and any other core services we need

You will need to install just the MongoDB Shell...

* https://dba.stackexchange.com/questions/196330/is-it-possible-to-install-just-the-mongo-shell
* https://www.shellhacks.com/mongodb-install-client-mongo-shell-ubuntu-centos/

To launch the local infra:

`docker-compose -f services.yml up -d`

To shut down the local infra:

`docker-compose -f services.yml down`

If you want to delete data, please remove the persistent volume thats defined in the compose file.

To test the mongodb instance. Please run:

`mongo admin -u root -p root`

You can type `exit` to quit the shell.
