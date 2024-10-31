import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Hero from "../Components/Hero";
import ContactForm from "../Components/ContactForm";

const HomePage = () => {
  return (
    <div>
      <div className="bg-slate-900 h-20 p-2 sticky top-0 z-50">
        <div className="lg:w-[80%] mx-auto ">
          <Header />
        </div>
      </div>
      <div className="bg-slate-800">
        <div className="lg:w-[80%] mx-auto">
          <Hero />
        </div>
        <section>
          <ContactForm></ContactForm>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
