import { useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import Hls from "hls.js";

const View = () => {
  const { ID } = useParams();

  function playHLS() {
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
  }

  return (
    <>
      <video id="video" width="500" height="500" controls></video>
      <button onClick={() => playHLS()}>push me</button>
    </>
  );
};

export default View;
