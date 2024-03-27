import './HomeLoading.scss'

const HomeLoading = ({children, isLoading}) => {

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

export default HomeLoading;