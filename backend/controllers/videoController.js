const { v4 } = require("uuid");
const db = require("../utils/db.js");
const { connectQueue } = require("../queue/config");

//Queue
const jobOptions = {
  removeOnComplete: true,
  delay: 60000,
  attempts: 3,
};
const nameQueue = "video-conversion";
const init = async (data) => {
  return await connectQueue(nameQueue).add(data, jobOptions);
};

// VIDEO PLAYER CONTROLLER
const viewer = (req, res) => {
  var filePath = `./playlists/${req.params.ID}.m3u8`;

  fs.readFile(filePath, function (error, content) {
    res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
    if (error) {
      if (error.code == "ENOENT") {
        fs.send("no such file or directory", function (error, content) {
          res.end(content, "utf-8");
        });
      } else {
        res.writeHead(500);
        res.end(
          "reach out admin concerning the issue : " + error.code + " ..\n"
        );
        res.end();
      }
    } else {
      res.end(content, "utf-8");
    }
  });
};

// VIDEO LIST CONTROLLER
const lister = (req, res) => {
  db.all(`SELECT * FROM videos`, [], function (err, rows) {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
};

//VIDEO UPLOAD CONTROLLER
const uploader = (req, res) => {
  const ID = v4();
  const header = req.file.filename;
  const size = req.file.size;
  const createdDate = new Date().toLocaleString();

  db.all(
    "INSERT INTO videos (ID, header, size, createdDate)" +
      `VALUES (\"${ID}\", \"${header}\", \"${size}\", \"${createdDate}\")`,
    [],
    (err) => {
      if (err) {
        throw err;
      }
    }
  );
  console.log(`Video uploaded : ${header}`);

  //Queue
  const data = { ID, header };
  init(data).then((res) => {
    console.log(res.data.header);
  });
};

module.exports = { viewer, lister, uploader };
