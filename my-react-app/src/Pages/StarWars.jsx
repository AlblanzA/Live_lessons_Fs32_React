import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useState } from "react";
import { Card2 } from "../Components/Card";

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

  let cover =
    "https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop16x9.1920w.jpg";

  return (
    <>
      <Navbar logo={logo} />
      <Header title={"StarWars"} />

      <div className="filmsContainer">
        {films.length != 0 &&
          films.map((film) => (
            <Card2
              key={film.id}
              title={film.title}
              cover={cover}
              text={film.opening_crawl}
            />
          ))}
      </div>

      <Footer logo={logo} />
    </>
  );
}
