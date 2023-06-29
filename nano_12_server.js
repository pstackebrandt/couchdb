'use strict';

// EXPRESS
const express = require('express');
const server = express();

server.use(express.static('public', {
    extensions: ['html']
}));

// COUCH
const username = 'admin', password = 'asy';
const db = require('nano')(`http://${username}:${password}@127.0.0.1:5984`).db;
const dbName = 'autos';

// ROUTEN
server.get('/load_all_data', (request, response) => {
    const myDB = db.use(dbName);

    myDB.list({
        include_docs:true
    }).then(
        res => res.rows.map(val => val.doc)
    ).then(
        // Alle Datensätze ausfiltern, deren id NICHT mit '_design' beginnt
        res => res.filter(val => !val._id.startsWith('_design'))
    ).then(
        res => {
            // console.log(res);
            response.json(res);
        }
    ).catch(
        console.warn
    )
})

// FUNKTIONEN
const init = () => {
    server.listen(80, err => console.log(err || 'Server läuft'));
}

init();