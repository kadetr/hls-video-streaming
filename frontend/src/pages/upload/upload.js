import axios from "axios";
import { useState } from "react";
import {
  UploadButton,
  UploadButtonLabel,
  UploadForm,
  UploadInput,
  UploadTitle,
  UploadTitleContainer,
  UploadWrapper,
} from "./uploadElements";

const baseURL = "http://localhost:6001/video";

const Upload = () => {
  const [file, setFile] = useState("");

  const uploadFileHandler = async (e) => {
    setFile(e.target.files[0]);
  };
  const uploadFile = () => {
    try {
      const formData = new FormData();
      formData.append("a-video", file);
      axios.post(baseURL, formData, {});
      setFile("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <UploadTitleContainer>
        <UploadTitle>Upload a Video</UploadTitle>
      </UploadTitleContainer>
      <UploadWrapper>
        <UploadForm action="/upload" method="post">
          <UploadButtonLabel htmlFor="file-upload">
            Choose Video File
          </UploadButtonLabel>
          <UploadInput
            id="file-upload"
            type="file"
            name="a-video"
            accept="video/*"
            onChange={uploadFileHandler}
          />
        </UploadForm>
        {file === "" ? (
          <UploadButton
            onClick={uploadFile}
            disabled
            style={{ backgroundColor: "#ccc" }}
          >
            Upload Video
          </UploadButton>
        ) : (
          <UploadButton onClick={uploadFile} style={{ cursor: "pointer" }}>
            Upload Video
          </UploadButton>
        )}
      </UploadWrapper>
    </>
  );
};

export default Upload;
