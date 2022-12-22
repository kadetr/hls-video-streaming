import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const baseURL = "http://localhost:6001/video";

const List = () => {
  const [videoList, setVideoList] = useState({});

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setVideoList(response.data);
    });
  }, []);

  let data = Array.from(videoList);

  return (
    <>
      {data.map((video) => (
        <div key={video.ID}>
          <Link to={`/video/player/${video.ID}`}>
            {video.header} && {video.ID}
          </Link>
        </div>
      ))}
    </>
  );
};

export default List;
