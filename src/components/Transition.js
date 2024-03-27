import './Transition.scss'
import {useEffect, useState} from "react";
import woosh from '../assets/favicons/fv-woosh_audio_b96x96.png'

const Transition = ({children}) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, []);

  return <>
    <div className={isLoading ? 'transition-container' : 'transition-container hideLoading'}>
      <div className='left'>
      </div>
      <div className='center'>
        <img src={woosh}/>
      </div>
      <div className='right'>
      </div>
    </div>
    <div className={isLoading ? 'hide' : undefined}>
      {children}
    </div>
  </>

};

export default Transition;