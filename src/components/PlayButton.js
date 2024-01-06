import './PlayButton.css'
import { useState } from "react";
function PlayButton({message, children, onPlay, onPause}){
    
    //let playing = false; // dont use this approach, we will replace it with hooks
    const [playing, setPlaying] = useState(false);
    function handleClick(e){
        console.log(e);
        e.stopPropagation();
        if(playing) onPause()
        else onPlay();

        setPlaying(!playing);
    }
return (
    <button onClick={handleClick}>{children} : {playing ? '▶️' :'⏸️'}</button>
)
}

export default PlayButton;