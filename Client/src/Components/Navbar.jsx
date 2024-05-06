// Libraries
import React from "react";

// Icons
import { HiDotsHorizontal } from "react-icons/hi";
import { CiMail } from "react-icons/ci";

// Data
import { peopleList } from "../Data/People";

export default function Navbar() {
  return (
    <nav className="sideNav">
      <header className="h-[10%] w-[100%] flex justify-between items-center">
        <img src="/Vote.png" alt="Logo" className="h-[100%]" />
        <HiDotsHorizontal />
      </header>
      <dl className="h-[50%] w-[90%] flex flex-col flex-wrap overflow-y-auto">
        <dt className="text-lg font-bold mb-5">Your votes</dt>
        {peopleList.map((P) =>
          P.votes.map((e) => {
            return (
              <dd className="h-[10%] w-[100%] flex justify-around">
                <span className="h-[90%] w-[10%] border-2 rounded-lg text-center text-sm">{e.charAt(0)}</span>
                <span className="h-[90%] w-[75%]">{e}</span>
              </dd>
            );
          })
        )}
      </dl>
      <footer className="h-[10%] w-[100%] flex items-center justify-between border-2 rounded-lg p-1">
        <img
          src="/pictures/me.jpg"
          alt="profile"
          className="h-[100%] rounded-full border-2"
        />
        <div className="h-[100%] w-[70%] flex flex-col">
          <span>N.Balahariraj</span>
          <span className="w-[100%] flex items-center gap-2 text-[#4f46e5]">
            <CiMail className="text-lg font-extrabold" />
            Balahariraj N IT
          </span>
        </div>
      </footer>
    </nav>
  );
}
