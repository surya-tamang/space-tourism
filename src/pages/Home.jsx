import React from "react";

import "../index.css";

const Home = () => {
  return (
    <div className="home_page min-h-screen width-full bg-cover bg-center flex items-center px-44 justify-between pt-32">
      <article className="text-slate-50 flex flex-col gap-3 items-start w-6/12 uppercase tracking-widest">
        <p className="ml-3">So, you want to travel to</p>
        <h1 className="space text-2xl py-4 md:text-9xl md:py-2">Space</h1>
        <p>
          Let's face it; if you want to go to space,you might as well genuinely
          go to outer space and not, hover kind of on the edge of it. well sit
          back, and relax because we'll give you safety
        </p>
      </article>
      <button className="h-52 w-52 bg-slate-50 rounded-full uppercase">
        explore
      </button>
    </div>
  );
};

export default Home;
