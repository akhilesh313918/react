import Video from "./Video"
import PlayButton from "./PlayButton";

function VideoList({videos}){
return(
    <>
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
    </>
)
}

export default VideoList;