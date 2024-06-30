/* eslint-disable no-unused-vars */

import { useState } from "react"
import Feed from "../../components/feed/Feed"
import Sidebar from "../../components/sidebar/Sidebar"
import "./Home.css"

// eslint-disable-next-line react/prop-types
const Home = ({sidebar}) => {
  const [cattegory, setCattegory]=useState(0)
  return (
    <>
      
    <Sidebar sidebar={sidebar} cattegory={cattegory} setCattegory={setCattegory}/>
      <div className={`container ${sidebar ? "" :"lage-container"}`}>
      <Feed cattegory={cattegory}/>
      </div>

   



    </>
  )
}

export default Home