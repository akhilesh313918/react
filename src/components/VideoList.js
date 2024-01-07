import Video from "./Video"
import PlayButton from "./PlayButton";

function VideoList({videos, deleteVideo, editVideo}){
return(
    <>
    {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
          deleteVideo={deleteVideo}
          editVideo={editVideo}
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