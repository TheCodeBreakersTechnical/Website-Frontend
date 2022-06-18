import "../css/Registration.css";
import rocketImg from "../../components/images/img-1.svg";
import { Signup } from "../../components/js/Registration/Signup";

function App() {
  return (
    <div className="ks">
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <img className="img-fluid w-10" src={rocketImg} alt="" />
        </div>
        <div className="col-md-7 my-auto">
          <Signup />
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;

//
