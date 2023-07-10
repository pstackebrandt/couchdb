// file name:  nano_5_datensatz_anlegen_ES6_Import.mjs

// Credentials für die Anmeldung in Couch
const username = 'admin';
const password = 'asy';
const dbName = 'autos';

const meinAuto = {
  // _id: '1234', // _id wird automatisch generiert
  marke: 'Hyundai',
  modell: 'i20',
  leistungKW: 62,
  farbe: 'braun',
  leasing: false,
};

// Verbindung zu Couch herstellen
import nano from 'nano';

const db = nano(`http://${username}:${password}@127.0.0.1:5984`).db;

const init = () => {
  // use() ist die einzige Methode, die kein Promise ist
  let myDB = db.use(dbName);

  myDB
    .insert(meinAuto)
    .then(console.log)
    .catch(console.warn);
};

init();

// Vorher DB 'autos' anlegen!!
// Output: { ok: true, id: '123', rev: '1-5058ba06b28c9c52139109a1c975f009' }
