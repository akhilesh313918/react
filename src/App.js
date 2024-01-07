
import "./App.css";

import videosDB from "./data/data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import { useState } from "react";

function App() {
  const [videos, setVideos] = useState(videosDB);
  const [editableVideo, setEditableVideo] = useState(null);

  function addVideo(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }

  function deleteVideo(id){
    setVideos(videos.filter(video=>video.id!==id));
  }

  function editVideo(id){
    setEditableVideo(videos.find(video=>video.id===id));
  }

  function updateVideo(video){
    const index = videos.findIndex(v=>v.id===video.id);
    const newVideos = [...videos];
    newVideos.splice(index,1,video);
    console.log(newVideos)
    setVideos(newVideos);
  }

  return (
    <div className="App" onClick={() => console.log("App")}>
      
        <AddVideo addVideos={addVideo} updateVideo={updateVideo} editableVideo={editableVideo}></AddVideo>
        <VideoList deleteVideo={deleteVideo} editVideo={editVideo} videos={videos}></VideoList>
      
    </div>
  );
}

export default App;
