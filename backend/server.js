const cors = require("cors");
const express = require("express");
const upload = require("./utils/multerConfig.js");
const {
  viewer,
  lister,
  uploader,
} = require("./controllers/videoController.js");

const app = express();

const port = 6001;

app.use(cors());

app.use("/videos", express.static("videos"));
app.use("/playlists", express.static("playlists"));

app.get("/", (req, res) => res.send("test: welcome to hls-streaming-server"));

app.get("/video/player/:ID", viewer);
app.get("/video", lister);
app.post("/video", upload.single("a-video"), uploader);

app.listen(port);
console.log(`Server running at localhost:${port}/`);
