import video from "../assets/woman-listening-music.mp4";
import logo from "../assets/logo_transparente_branco.png";
import firstFrame from "../assets/video-first-frame.PNG"

import './VideoContainer.scss'

const VideoContainer = () => {
  return <div className="video-container">
    <video id="background-video" autoPlay loop muted poster={ firstFrame }>
      <source src={ video } type="video/mp4" />
    </video>
    <img className="img body-img" src={ logo } alt="Woosh logo"/>
  </div>
}

export default VideoContainer;