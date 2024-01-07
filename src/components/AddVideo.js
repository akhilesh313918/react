import "./AddVideo.css";
import { useEffect, useState } from "react";

const initalState = {views: "1M",
time: "1 week ago",
channel: "Code with Akhilesh",
verified: false,
title: "",
views: ""}

function AddVideo({ addVideos, updateVideo, editableVideo }) {
  const [video, setVideo] = useState(initalState);
  
  function handleSubmit(e) {
    e.preventDefault();
    if(editableVideo){
      updateVideo(video)
    }else{
      addVideos(video);
    }
    
    setVideo(initalState);
  }

  function handleChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

useEffect(() => {
  console.log('effect');
  if(editableVideo){
    setVideo(editableVideo);
  }
},[editableVideo])

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
        {editableVideo ? 'Edit' : 'Add'} video
      </button>
    </form>
  );
}

export default AddVideo;
