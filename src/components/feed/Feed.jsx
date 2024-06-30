/* eslint-disable react/prop-types */

import "./Feed.css"
// import thumbnail1 from "../../assets/thumbnail1.png"
// import thumbnail2 from "../../assets/thumbnail2.png"
// import thumbnail3 from "../../assets/thumbnail3.png"
// import thumbnail4 from "../../assets/thumbnail4.png"
// import thumbnail5 from "../../assets/thumbnail5.png"
// import thumbnail6 from "../../assets/thumbnail6.png"
// import thumbnail7 from "../../assets/thumbnail7.png"
// import thumbnail8 from "../../assets/thumbnail8.png"
import { Link } from "react-router-dom"
import { API_KEY, Count_value } from "../../data"
import { useEffect, useState } from "react"
import moment from "moment"

const Feed = ({cattegory}) => {
    const [data ,setData]=useState([])

const fechData = async()=>{
    const videoList_url =` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=EG&videoCategoryId=${cattegory}&key=${API_KEY} `
  await  fetch(videoList_url )
            .then(res=>res.json())
            .then(data=>setData(data.items))
         
}

// console.log(data)
useEffect(()=>{
fechData()

},[cattegory])

  return (
   <div className="feed" >

    {data.map((item,index)=>{
        return(
        <Link to={`video/items.snippet.categoryId/${item.id}`}  className="card" key={item.id}>
                <img src={item.snippet.thumbnails.default.url} alt="" />
                <h2>{item.snippet.title}</h2>
                <h3>{item.snippet.channelTitle}</h3>
                <p>{Count_value(item.statistics.viewCount)} views . {moment(item.snippet.publishedAt).fromNow()}</p>
           </Link>
        )
        
})}







    {/* <Link to={`video/20/4654`} className="card">
        <img src={thumbnail1} alt="" />
        <h2>Lorem, ipsum dolor.</h2>
        <h3>elsheshatwy</h3>
        <p>15K views &bull ; 2days ago</p>
    </Link>
    <div className="card">
        <img src={thumbnail2} alt="" />
        <h2>Lorem, ipsum dolor.</h2>
        <h3>elsheshatwy</h3>
        <p>15K views &bull ; 2days ago</p>
    </div> */}
    {/* <div className="card">
        <img src={thumbnail3} alt="" />
        <h2>Lorem, ipsum dolor.</h2>
        <h3>elsheshatwy</h3>
        <p>15K views &bull ; 2days ago</p>
    </div> */}

  
   </div>
  

  )
}

export default Feed