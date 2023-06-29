'use strict';

// Credentials für die Anmeldung in Couch
const username = 'admin', password = 'asy';
const dbName = 'autos';
// const id = '53df0649e94dc8f94c02e196d900c0d2';


// Verbindung zu Couch herstellen
const db = require('nano')(`http://${username}:${password}@127.0.0.1:5984`).db;


const init = () => {

    // use() ist die einzige Methode, die kein Promise ist
    let myDB = db.use(dbName);

    myDB.destroy(
        "53df0649e94dc8f94c02e196d900c0d2",  // ID
        "1-9d44f4de9e81e673cd73b888fa88292c" // Revision
    ).then(
        console.log
    ).catch(
        console.warn
    )

}

init();

// Output:
/* {
    ok: true,
    id: '53df0649e94dc8f94c02e196d900c0d2',
    rev: '2-f9d6fa0e7d3c4859029c5a58121acdbf'
} */

// Output: if object not found:
/* Error: missing
    at responseHandler (C:\Users\peter\alfatraining\js\unterricht\couchdb\node_modules\nano\lib\nano.js:206:20)
    at C:\Users\peter\alfatraining\js\unterricht\couchdb\node_modules\nano\lib\nano.js:456:13
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  scope: 'couch',
  statusCode: 404,
  request: {
    method: 'delete', */