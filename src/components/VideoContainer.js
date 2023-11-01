import video from "../assets/woman-listening-music.mp4";
import waveVideo from "../assets/wave-video.mp4";

import logo from "../assets/logo_transparante_preto.png";
import firstFrame from "../assets/video-first-frame.PNG"
import waveFirstFrame from "../assets/wave-video-first-frame.png";

import './VideoContainer.scss'

const VideoContainer = () => {
  return <div className="video-container">
    <video id="background-video" autoPlay loop muted poster={ waveFirstFrame }>
      <source src={ waveVideo } type="video/mp4" />
    </video>
    <img className="img body-img" src={ logo } alt="Woosh logo"/>
  </div>
}

export default VideoContainer;