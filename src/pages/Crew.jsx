import React, { useState } from "react";
import Heading from "../components/Heading";

import dataJson from "../data.json";

const Crew = () => {
  const crewData = dataJson.crew;
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="crew_page min-h-screen w-full flex items-start flex-col justify-center overflow-hidden pt-36 pb-7 relative">
      <div className="left">
        <Heading title={"meet our crew"} index={"02"} />
        <div className="frame h-96 flex overflow-hidden ml-28 mt-20">
          {crewData.map((item, index) => {
            const { crewName, role, bio } = item;
            return (
              <div
                key={index}
                style={{ transform: `translateX(-${currentIndex}00%)` }}
                className="slider min-w-full h-80 text-slate-50 flex flex-col gap-8 tracking-widest"
              >
                <p className="text-4xl font-thin">{role}</p>
                <h1 className="text-6xl font-light">{crewName}</h1>
                <p className="text-1xl"> {bio}</p>
              </div>
            );
          })}
        </div>
        <div className="w-40 h-7 ml-28 flex gap-3">
          {crewData.map((item, index) => {
            return (
              <button
                key={index}
                className={`dots h-5 w-5 rounded-full bg-slate-50 ${
                  index === currentIndex ? "opacity-100" : "opacity-40"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            );
          })}
        </div>
      </div>
      <div className="crewImage">
        <img
          src={crewData[currentIndex].images}
          alt={crewData[currentIndex].crewName}
          className="crewImage absolute bottom-0 right-10 w-96 h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Crew;
