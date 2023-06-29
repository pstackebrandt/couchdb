'use strict';

// Credentials für die Anmeldung in Couch
const username = 'alfa', password = 'alfa';

// Verbindung zu Couch herstellen
const db = require('nano')(`http://${username}:${password}@127.0.0.1:5984`).db;

console.log(db);