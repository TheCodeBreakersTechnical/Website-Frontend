import team from "../../images/team.gif";

//import "../../css/About_us/head.css";
import "../../css/head.css";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// import { Grid } from "@mui/material";
// import { Container } from "@mui/material";
// import Box from "@mui/material/Box";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
//import Media from "react-bootstrap/Media";
//import Media from "@bit/react-bootstrap.react-bootstrap.media";
import {Media} from "react-bootstrap";

const styles = {
  cardStyle: {
    "flex-direction": "row",
    "align-items": "center",
  },
};

function head() {
  Aos.init({ duration: 2000, offset: 200 });
  return (
    <div>
      {
        <div className="about_card">
          <div className="row">
            <div className="col-md-4">
              <img src={team} alt="team" className="anig" data-aos="zoom-in" />
            </div>

            <div className="col-md-8 col-sm-12 ">
              <p className="content" data-aos="zoom-in">
                The Codebreakers Club is a part of the Technical Club of RCOEM.
                We at our club provide a platform for all the coding enthusiasts
                of our college to gain experience and mentorship to enhance
                their coding ability. As our club name suggests, we are here to
                break the codes and create a difference. Apart from this, we
                frequently arrange seminars, tech fests, and coding events to
                help coders start their coding journey the right way!
              </p>
            </div>
          </div>
        </div>
      }
    </div>

    //     <div style={{ display: 'block',
    //                   width: 700, padding: 30 }}>

    //       <Media
    //       style={{
    //         backgroundColor: 'green'
    //       }}>
    //         <img
    //           alt="Sample Image"
    //           height={35}
    //           width={35}
    //           className="mr-3"
    // src={team}
    //         />
    //         <Media.Body>
    //           <h3>My Sample Title</h3>
    //           <p>
    //              Greetings from GeeksforGeeks,
    //              Hope you are doing good!
    //           </p>

    //         </Media.Body>
    //       </Media>
    //     </div>
  );
}

export default head;
