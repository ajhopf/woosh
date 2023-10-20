const WorkVideo = (props) => {
  return <>
    <div className="d-none d-md-inline">
      <h1 className="ms-5">{props.title}</h1>
      <hr className="m-5"/>
    </div>

    <div className="work-video-container text-center mb-5">
      <iframe
        title={props.title}
        src={ props.src }
        className="work-iframe"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen>
      </iframe>
    </div>
  </>
};

export default WorkVideo;