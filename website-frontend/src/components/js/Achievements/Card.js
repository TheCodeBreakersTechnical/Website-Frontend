import "../../css/Card.css";
import Aos from "aos";
import "aos/dist/aos.css";
import detail_array from "./detail.js";

function Card() {
  //   <Ani />;
  Aos.init({ duration: 2500 });
  function Displaycard(props) {
    return (
      <div data-aos="fade-up" className="info_card">
        <div className="cardtop">
          <h3 className="name">{props.Name}</h3>
          <div className="imagecard">
            <div className="cardfront">
              <img className="card_dp" src={props.img} alt="DP" />
            </div>
            <div className="cardback">
              <img className="card_dp" src={props.img_back} alt="DP" />
            </div>
          </div>
          {/* <div className="card_dp_back">
            <img className="card_dp" src={props.img_back} alt="DP" />
          </div> */}
        </div>
        <div className="cardbottom">
          <h5 className="description_card">{props.workdone}</h5>
        </div>
      </div>
    );
  }
  return (
    <div className="cardsection">
      <div className="Allcards">{detail_array.map(Displaycard)};</div>
    </div>
  );
}
export default Card;
