'use strict';

// Credentials für die Anmeldung in Couch
const username = 'admin', password = 'asy';
const dbName = 'autos';
const id = '9963fa874156e7655913f8829200ce34';


// Verbindung zu Couch herstellen
const db = require('nano')(`http://${username}:${password}@127.0.0.1:5984`).db;


const init = () => {

    // use() ist die einzige Methode, die kein Promise ist
    let myDB = db.use(dbName);

    myDB.destroy(
        "9963fa874156e7655913f8829200ce34",
        "2-c8f3a44caf0fbfe1e11e533922084e88"
    ).then(
        console.log
    ).catch(
        console.warn
    )

}

init();