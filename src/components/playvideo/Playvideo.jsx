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
        <h3>Best YouTube Channel To Learn Web Development</h3>
          <div className="play-video-info">
            <p>1323K views &bull; 2 days ago</p>
            <div>
                <span><img src={like} alt="" /></span>
                <span><img src={dislike} alt="" /></span>
                <span><img src={share} alt="" /></span>
                <span><img src={save} alt="" /></span>
            </div>
          </div>
          <hr />
          <div className="publisher">
            <img src={jack} alt="" />
            <div>
              <p>GreatStack</p>
              <span>1M Subscribers</span>
            </div>
            <button>Subscribe</button>
          </div>
          <div className="vid-discription">
            <p>Channel that makes learning Easy</p>
            <p> ipsum dolor sit amet consectetur adipisicing elit. Quos, similique?</p>
            <hr />
            <h4>130 Comments</h4>
            <div className="comments">
              <img src={user_profile} alt="" />
              <div>
                <h3>Jack Awadns <span>1 day ago</span> </h3>
                <p>dolor sit amet consectetur adipisicing elit. Nulla explicabo est quis optio expedita.</p>
                 <div className="comment-action">
                  <img src={like} alt="" />
                  <span>300</span>
                  <img src={dislike} alt="" />
                 </div>


              </div>
            </div>
            <div className="comments">
              <img src={user_profile} alt="" />
              <div>
                <h3>Jack Awadns <span>1 day ago</span> </h3>
                <p>dolor sit amet consectetur adipisicing elit. Nulla explicabo est quis optio expedita.</p>
                 <div className="comment-action">
                  <img src={like} alt="" />
                  <span>300</span>
                  <img src={dislike} alt="" />
                 </div>


              </div>
            </div>
            <div className="comments">
              <img src={user_profile} alt="" />
              <div>
                <h3>Jack Awadns <span>1 day ago</span> </h3>
                <p>dolor sit amet consectetur adipisicing elit. Nulla explicabo est quis optio expedita.</p>
                 <div className="comment-action">
                  <img src={like} alt="" />
                  <span>300</span>
                  <img src={dislike} alt="" />
                 </div>


              </div>
            </div>
          </div>





      </div>
    </>
  );
};

export default Playvideo;
