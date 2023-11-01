import './Who.scss';

import bolivar from '../assets/who/bgelpi.PNG';
import studio from '../assets/who/studio.jpeg';
import inspiration from '../assets/who/inspiration.jpg';

const texts = {
  about: [
    "Bolívar is not just an audio mixer; he's a masterful creator of soundscapes. ",
    "With a portfolio that includes collaborations with renowned brands like Corona, Canal Off, Mizuno, Olympikus," +
    " and TikTok, he has become a true maestro in the world of audio production. " +
    "His artistic journey began as the lead vocalist and founder of the band Gelpi, a musical venture that also" +
    " featured his talented siblings.",
    "Bolívar's passion for music and audio innovation has evolved over the years, and he's now the driving force behind Woosh, his own brand. " +
    "His ability to blend the auditory and visual realms into a harmonious symphony is what sets him apart. He" +
    " is not just a sound mixer; he's a storyteller through audio."
  ],
  studio: [
    "Bolívar's creative sanctuary is nothing short of extraordinary.",
    "Nestled within the comfort of his own home, he has meticulously crafted a studio space that's a true " +
    "testament to his dedication and passion for audio production. The studio serves as both a workspace and a " +
    "haven for his artistic endeavors, where he orchestrates the melodies that resonate with brands and audiences" +
    " alike.",
    "With state-of-the-art equipment and a design that marries functionality with aesthetics," +
    " Bolívar's studio is a place where innovation thrives. It's where every note, every beat, and every" +
    " sound comes to life, reflecting the essence of his artistry."
  ],
  inspiration: [
    "Bolívar draws inspiration from a multitude of sources, each contributing to the richness and diversity of his" +
    " work.",
    "Nature's symphony, with its rustling leaves and babbling brooks, often finds its way into his compositions, " +
    "infusing a sense of serenity and connection with the environment. Human stories and experiences are another " +
    "wellspring of inspiration, as he strives to encapsulate the essence of emotions and narratives through his music. " +
    "The works of legendary musicians and contemporary innovators have also left an indelible mark on his creative" +
    " process. ",
    "With an insatiable appetite for exploration, Bolívar constantly seeks new sounds and cultures that can broaden the " +
    "horizons of his musical landscapes. His creative journey is a dynamic blend of influences, continually " +
    "evolving and redefining the boundaries of what audio can achieve."
  ]
};



const Who = () => {
  return <section className="who-container">
    <div className="first-content row">
      <div className="text-wrapper col-12 col-md-6 d-flex flex-column justify-content-center px-5">
        <h1>Bolívar Gelpi</h1>
        <hr/>
        { texts.about.map(text => <p>{ text }</p>) }
      </div>
      <div className="image-wrapper col-12 col-md-6 d-flex align-items-center ps-0">
        <img src={ bolivar } alt="Bolívar Gelpi"/>
      </div>
    </div>

    <div className="second-content row flex-column-reverse flex-md-row">
      <div className="image-wrapper col-12 col-md-6 d-flex align-items-center pe-0">
        <img className="studio-image" src={ studio } alt="Woosh Studio"/>
      </div>
      <div className="text-wrapper col-12 col-md-6 d-flex flex-column justify-content-center px-5">
        <h2>Studio</h2>
        <hr/>
        { texts.studio.map(text => <p>{ text }</p>) }
      </div>
    </div>

    <div className="first-content row">
      <div className="text-wrapper col-12 col-md-6 d-flex flex-column justify-content-center px-5">
        <h2>Inspiration</h2>
        <hr/>
        { texts.inspiration.map(text => <p>{ text }</p>) }
      </div>
      <div className="image-wrapper col-12 col-md-6 d-flex align-items-center ps-0">
        <img src={ inspiration } alt="Water pond"/>
      </div>
    </div>
  </section>;
};

export default Who;