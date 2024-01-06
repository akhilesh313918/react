import "./AddVideo.css";
import { useState } from "react";

const initalState = {views: "1M",
time: "1 week ago",
channel: "Code with Akhilesh",
verified: false,
title: "",
views: ""}

function AddVideo({ addVideos }) {
  const [video, setVideo] = useState(initalState);
  function handleSubmit(e) {
    e.preventDefault();
    addVideos(video);
    setVideo(initalState);
  }

  function handleChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
        value={video.title}
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views"
        value={video.views}
      />
      <button
        onClick={handleSubmit}
      >
        Add Video
      </button>
    </form>
  );
}

export default AddVideo;
