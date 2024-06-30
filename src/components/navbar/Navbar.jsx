import "./Navbar.css";



import menu_icon from "../../assets/menu.png"
import logo from "../../assets/logo.png"
import search from "../../assets/search.png"
import upload from "../../assets/upload.png"
import more from "../../assets/more.png"
import notification from "../../assets/notification.png"
import user_profile from "../../assets/user_profile.jpg"
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Navbar = ({setSidebar}) => {
  return (
    <>
      <div className="Navbar flex">
        <div className="navleft flex">
          <img onClick={()=>setSidebar(prve=> prve ===false?true :false)} className="menu" src={menu_icon} alt="" />
          <Link to={"/"}><img className="logo" src={logo} alt="" /></Link>
        </div>
        <div className="navmid flex">
          <div className="searh-box flex">
            <input type="text" />
            <img className="search" src={search} alt="" />
          </div>

        </div>
        <div className="navright flex">
        <img src={upload} alt="" />
        <img src={more} alt="" />
        <img src={notification} alt="" />
        <img src={user_profile} className="user_profile" alt="" />
            
        </div>
      </div>
    </>
  );
};

export default Navbar;
