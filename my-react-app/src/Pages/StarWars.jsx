import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function StarWars() {
  let logo =
    "https://loodibee.com/wp-content/uploads/Star-Wars-transparent-logo.png";
  return (
    <>
      <Navbar logo={logo} />
      <Header title={"StarWars"} />
      <Footer logo={logo} />
    </>
  );
}
