'use strict';

// Credentials für die Anmeldung in Couch
const username = 'alfa', password = 'alfa';
const dbName = 'autos';
const meinAuto = {
    _id: '123',
    marke: 'Hyundai',
    modell:'i20',
    leistungKW: 62,
    farbe: 'braun',
    leasing: false
}

// Verbindung zu Couch herstellen
const db = require('nano')(`http://${username}:${password}@127.0.0.1:5984`).db;




const init = () => {

    // use() ist die einzige Methode, die kein Promise ist
    let myDB = db.use(dbName);

    // console.log(myDB);
    myDB.insert(meinAuto).then(
        console.log
    ).catch(
        console.warn
    )

}

init();