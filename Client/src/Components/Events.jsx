// Libraries
import React from "react";

// Components
import Event from "./Event";

// Data
import { EventList } from "../Data/Events.js";

export default function Events() {
  return (
    <div className="Events">
      {EventList.map((E) => (
        <Event
          key={E.id}
          id={E.id}
          event={E.Title}
          desc={E.Desc}
          count={E.count}
        />
      ))}
    </div>
  );
}
