/* eslint-disable no-unused-vars */

import Feed from "../../components/feed/Feed"
import Sidebar from "../../components/sidebar/Sidebar"
import "./Home.css"

// eslint-disable-next-line react/prop-types
const Home = ({sidebar}) => {
  return (
    <>
      
    <Sidebar sidebar={sidebar}/>
      <div className={`container ${sidebar ? "" :"lage-container"}`}>
      <Feed/>
      </div>

   



    </>
  )
}

export default Home