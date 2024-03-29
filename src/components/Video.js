import './Video.css';

function Video({id, title, channel="Code with Akhilesh", views, time, verified, children, deleteVideo, editVideo}){
    
return(
    <>
    <div className="container">
      <button className='close'onClick={()=> deleteVideo(id)}>X</button>
      <button className='edit'onClick={()=> editVideo(id)}>edit</button>
    <div className="pic">
    <img src={`https://source.unsplash.com/random/200x200?sig=${id}`} alt="Katherine Johnson"/>
      <div className="title">{title}</div>
     <div className="channel">{channel} {verified && '✅'}</div>
      <div className="views">{views} views<span>.</span>{time}</div>
      </div>
      <div>
        {children}
      </div>
      </div>
    </>
)
}

export default Video;