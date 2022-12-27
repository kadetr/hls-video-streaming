import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  ListItem,
  ListItemContainer,
  ListPage,
  ListTitle,
  ListTitleContainer,
  ListWrapper,
  LoaderWrapper,
} from "./listElements";
import Loader from "../../components/loader/Loader";

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
      <ListTitleContainer>
        <ListTitle>List of Videos</ListTitle>
      </ListTitleContainer>
      <ListPage>
        {data.length !== 0 ? (
          <ListWrapper>
            {data.map((video) => (
              <ListItemContainer key={video.ID}>
                <ListItem to={`/video/player/${video.ID}`}>
                  {video.header.split(".")[0]}
                </ListItem>
              </ListItemContainer>
            ))}
          </ListWrapper>
        ) : (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        )}
      </ListPage>
    </>
  );
};

export default List;
