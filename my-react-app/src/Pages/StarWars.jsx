import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useState } from "react";

export default function StarWars() {
  let logo =
    "https://loodibee.com/wp-content/uploads/Star-Wars-transparent-logo.png";
  const [films, setFilms] = useState([]);
  const baseUrl = "https://swapi.dev/api/";

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(baseUrl + "films");

    if (response.status != 200) {
      console.log("fetchData Error");
    } else {
      const responseData = await response.json();
      //salvo i film nella variabile films
      setFilms(responseData.results);
      console.log(films);
    }
  }

  return (
    <>
      <Navbar logo={logo} />
      <Header title={"StarWars"} />

      <div classname = "filmsContainer">
    {films.lenght =!0 &&
    films.map((film)=>(
      <h1>{film.title} </h1>


    ))}

      </div>

      

      <Footer logo={logo} />
    </>
  );
}

