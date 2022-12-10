import React from "react";
import { Container } from "react-bootstrap";
import HeadingComponent1 from "../../Common/HeadingComponent1";
import EventSlider from "./EventSlider";

const UpcommingEvents = () => {
  return (
    <div className="py-4 mb-4">
      <HeadingComponent1
        first="Upcoming "
        second="Events"
        className="text-main py-3"
      />

      <EventSlider />
    </div>
  );
};

export default UpcommingEvents;
