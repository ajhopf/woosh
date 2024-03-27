import './Transition.scss'
import {useEffect, useState} from "react";

const Transition = ({children}) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, []);

  return <>
    <div className={isLoading ? 'transition-container' : 'transition-container hideLoading'}>
      <div className='left'>
      </div>
      <div className='center'>
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