'use strict';

// Credentials für die Anmeldung in Couch
const username = 'admin', password = 'asy';
const dbName = 'autos';
const id = '53df0649e94dc8f94c02e196d900c0d2'; // wird ggf. nicht benutzt!


// Verbindung zu Couch herstellen
const db = require('nano')(`http://${username}:${password}@127.0.0.1:5984`).db;


const init = () => {

    // use() ist die einzige Methode, die kein Promise ist
    let myDB = db.use(dbName);

    myDB.find({
        // look for id
        /* selector: {
            _id: id
        } */

        /* selector:{
            marke: 'Hyundai'
        } */
        
        selector:{
            leistungKW: {
                '$gt': 100,
                '$lt': 200
            }
        }
    }).then(
        res => res.docs
    ).then(
        console.log
    ).catch(
        console.warn
    )

}

init();


// Output: Wenn nicht gefunden:  []

// Output: Wenn gefunden:
/* [
    {
        _id: '53df0649e94dc8f94c02e196d900c0d2',
        _rev: '1-9d44f4de9e81e673cd73b888fa88292c',
        marke: 'Fiat',
        modell: 'Stilo',
        leistungKW: 102,
        farbe: 'Nachtblau',
        leasing: false
    }
] */