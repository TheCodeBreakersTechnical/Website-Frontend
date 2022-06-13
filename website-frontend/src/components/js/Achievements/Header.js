// import displayimage from "./displayimage.png";
// import displayimage2 from "./displayimage2.gif";
// import headerimage1 from "./headerimage1.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../css/Header.css";
function Head() {
  Aos.init({ duration: 4000 });

  return (
    <div>
      <div className="headerbox">
        <h1 className="clubname"> CodeBreakers </h1>
      </div>
      <div className="gradientoverlay">
        <h1 data-aos="fade-left" className="title">
          Achievements
        </h1>
        {/* <ul data-aos="fade-left" className="list1">
          <li>Home</li>
          <li>About us</li>
          <li> Events</li>
        </ul> */}
        <div data-aos="fade-up" className="quote">
          <div className="w3-panel w3-light-grey">
            <span className="Span1">❝</span>
            <p className="w3-xlarge">
              <i>OPPORTUNITIES DON'T HAPPEN. YOU CREATE THEM</i>
            </p>
          </div>
        </div>
        {/* <img src={headerimage1} alt="Displayimage" /> */}

        {/* <div className="gradientoverlay">
        <img src={headerimage1} alt="Displayimage" />
        </div> */}
      </div>
    </div>
  );
}
export default Head;
