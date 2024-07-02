import "./Recommend.css"
// import thumbnail1 from "../../assets/thumbnail1.png"

import { API_KEY, Count_value } from "../../data"
import { useEffect, useState } from "react"
// eslint-disable-next-line react/prop-types
const Recommend = ({categoryId}) => {

    const [apidata,setApidata]=useState([])

const recomendapi =async()=>{


    const vd_url =(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=EG&videoCategoryId=${categoryId}&key=${API_KEY}`);

   
    await  fetch(vd_url )
    .then(res=>res.json())
    .then(data=>setApidata(data.items))
   
}

useEffect(() =>{
    recomendapi();
},[])
// recomendapi()






    console.log(categoryId);
  return (
    <div className="recommend">
        {apidata.map((item,index)=>{
            return(
                <div className="side-vd-list" key={index}>
                    <img src={item.snippet.thumbnails.medium.url} alt="" />
                    <div className="vd-info">
                        
                        <h4>{item.snippet.title}</h4>
                        <p>{item.snippet.channelTitle}</p>
                        <p>{Count_value(item.statistics.viewCount)} views</p>
                    </div>
                </div>
            )
        })}
    
      
   
    </div>
  )
}

export default Recommend