import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Hero from "../Components/Hero";

const HomePage = () => {
  return (
    <div>
      <div className="bg-slate-900 h-20 p-2">
        <div className="lg:w-[80%] mx-auto">
          <Header />
        </div>
      </div>
      <div className="bg-slate-800">
        <div className="lg:w-[80%] mx-auto">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
