import logo from "./logo.svg";
import "./App.css";
import Video from "./components/Video";
import videos from "./data/data";
import PlayButton from "./components/PlayButton";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App" onClick={() => console.log('App')}>
      <div>Videos</div>
      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
        >
          <PlayButton
            message="play-msg"
            onPlay={() => console.log("playyy", video.title)}
            onPause={() => console.log("Pause", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
      <div style={{ clear: "both" }}>
        {/* <PlayButton message="play-msg" onPlay={()=>console.log('playyy')} onPause={()=>console.log('Pause')}>Play</PlayButton> */}
        {/* <PlayButton message="pause-msg" onPause={()=>alert('Pause')}>Pause</PlayButton> */}
        <Counter></Counter>
      </div>
    </div>
  );
}

export default App;
