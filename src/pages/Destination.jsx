import React, { useEffect, useState } from "react";
import Moon from "../assets/destination/image-moon.png";
import Titan from "../assets/destination/image-titan.png";
import Europa from "../assets/destination/image-europa.png";
import Mars from "../assets/destination/image-mars.png";

import dataJson from "../data.json";

const Destination = () => {
  const destinationList = dataJson.destinations;
  const [image, setImage] = useState(Moon);
  const [destination, setDestination] = useState("moon");

  useEffect(() => {
    switch (destination) {
      case "mars":
        setImage(Mars);
        break;
      case "europa":
        setImage(Europa);
        break;
      case "titan":
        setImage(Titan);
        break;
      case "moon":
      default:
        setImage(Moon);
        break;
    }
  }, [destination]);

  const handleClick = (dest_name) => {
    setDestination(dest_name);
  };

  const selectedDestination = destinationList.find(
    (item) => item.dest_name === destination
  );

  console.log("selectedDestination:", selectedDestination);

  return (
    <div className="destination_page px-24 min-h-screen w-full text-slate-50 flex items-start justify-center flex-col gap-12 pt-36 pb-11">
      <div className="mt-8">
        <h1 className="ml-12 text-2xl font-thin">
          <span className="font-bold text-slate-400">01</span> Pick Your
          destination
        </h1>
      </div>
      <div className="flex items-center gap-28 mt-12 w-full">
        <div className="w-6/12">
          <img src={image} alt="destination" />
        </div>
        <div className="w-6/12">
          <div className="flex gap-4">
            {destinationList.map((item, index) => {
              const { dest_name } = item;
              return (
                <button
                  className={`dest_button uppercase relative py-1 px-2 ${
                    destination === dest_name ? "dest_active" : ""
                  }`}
                  key={index}
                  onClick={() => handleClick(dest_name)}
                >
                  {dest_name}
                </button>
              );
            })}
          </div>
          <div>
            <h1 className="text-9xl uppercase my-6">
              {selectedDestination.dest_name}
            </h1>
            <p>{selectedDestination.description}</p>
          </div>
          <hr className="bg-slate-400 my-8 opacity-40" />
          <div className="flex gap-44">
            <div>
              <h1 className="font-thin text-1xl uppercase">Avg. distance</h1>
              <p className="text-3xl font-extralight uppercase">
                {selectedDestination.distance}
              </p>
            </div>
            <div>
              <h1 className="font-thin text-1xl uppercase">est. travel time</h1>
              <p className="text-3xl font-extralight uppercase">
                {selectedDestination.travel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
