import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Home() {
  let logo =
    "https://logos-world.net/wp-content/uploads/2023/05/Blockbuster-Entertainment-Logo-1996.png";
  return (
    <>
      <Navbar logo={logo} />
      <h1>Home</h1>
      <Footer logo={logo} />
    </>
  );
}
