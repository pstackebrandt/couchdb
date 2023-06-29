'use strict';

// Verbindung zu Couch herstellen
const nano = require('nano');
const connection = nano('http://127.0.0.1:5984');
const db = connection.db;

console.log(db);

// Output: Shows nano database scope object
// ---------------------------------------
/* {
    create: [Function: createDb],
    get: [Function: getDb],
    destroy: [Function: destroyDb],
    list: [Function: listDbs],
    listAsStream: [Function: listDbsAsStream],
    use: [Function: docModule],
    scope: [Function: docModule],
    compact: [Function: compactDb],
    replicate: [Function: replicateDb],
    replication: {
      enable: [Function: enableReplication],
      disable: [Function: disableReplication],
      query: [Function: queryReplication]
    },
    changes: [Function: changesDb],
    updates: [Function: updates]
  } */