import React, {useRef, useState} from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
    const vidRef = useRef();
    const [playVideo, setPlayVideo ]  = useState(false);
    const [showButton, setShowButton ] = useState(false);
   
    const handleVideo = () => {
      setPlayVideo((prevPlayVideo) => !prevPlayVideo);

      if(playVideo) {
        vidRef.current.pause();
      }
      else {
        vidRef.current.play();
      }
    }
  
  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div 
        className = "app___video-overlay flex__center" 
        onMouseEnter = {()=> setShowButton(true)}
        onMouseLeave = {()=> setShowButton(false)}>
        {!playVideo ? (
           <div 
           className = "app__video-overlay_circle flex__center"
           onClick = {handleVideo}>
                 {(<BsFillPlayFill color = "#fff" fontSize = {30}/>) }
           </div>
        ):
        (showButton && (
            <div 
            className = "app__video-overlay_circle flex__center"
            onClick = {handleVideo}>
                {playVideo ? (
                  <BsPauseFill color = "#fff" fontSize = {30}/>)
                  : (<BsFillPlayFill color = "#fff" fontSize = {30}/>)}
            </div>
        )
        )
        }
      </div>
    </div>
  );
};

export default Intro;
