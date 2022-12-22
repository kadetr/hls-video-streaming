const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const filepath = "./cat.db";

function createDbConnection() {
  if (fs.existsSync(filepath)) {
    return new sqlite3.Database(filepath);
  } else {
    const db = new sqlite3.Database(filepath, (error) => {
      if (error) {
        return console.error(error.message);
      }
      createTable(db);
    });
    console.log("Connection with SQLite has been established");
    return db;
  }
}
function createTable(db) {
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

module.exports = createDbConnection();
