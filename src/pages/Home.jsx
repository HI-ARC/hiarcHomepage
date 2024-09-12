import { useState } from "react";
import Header from "./../components/Header";
import Logo from "./../components/logo";
import Himain from "./../components/Himain";
import Footer from "./../components/Footer";
import Introducer from "./../components/Introducer";

const Home = () => {
  return (
    <>
      <Header />
      <Logo />
      <Himain />
      <Introducer />
      <Footer />
    </>
  );
};

export default Home;
