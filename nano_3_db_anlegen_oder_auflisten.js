'use strict';

// Credentials für die Anmeldung in Couch
const username = 'admin', password = 'asy';
const dbName = 'testdb0';

// Verbindung zu Couch herstellen
const db = require('nano')(`http://${username}:${password}@127.0.0.1:5984`).db;

const init = () => {

    db.list().then(
        res => {
            // console.log(res);
            if (res.includes(dbName)) {
                return `DB "${dbName}" existiert bereits`;
            } else {
                return db.create(dbName)
            }
        }
    ).then(
        console.log
    ).catch(
        console.warn
    );

}

init();

// Output: DB "testdb0" existiert bereits