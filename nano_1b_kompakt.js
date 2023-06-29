'use strict';

// kompakt Verbindung zu Couch herstellen
// without login
const db = require('nano')('http://127.0.0.1:5984').db;

console.log(db);

// Output: Shows nano database scope object