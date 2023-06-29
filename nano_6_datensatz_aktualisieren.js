'use strict';

// Credentials für die Anmeldung in Couch
const username = 'admin', password = 'asy';
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
    // Dazu muss die _id UND die _rev mitgegeben werden (Das wird hier jedoch wohl nicht gemacht.)
    // Es werden nur die Attribute gespeichert, die übergeben wurden. Auf diese Weise können Attribute entfernt werden
    myDB.insert(meinAuto).then(
        console.log
    ).catch(
        console.warn
    )

}

init();

// Vorher DB 'autos' anlegen!!
// Output:
/* {
    ok: true,
    id: '53df0649e94dc8f94c02e196d9006958',
    rev: '1-9d44f4de9e81e673cd73b888fa88292c'
  } */

// Bei erneutem Aufruf wird die ID geändert, aber die rev bleibt gleich
