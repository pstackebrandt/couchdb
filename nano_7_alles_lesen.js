'use strict';

// Credentials für die Anmeldung in Couch
const username = 'admin', password = 'asy';
const dbName = 'autos';

// Verbindung zu Couch herstellen
const db = require('nano')(`http://${username}:${password}@127.0.0.1:5984`).db;

const init = () => {
    // use() ist die einzige Methode, die kein Promise ist
    let myDB = db.use(dbName);

    // List liefert standardmäßig nur id und Revision.
    // Um die Nutzdaten zu erhalten, muss eine Option gesetzt werden
    myDB.list({
        include_docs: true
    }).then(
        res => res.rows.map(val => val.doc)
    ).then(
        res => console.log(res)
    ).catch(
        console.warn
    )

} 

init();