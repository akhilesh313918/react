
import "./App.css";

import videosDB from "./data/data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import { useState } from "react";

function App() {
  const [videos, setVideos] = useState(videosDB);

  function addVideo(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }

  return (
    <div className="App" onClick={() => console.log("App")}>
      
        <AddVideo addVideos={addVideo}></AddVideo>
        <VideoList videos={videos}></VideoList>
      
    </div>
  );
}

export default App;
