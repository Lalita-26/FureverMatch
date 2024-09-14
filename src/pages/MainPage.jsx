import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Service from "../components/Service";
import Breedfinder from "../components/Breedfinder";
import Adoptionpets from "../components/Adoptionpets";
import Contents from "../components/contents";
import Footer from "../components/Footer";


function MainPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Breedfinder />
      <Adoptionpets />
      <Contents/>
      <Footer />
    </>
  );
}

export default MainPage;
