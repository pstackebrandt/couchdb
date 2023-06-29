'use strict';

// Credentials für die Anmeldung in Couch
const username = 'alfa', password = 'alfa';
const dbName = 'autos';
const id = '9963fa874156e7655913f8829200ce34';


// Verbindung zu Couch herstellen
const db = require('nano')(`http://${username}:${password}@127.0.0.1:5984`).db;


const init = () => {

    // use() ist die einzige Methode, die kein Promise ist
    let myDB = db.use(dbName);

    myDB.find({
        /*selector:{
            marke: 'Hyundai'
        }*/
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