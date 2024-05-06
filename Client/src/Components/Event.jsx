import React from "react";

// Icons

import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

export default function Event({ id, event, desc, count }) {
  return (
    <div className="h-[20%] w-[100%] flex justify-around items-center mt-5 border-2 rounded-lg cursor-pointer hover:border-[#4f46e5]">
      <span className="h-[50%] w-[10%] font-ubuntu font-bold text-[#4f46e5] text-lg">{event}</span>
      <span className="h-[70%] w-[40%] font-ubuntu">{desc}</span>
      <div className="h-[50%] w-[40%] flex justify-around font-ubuntu ">
        <div className="h-[100%] w-[33%] flex flex-col items-center">
          {/* <input type="radio" name={`vote${id}`}/> */}
          <FaThumbsUp className="hover:text-[#4f46e5]"/>
          <span className="text-[#4f46e5]">Upvote</span>
        </div>
        <div className="h-[100%] w-[33%] flex flex-col items-center">
          {/* <input type="radio" name={`vote${id}`}/> */}
          <FaThumbsDown className="hover:text-[#4f46e5]"/>
          <span className="text-[#4f46e5]">Downvote</span>
        </div>
        <div className="h-[100%] w-[33%] flex flex-col items-center">
          <span>{count}</span>
          <span className="text-[#4f46e5]">Total</span>
        </div>
      </div>
    </div>
  );
}
