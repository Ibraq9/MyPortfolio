"use client";
import React from 'react';

const TimeLine = ({ items }) => {
  return (
    <div className="relative flex flex-col items-center w-full max-w-2xl mx-auto">
      {/* Vertical Line */}
      <div className="absolute top-0 bottom-0 w-1 bg-gray-300 left-1/2 transform -translate-x-1/2" />

      {/* Timeline Items */}
      {items?.map((item, index) => (
        <div key={index} className="relative flex flex-col items-center w-full mb-8">
          {/* Circle Marker */}
          <div className="absolute z-10 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-md left-1/2 transform -translate-x-1/2" />

          {/* Content Container */}
          <div className={`w-full mt-8 ${index % 2 === 0 ? 'pl-16 pr-8' : 'pr-16 pl-8'}`}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;