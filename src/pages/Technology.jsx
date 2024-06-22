import React, { useState } from "react";
import Heading from "../components/Heading";
import dataJson from "../data.json";

const Technology = () => {
  const techData = dataJson.technology;
  const [currentIndex, setCurrentIndex] = useState(0); 

  return (
    <div className="technology_page min-h-screen w-full flex items-start pt-32 flex-col pb-12">
      <Heading title={"space launch 101"} index={"03"} />
      <div className="techContent h-auto ml-28 mt-16 flex">
        <div className="indexing h-auto w-2/12 flex items-start justify-center flex-col gap-6">
          {techData.map((item, index) => {
            return (
              <button
                key={index}
                className={`h-16 w-16 ${
                  index === currentIndex ? "bg-slate-50" : "bg-slate-400"
                } rounded-full flex items-center justify-center text-3xl`}
                onClick={() => setCurrentIndex(index)}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
        <div className="mid flex justify-between items-center">
          <div className="techDes w-6/12 text-slate-50 flex flex-col gap-2 uppercase">
            <p>the terminology...</p>
            <h1 className="text-7xl">{techData[currentIndex].techName}</h1>
            <p>{techData[currentIndex].description}</p>
          </div>
          <div className="techImage">
            <img
              src={techData[currentIndex].images.portrait}
              alt={techData[currentIndex].techName}
              className="w-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
