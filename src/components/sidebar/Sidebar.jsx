import "./Sidebar.css";
import home from "../../assets/home.png";
import game from "../../assets/game.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";
import simon from "../../assets/simon.png";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ sidebar ,cattegory,setCattegory}) => {
  console.log(sidebar);
  // if false "small"
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="links">
        <div className={`sidelinks ${cattegory===0?"active":""}` }onClick={()=>setCattegory(0)}>
          <img src={home} alt="" /> <p>Home</p>
        </div>
        <div className={`sidelinks ${cattegory===20?"active":""}` }onClick={()=>setCattegory(20)}>
          <img src={game} alt="" /> <p>Gaming</p>
        </div>
        <div className={`sidelinks ${cattegory===2?"active":""}` }onClick={()=>setCattegory(2)}>
          <img src={automobiles} alt="" /> <p>Automobiles</p>
        </div>
        <div className={`sidelinks ${cattegory===17?"active":""}` } onClick={()=>setCattegory(17)}>
          <img src={sports} alt="" /> <p>Sports</p>
        </div>
        <div className={`sidelinks ${cattegory===24?"active":""}` } onClick={()=>setCattegory(24)}>
          <img src={entertainment} alt="" /> <p>Entertainment</p>
        </div>
        <div className={`sidelinks ${cattegory===28?"active":""}` } onClick={()=>setCattegory(28)}>
          <img src={tech} alt="" /> <p>Technology</p>
        </div>
        <div className={`sidelinks ${cattegory===10?"active":""}` } onClick={()=>setCattegory(10)}>
          <img src={music} alt="" /> <p>Music</p>
        </div>
        <div className={`sidelinks ${cattegory===22?"active":""}` } onClick={()=>setCattegory(22)}>
          <img src={blogs} alt="" /> <p>Blogs</p>
        </div>
        <div className={`sidelinks ${cattegory===25?"active":""}` } onClick={()=>setCattegory(25)}>
          <img src={news} alt="" /> <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscripd-list">
        <h3>Subscribd</h3>
        <div className="sidelinks">
          <img src={jack} alt="" />
          <p>PewDiepie</p>
        </div>
        <div className="sidelinks">
          <img src={simon} alt="" />
          <p>MrBeast</p>
        </div>
        <div className="sidelinks">
          <img src={tom} alt="" />
          <p>justin Bieber</p>
        </div>
        <div className="sidelinks">
          <img src={megan} alt="" />
          <p>5-Min Criaf</p>
        </div>
        <div className="sidelinks">
          <img src={cameron} alt="" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
