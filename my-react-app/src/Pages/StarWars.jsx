import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {useState} from "react";

export default function StarWars() {
  let logo =
    "https://loodibee.com/wp-content/uploads/Star-Wars-transparent-logo.png";
    const [films, setFilms]= useState([])
    const baseUrl="https://swapi.dev/api/"

    async function fetchData(){
      const response= await fetch (baseUrl +"films")
    

      if (response.status !=200){
     console.log ("fetchData Error")
    }else{
      const responseData= await response.json();
      console.log (responseData.data)
    }
    }
  fetchData()

  return (
    <>
      <Navbar logo={logo} />
      <Header title={"StarWars"} />
      <Footer logo={logo} />
    </>
  );
}

