"use client";

import React from "react";

const TimeLine = ({ items }) => {
  return (
    <div className="relative flex flex-col items-center w-full">
      <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-zinc-700 to-transparent left-1/2 -translate-x-1/2" />

      {items?.map((item, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center w-full mb-8 last:mb-0"
        >
          <div className="absolute z-10 w-3 h-3 bg-violet-500 rounded-full border-2 border-zinc-950 shadow-md shadow-violet-500/40 left-1/2 -translate-x-1/2 top-6" />

          <div
            className={`w-full mt-4 ${
              index % 2 === 0 ? "md:pr-[55%] md:pl-4" : "md:pl-[55%] md:pr-4"
            } px-2`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
