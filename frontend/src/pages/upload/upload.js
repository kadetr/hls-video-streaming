import "./upload.css";
import axios from "axios";
import { useState } from "react";

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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {/* <Header /> */}
      <form action="/upload" method="post">
        <input
          type="file"
          name="a-video"
          accept="video/*"
          onChange={uploadFileHandler}
        />
      </form>
      <button onClick={uploadFile}>Upload Video</button>
    </div>
  );
};

export default Upload;
