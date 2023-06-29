'use strict';

// Credentials für die Anmeldung in Couch
const username = 'alfa', password = 'alfa';
const dbName = 'autos';

const meinAuto = {
    marke: 'Fiat',
    modell:'Stilo',
    leistungKW: 102,
    farbe: 'Nachtblau',
    leasing: false
}

// Verbindung zu Couch herstellen
const db = require('nano')(`http://${username}:${password}@127.0.0.1:5984`).db;


const init = () => {

    // use() ist die einzige Methode, die kein Promise ist
    let myDB = db.use(dbName);

    // insert() dient auch dem Aktualisieren
    // Dazu muss die _id UND die _rev mitgegeben werden
    // Es werden nur die Attribute gespeichert, die übergeben wurden. Auf diese Weise können Attribute entfernt werden
    myDB.insert(meinAuto).then(
        console.log
    ).catch(
        console.warn
    )

}

init();