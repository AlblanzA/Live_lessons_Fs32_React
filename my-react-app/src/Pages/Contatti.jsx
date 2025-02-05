import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Contatti() {
  let logoFooter =
    "https://logos-world.net/wp-content/uploads/2023/05/Blockbuster-Entertainment-Logo-1996.png";
  return (
    <>
      <Navbar logo={logoFooter} />
      <h1>Contatti</h1>
      <Footer logo={logoFooter} />
    </>
  );
}

export default Contatti;
