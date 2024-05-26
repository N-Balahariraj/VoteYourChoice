// Libraries
import React from "react";

// Components
import Person from "./Person";

// Data
import { peopleList } from "../Data/People";

// Icons
import { TiArrowRight } from "react-icons/ti";

export default function People() {
  return (
    <div className="People">
      <header className="h-[10%] w-[100%] flex justify-around mb-2">
        <span className="flex items-center font-bold text-lg">People</span>
        <span className="flex items-center gap-1 hover:text-[#4f46e5] cursor-pointer">View all <TiArrowRight className="text-xl"/></span>
      </header>
      {peopleList.map((P) => (
        <Person
          key={P.id}
          id={P.id}
          profilePic={P.pic}
          mail={P.mail}
          name={P.name}
        />
      ))}
    </div>
  );
}
