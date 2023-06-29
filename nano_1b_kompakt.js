'use strict';

// Verbindung zu Couch herstellen
const db = require('nano')('http://127.0.0.1:5984').db;

console.log(db);