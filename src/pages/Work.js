import './Work.scss';
import {Await, useLoaderData, useNavigate, useParams} from "react-router-dom";
import WorkVideo from "../components/WorkVideo";
import {Suspense} from "react";

const WorkContent = (props) => {
  const {id: pathId} = useParams();
  const navigate = useNavigate()

  const worksArray = Object.values(props.loaderData);
  const currentVideoInfos = worksArray.filter(item => item.id === +pathId)[0];
  const handleSelectVideo = (id) => {
    navigate(`/work/${id}`)
  }

  return <section className="work-container pt-5">
    <WorkVideo title={currentVideoInfos.workPageTitle} src={currentVideoInfos.videoSrc} link={currentVideoInfos.vimeoLink}/>
    <div className="other-works-container row justify-content-center">
      {worksArray.map((item, index) => <button key={index} onClick={() => handleSelectVideo(item.id)} className="other-works-video">
        { item.workPageTitle }
      </button>)}
    </div>
  </section>
}


const Work = () => {
  const loaderData = useLoaderData();

  return <Suspense fallback={<p style={{textAlign: "center"}}>Loading...</p>}>
    <Await resolve={loaderData.texts}>
      {(texts) => <WorkContent loaderData={texts}/>}
    </Await>
  </Suspense>
};

export default Work;
