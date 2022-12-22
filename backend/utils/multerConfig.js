var multer = require("multer");

const storageVideo = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "videos/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storageVideo,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "video/mp4" || "video/avi" || "video/wmv") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .mp4, avi or wmv formats allowed!"));
    }
  },
});

module.exports = upload;
