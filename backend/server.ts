import { fork } from "child_process";
import cors from "cors";
import express, { Express } from "express";
import dotenv from "dotenv";
import { upload } from "./utils/multerConfig";
import { viewer, lister, uploader } from "./controllers/videoController";

dotenv.config();

const app: Express = express();

//Queue consumer process
fork("queue/consumer.ts");

app.use(cors());

app.use("/videos", express.static("videos"));
app.use("/playlists", express.static("playlists"));

app.get("/", (req, res) => res.send("test: welcome to hls-streaming-server"));

app.get("/video/player/:ID", viewer);
app.get("/video", lister);
app.post("/video", upload.single("a-video"), uploader);

app.listen(6001);
console.log(`Server running at localhost:${6001}/`);
