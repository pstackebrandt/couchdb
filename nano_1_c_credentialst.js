'use strict';

// Credentials für die Anmeldung in Couch
const username = 'admin', password = 'asy';

// Verbindung zu Couch herstellen
const db = require('nano')(`http://${username}:${password}@127.0.0.1:5984`).db;

// Output: Shows nano database scope object

console.log(db);