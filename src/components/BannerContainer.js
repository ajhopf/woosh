import waveVideo from "../assets/wave-video.mp4";

import logo from "../assets/woosh-icons/icon_audio_productions_preto.png";
import waveFirstFrame from "../assets/wave-video-first-frame.png";

import './BannerContainer.scss'

const BannerContainer = () => {
  return <div className="banner-container">
    <video id="background-video" autoPlay loop muted poster={ waveFirstFrame }>
      <source src={ waveVideo } type="video/mp4" />
    </video>
    <div className="banner-logo-container">
      <img className="body-img" src={ logo } alt="Woosh logo"/>
    </div>
  </div>
}

export default BannerContainer;