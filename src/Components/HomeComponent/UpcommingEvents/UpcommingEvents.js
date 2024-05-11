import React from "react";
import { Container } from "react-bootstrap";
import HeadingComponent1 from "../../Common/HeadingComponent1";
import EventSlider from "./EventSlider";

const UpcommingEvents = ({ data }) => {
  return (
    <div className="py-4 mb-4">
      <HeadingComponent1
        first="Upcoming "
        second="Events"
        className="text-main py-3 text-center"
      />

      <EventSlider data={data} />
    </div>
  );
};

export default UpcommingEvents;
