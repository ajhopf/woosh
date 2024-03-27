import './Contact.scss'
import SocialMediaIcons from "../components/SocialMediaIcons";
import wooshStudio from '../assets/woosh-icons/icon-studio.png'
import Transition from "../components/Transition";

const Contact = () => {
  return <Transition>
    <div className="contact-container">
      <h2>REACH OUT</h2>
      <p>If you're interested in learning more about our love for music and innovative ideas, don't hesitate to reach out.</p>
      <button>Algum botão. O que eu faço?</button>
    </div>
    <footer className="contact-footer">
      <img className="footer-icon" src={wooshStudio} alt="Woosh studio logo"/>
      <div className="contact-social-media">
        <SocialMediaIcons/>
      </div>
    </footer>
  </Transition>
}

export default Contact;