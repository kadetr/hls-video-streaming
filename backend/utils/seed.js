const { exec } = require("child_process");
const db = require("./db");
const { v4 } = require("uuid");
const { connectQueue } = require("../queue/config");

const jobOptions = {
  removeOnComplete: true,
  delay: 60000,
  attempts: 3,
};
const nameQueue = "video-conversion";
const init = async (data) => {
  return await connectQueue(nameQueue).add(data, jobOptions);
};

function insertRow() {
  const ID = v4();
  const header = process.argv[2];
  const createdDate = new Date().toLocaleString();
  const size = 13;

  const data = { ID, header };

  init(data).then((res) => {
    console.log(res.data.header);
  });

  db.run(
    `INSERT INTO videos (ID, header, size, createdDate) VALUES (?, ?, ?, ?)`,
    [ID, header, size, createdDate],
    function (error) {
      if (error) {
        console.error(error.message);
      }
      console.log(`Seed inserted a row. ID: ${ID}`);
    }
  );
}

insertRow();
process.exit(1);
