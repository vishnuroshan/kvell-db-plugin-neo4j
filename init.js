const neo4j = require('neo4j-driver');

const driverInstance = neo4j.driver(process.env.CONNECTION_STRING, neo4j.auth.basic(process.env.USERNAME, process.env.PASSWORD));   

exports.module = driverInstance;