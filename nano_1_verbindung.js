'use strict';

// Verbindung zu Couch herstellen
const nano = require('nano');
const connection = nano('http://127.0.0.1:5984');
const db = connection.db;

console.log(db);