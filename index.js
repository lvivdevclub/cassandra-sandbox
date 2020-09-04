const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
    contactPoints: ['node1', 'node2', 'node3'],
    localDataCenter: 'DC1',
    keyspace: 'ks1'
});

const query = 'SELECT name, email FROM users WHERE email = ?';

client.execute(query, [ 'email1' ])
    .then(result => console.log('User with name %s', result.rows[0].name))
    .catch(error => console.error('error: ', error));
