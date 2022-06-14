import React from "react";
import "../../components/css/event_styles.css";
import EventCard from "../../components/js/event_card";
import EventHeader from "../../components/js/event_header";
function Event_App() {
  return (
    <div className="App">
      <EventHeader />
      <EventCard />
    </div>
  );
}
export default Event_App;
