docker ps -a

docker exec -it DSE-6_node1 bash

nodetool status

cqlsh

DESC keyspaces;

CREATE KEYSPACE ks1 WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : '3'};

USE ks1;

CREATE TABLE users (
  email VARCHAR,
  name VARCHAR,
  PRIMARY KEY ((email), name)
) WITH CLUSTERING ORDER BY (name ASC);

DESC TABLE users;

INSERT INTO users (email, name) VALUES ('email1', 'name1');