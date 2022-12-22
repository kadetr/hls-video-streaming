const ffmpeg = require("fluent-ffmpeg");
const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
const {
  handlerFailure,
  handlerCompleted,
  handlerStalled,
} = require("./handler");
const { connectQueue } = require("./config");

const nameQueue = "video-conversion";
const cases = connectQueue(nameQueue);

const processJob = (job, done) => {
  console.log(job.data.header);
  try {
    ffmpeg.setFfmpegPath(ffmpegInstaller.path);

    ffmpeg(`${__dirname}/../videos/${job.data.header}`, { timeout: 432000 })
      .addOptions([
        "-profile:v baseline",
        "-level 3.0",
        "-start_number 0",
        "-hls_time 5",
        "-hls_list_size 0",
        "-f hls",
      ])
      .output(`${__dirname}/../playlists/${job.data.ID}.m3u8`)
      .on("end", () => {
        console.log("video conversion completed!");
      })
      .run();

    done(null, "success");
  } catch (error) {
    done(null, error);
  }
};

const initJob = () => {
  console.info("video conversion is working!");
  cases.process(processJob);
  cases.on("failed", handlerFailure);
  cases.on("completed", handlerCompleted);
  cases.on("stalled", handlerStalled);
};

initJob();
