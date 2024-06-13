import React from "react";

const Heading = ({ title, index }) => {
  return (
    <div className="heading_div mt-8">
      <h1 className="heading ml-12 text-3xl font-thin uppercase md:text-1xl md-bg-slate-200">
        <span className="font-bold text-slate-400">{index}</span> {title}
      </h1>
    </div>
  );
};

export default Heading;
