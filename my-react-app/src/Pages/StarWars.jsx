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

  //in caso voglio utilizzare switch
  // const getCoverImage = (title) => {
  //   switch (title) {
  //     case "A New Hope":
  //       return "https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg";
  //     case "The Empire Strikes Back":
  //       return "https://upload.wikimedia.org/wikipedia/en/3/3f/The_Empire_Strikes_Back_%281980_film%29.jpg";
  //     case "Return of the Jedi":
  //       return "https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg";
  //     case "The Phantom Menace":
  //       return "https://upload.wikimedia.org/wikipedia/en/6/66/Star_Wars_The_Phantom_Menace_poster.jpg";
  //     case "Attack of the Clones":
  //       return "https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_Attack_of_the_Clones_poster.jpg";
  //     case "Revenge of the Sith":
  //       return "https://upload.wikimedia.org/wikipedia/en/9/92/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg";
  //     default:
  //       return "https://via.placeholder.com/300x450?text=No+Image"; // Immagine di default
  //   }
  // };

  //se voglio utilizzare if- else
  const getCoverImage = (title) => {
    if (title === "A New Hope") {
      return "https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg";
    } else if (title === "The Empire Strikes Back") {
      return "https://upload.wikimedia.org/wikipedia/en/3/3f/The_Empire_Strikes_Back_%281980_film%29.jpg";
    } else if (title === "Return of the Jedi") {
      return "https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg";
    } else if (title === "The Phantom Menace") {
      return "https://i.ebayimg.com/00/s/MTYwMFgxMDgw/z/QJwAAOSwiHtlyOy-/$_57.JPG?set_id=880000500F";
    } else if (title === "Attack of the Clones") {
      return "https://i.ebayimg.com/images/g/nssAAOSwfNRfjIh2/s-l1200.jpg";
    } else if (title === "Revenge of the Sith") {
      return "https://i.scdn.co/image/ab67616d0000b273c5aa63ab94fc3c7c15d104f9";
    } else {
      return "https://via.placeholder.com/300x450?text=No+Image";
    }
  };

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
              cover={getCoverImage(film.title)}
              text={film.opening_crawl}
              date={film.release_date}
            />
          ))}
      </div>

      <Footer logo={logo} />
    </>
  );
}
