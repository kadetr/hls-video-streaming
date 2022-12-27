import fs from "fs";
import { v4 } from "uuid";
import { db } from "../utils/db";
import { connectQueue } from "../queue/config";
import { IVideoRequest } from "../types/custom";
import { Response } from "express";

//Queue process config
const jobOptions = {
  removeOnComplete: true,
  attempts: 3,
  delay: 60000,
  lazyConnect: true,
  maxRetriesPerRequest: 5,
};
const nameQueue = "video-conversion";
const init = async (data: object) => {
  return await connectQueue(nameQueue).add(data, jobOptions);
};

// VIDEO PLAYER CONTROLLER
export const viewer = (req: IVideoRequest, res: Response) => {
  var filePath = `./playlists/${req.params.ID}.m3u8`;

  fs.readFile(filePath, function (error: any, content: any) {
    res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
    if (error) {
      if (error.code == "ENOENT") {
        res.writeHead(404, "no such file or directory");
        res.end();
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
export const lister = (req: any, res: Response) => {
  db.all(`SELECT * FROM videos`, [], function (err: Error, rows: any) {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
};

//VIDEO UPLOAD CONTROLLER
export const uploader = (req: any, res: Response) => {
  const ID = v4();
  const header = req.file.filename;
  const size = req.file.size;
  const createdDate = new Date().toLocaleString();
  db.all(
    "INSERT INTO videos (ID, header, size, createdDate)" +
      `VALUES (\"${ID}\", \"${header}\", \"${size}\", \"${createdDate}\")`,
    [],
    (err: Error) => {
      if (err) {
        throw err;
      }
    }
  );
  console.log(`Video uploaded : ${header}`);

  //Queue producer
  const data = { ID, header };
  init(data).then((res) => {
    console.log(res.data.header);
  });
};
