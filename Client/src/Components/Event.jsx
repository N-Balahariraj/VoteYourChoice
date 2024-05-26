import React from "react";
import Accordion from 'react-bootstrap/Accordion';

// Icons
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

export default function Event({ id, event, desc, count }) {
  return (
    <Accordion.Item className="EventCard" eventKey={id}>
      <Accordion.Header>
        <div className="w-[50%] flex justify-around">
          {event}
          <FaThumbsUp />
          <FaThumbsDown />
        </div>
      </Accordion.Header>
      <Accordion.Body>{desc}</Accordion.Body>
    </Accordion.Item>
  );
}
