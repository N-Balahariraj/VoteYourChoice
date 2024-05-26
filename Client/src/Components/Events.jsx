// Libraries
import React from "react";

// Components
import Event from "./Event";
import Header from "./Header.jsx";
import { Accordion } from "react-bootstrap";
import OffcanvasExample from "./OffCanvasExample.jsx";

// Data
import { EventList } from "../Data/Events.js";

export default function Events() {
  return (
    <div className="Events">
      <OffcanvasExample />
      <Accordion className="Event">
        {EventList.map((E) => (
          <Event
            key={E.id}
            id={E.id}
            event={E.Title}
            desc={E.Desc}
            count={E.count}
          />
        ))}
      </Accordion>
    </div>
  );
}
