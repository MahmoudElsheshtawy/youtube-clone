/* eslint-disable react/prop-types */

import "./Feed.css";

import { Link } from "react-router-dom";
import { API_KEY, Count_value } from "../../data";
import { useEffect, useState } from "react";
import moment from "moment";

const Feed = ({ cattegory }) => {
  const [data, setData] = useState([]);


  const fechData = async () => {
    const videoList_url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=EG&videoCategoryId=${cattegory}&key=${API_KEY} `;
    await fetch(videoList_url)
      .then((res) => res.json())
      .then((data) => setData(data.items));
  };

  // console.log(data)
  useEffect(() => {
    fechData();
  }, [cattegory]);

  return (
    <div className="feed">
      {data.map((item, index) => {
        return (
          <Link
          // item.snippet.categoryId
            to={`video/${17}/${item.id}`}
            className="card"
            key={index}
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {Count_value(item.statistics.viewCount)} views .{" "}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}

    </div>
  );
};

export default Feed;
