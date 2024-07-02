import { useParams } from "react-router-dom"
import Playvideo from "../../components/playvideo/Playvideo"
import "./Video.css"
import Recommend from "../../components/recommend/Recommend"
 
const Video = () => {


  const {videoId,categoryId}= useParams()
  // console.log(videoId,categoryId)


  return (
  <div className="play-container">
    
 <Playvideo videoId={videoId} />
 <Recommend categoryId={categoryId}/>


  </div>
  )
}

export default Video