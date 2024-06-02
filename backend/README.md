# CodingLine

## Getting started
### create database in docker

1. Create docker container for postgres database
```shell
docker run --name codelineDB -p 5432:5432 -d -e POSTGRES_USER=nadezhda -e POSTGRES_PASSWORD=1234 postgres
```

2. Create connect to docker container
### Creating database
```shell
docker exec -it codelineDB bash
```

3. connect to postgres
```shell
psql -U nadezhda
```

4. create database
```shell
CREATE DATABASE diploma;
```








