import "./Playvideo.css";

import video from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share  from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from '../../assets/user_profile.jpg'





const Playvideo = () => {
  return (
    <>
      <div className="play-video">
        <video src={video} controls autoPlay muted loop></video>
          <div className="play-video-info">
            <p>1323 views &bull; 2 days ago</p>
            <div>
                <span><img src={like} alt="" /></span>
                <span><img src={dislike} alt="" /></span>
                <span><img src={share} alt="" /></span>
                <span><img src={save} alt="" /></span>
            </div>
          </div>




      </div>
    </>
  );
};

export default Playvideo;
