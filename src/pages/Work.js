import './Work.scss';
import {defer, useLoaderData, useNavigate, useParams} from "react-router-dom";
import WorkVideo from "../components/WorkVideo";

const Work = () => {
  const loaderData = useLoaderData();
  const {id: pathId} = useParams();
  const navigate = useNavigate()
  console.log(loaderData.works)

  const currentVideoInfos = loaderData.works.filter(item => item.id === +pathId)[0];

  const handleSelectVideo = (id) => {
    navigate(`/work/${id}`)
  }

  return <section className="work-container pt-5">
    <WorkVideo title={currentVideoInfos.title} src={currentVideoInfos.src} link={currentVideoInfos.videoLink}/>
    <div className="other-works-container row justify-content-center">
      {loaderData.works.map(item => <button onClick={() => handleSelectVideo(item.id)} className="other-works-video">
        { item.title }
      </button>)}
    </div>
  </section>
};

export default Work;

const loadWorks = () => {
  return [
    {
      title: "OLYMPIKUS - Bota Pra Correr",
      src: "https://player.vimeo.com/video/780762598?h=6d73d524b0",
      videoLink: "https://vimeo.com/780762598",
      wooshChannel: "https://vimeo.com/wooshaudio",
      id: 1
    },
    {
      title: "CORONA - Fôlego",
      src: "https://player.vimeo.com/video/733429209?h=50c104343b",
      videoLink: "https://vimeo.com/733429209",
      wooshChannel: "https://vimeo.com/wooshaudio",
      id: 2
    },
    {
      title: "UNDER ARMOUR - Streetopia Open",
      src: "https://player.vimeo.com/video/780762359?h=001a7d3bf0",
      videoLink: "https://vimeo.com/780762359",
      wooshChannel: "https://vimeo.com/wooshaudio",
      id: 3
    },
    {
      title: "MIZUNO - Ozaka Marathon",
      src: "https://player.vimeo.com/video/814000586?h=df1b8ca823",
      videoLink: "https://vimeo.com/814000586",
      wooshChannel: "https://vimeo.com/wooshaudio",
      id: 4
    }
  ];
}

export const loader = () => {
  return defer({
    works: loadWorks()
  })
}
