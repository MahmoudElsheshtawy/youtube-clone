import { useParams } from "react-router-dom"
import Playvideo from "../../components/playvideo/Playvideo"
import Recommend from "../../components/recommended/Recommend"
import "./Video.css"
 
const Video = () => {

  const {videoId,categoryId}= useParams()
  return (
  <div className="play-container">
    
 <Playvideo videoId={videoId} />
 <Recommend />


  </div>
  )
}

export default Video