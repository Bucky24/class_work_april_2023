// TODO: Install the following package:
import { openDB } from 'idb';

const databaseName = "opossum";

// TODO: Complete the initDb() function below:
const initdb = async () => {
    openDB(databaseName, 1, {
        upgrade(db) {
          if (db.objectStoreNames.contains(databaseName)) {
            console.log('database already exists');
            return;
          }
          db.createObjectStore(databaseName, { keyPath: 'id', autoIncrement: true });
          console.log('database created');
        },
    });
};


// TODO: Complete the postDb() function below:
export const postDb = async (name, home, cell, email)  => {
    const db = await openDB(databaseName, 1);
    const tx = db.transaction(databaseName, 'readwrite');
    const store = tx.objectStore(databaseName);
    const request = store.add({ name, home, cell, email });
    const result = await request;
    console.log('Data saved to the database', result);
};

// TODO: Complete the getDb() function below:
export const getDb = async () => {
    const db = await openDB(databaseName, 1);
    const tx = db.transaction(databaseName, 'readwrite');
    const store = tx.objectStore(databaseName);
    const request = store.getAll();
    return await request;
};

// TODO: Complete the deleteDb() function below:
export const deleteDb = async (id) => {
    const db = await openDB(databaseName, 1);
    const tx = db.transaction(databaseName, 'readwrite');
    const store = tx.objectStore(databaseName);
    const request = store.delete(id);
    await request;
};

initdb();
