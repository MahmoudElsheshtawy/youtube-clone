/* eslint-disable react/prop-types */
import "./Playvideo.css";

// import video from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
// import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import { useEffect, useState } from "react";
import { API_KEY, Count_value } from "../../data";
import moment from "moment/moment";

const Playvideo = ({ videoId }) => {
  const [apidata, setApidata] = useState(null);
  const [somedata, setSomedata] = useState(null);
  //fech info for chanal
  const fechapidata = async () => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );
      const data = await response.json();
      setApidata(data.items[0]);
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(apidata);
  useEffect(() => {
    fechapidata();
  }, []);
  //  somedata kind of supscriper and some fetsher
  const fechsomedata = async () => {
    try {
      const response = await fetch(
        // `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&id=${apidata.snippet.channelId}&key=${API_KEY}`
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelId}&key=${API_KEY}`
      );
      const data = await response.json();
      setSomedata(data.items[0]);
    } catch (error) {
      console.error(error);
    }

  };
  console.log(somedata);
  useEffect(() => {
    fechsomedata();
  }, [apidata]);
  return (
    <>
      <div className="play-video">
        {/* <video src={`https://www.youtube.com/embed/${VideoId} `} controls autoPlay muted loop></video> */}
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
        ></iframe>
        <h3>{apidata ? apidata.snippet.title : "on title"}</h3>
        <div className="play-video-info">
          <p>
            {apidata ? Count_value(apidata.statistics.viewCount) : ""} views .{" "}
            {apidata ? moment(apidata.snippet.publishedAt).fromNow() : ""}{" "}
          </p>
          <div className="like">
            <span>
              <img src={like} alt="" />
              {apidata ? Count_value(apidata.statistics.likeCount) : ""}
            </span>
            <span>
              <img src={dislike} alt="" />
            </span>
            <span>
              <img src={share} alt="" />
            </span>
            <span>
              <img src={save} alt="" />
            </span>
          </div>
        </div>
        <hr />
        <div className="publisher">
          <img
            src={somedata ? somedata.snippet.thumbnails.default.url : ""}
            alt=""
          />
          <div>
            <p>{apidata ? apidata.snippet.channelTitle : ""}</p>
            {/* some */}
            <span>{ 
            somedata?Count_value( somedata.statistics.subscriberCount):""
            
            }</span>
          </div>
          <button>Subscribe</button>
        </div>
        <div className="vid-discription">
          <p>{apidata ? apidata.snippet.description.slice(0, 250) : ""}</p>
          <hr />
          <h4>
            {apidata ? Count_value(apidata.statistics.commentCount) : ""}{" "}
            Comments
          </h4>
          <div className="comments">
            <img src={user_profile} alt="" />
            <div>
              <h3>
                Jack Awadns <span>1 day ago</span>{" "}
              </h3>
              <p>
                dolor sit amet consectetur adipisicing elit. Nulla explicabo est
                quis optio expedita.
              </p>
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
              <h3>
                Jack Awadns <span>1 day ago</span>{" "}
              </h3>
              <p>
                dolor sit amet consectetur adipisicing elit. Nulla explicabo est
                quis optio expedita.
              </p>
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
              <h3>
                Jack Awadns <span>1 day ago</span>{" "}
              </h3>
              <p>
                dolor sit amet consectetur adipisicing elit. Nulla explicabo est
                quis optio expedita.
              </p>
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
