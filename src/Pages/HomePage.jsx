import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="bg-slate-900 h-20 p-2">
        <div className="lg:w-[80%] mx-auto">
          <Header />
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default HomePage;
