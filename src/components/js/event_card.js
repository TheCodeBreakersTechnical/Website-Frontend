import React from "react";
function event_card() {
  return (
    <div className="ecard">
      <div className="row">
        <div className="col-md-4">
          <img
            className="eimage"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/coding-event-motion-poster-design-template-3e758bfdc9036d7fe1412ff47f4030ff.jpg?ts=1567082163"
            // src="./images/event1-img.jpeg"
            alt="coding-event-img"
          ></img>
        </div>
        <div className=" col-md-8 col-sm-12">
          <p className="edescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <div className="d-grid gap-2 col-6 mx-auto ">
            <button type="button" class="btn btn-primary">
              Register Now
            </button>
            {/* <button class="ebutton">
              <span>Register Now</span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default event_card;
