import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import Hls from "hls.js";
import { VideoContainer } from "./viewElements.js";

const View = () => {
  const { ID } = useParams();

  useEffect(() => {
    const playHLS = () => {
      const video = document.getElementById("video");
      const videoSrc = "http://localhost:6001/playlists/" + ID + ".m3u8";

      if (Hls.isSupported()) {
        const hls = new Hls();

        hls.loadSource(videoSrc);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play();
        });
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = videoSrc;
        video.addEventListener("loadedmetadata", () => {
          video.play();
        });
      }
    };
    playHLS();
  }, [ID]);

  return (
    <VideoContainer>
      <video
        id="video"
        width="600"
        height="600"
        controls
        autoPlay=""
        muted="muted"
      ></video>
    </VideoContainer>
  );
};

export default View;
