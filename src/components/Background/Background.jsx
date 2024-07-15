// import the backround .css file into this backround,jsx File.
import "./Background.css";

// now import the images and videos from assets into the Backround.jsx
import video1 from "../../assets/video1.mp4";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

// added the props playStatus and heroCount
const Background = ({ playStatus, heroCount }) => {
    // added the ifselce statment that if playStatus is true then video is played 
  if (playStatus) {
    return (
      <video className="background" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
    // if heroCount is 0 image1 will be displayed and vise versa 
  } else if (heroCount === 0) {
    return <img src={image1} className="background" alt="" />;
  } else if (heroCount === 1) {
    return <img src={image2} className="background" alt="" />;
  } else if (heroCount === 2) {
    return <img src={image3} className="background" alt="" />;
  }
};

export default Background;
