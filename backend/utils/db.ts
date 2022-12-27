import fs from "fs";
import sqlite3 from "sqlite3";
// const filepath = process.env.DB_PATH;
const filepath = "./db/cat.db";

const initDB = sqlite3.verbose();

function createDbConnection() {
  if (fs.existsSync(filepath)) {
    return new initDB.Database(filepath);
  } else {
    const db = new initDB.Database(filepath, (error) => {
      if (error) {
        return console.error(error.message);
      }
      createTable(db);
    });
    console.log("Connection with SQLite has been established");
    return db;
  }
}
function createTable(db: any) {
  db.exec(`
    CREATE TABLE videos
    (
      ID VARCHAR(50) PRIMARY KEY,
      header    VARCHAR(50),
      size   INTEGER,
      createdDate   VARCHAR(50) NOT NULL
    );
  `);
}

export const db = createDbConnection();
