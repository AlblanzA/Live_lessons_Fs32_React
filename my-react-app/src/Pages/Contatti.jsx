import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Contatti(){
    let logoFooter = 'https://www.freeiconspng.com/thumbs/harry-potter-logo/harry-potter-logo-png-19.png'
    return(
         <>
        <Navbar logo={logoFooter}/> 
        <h1>Contatti</h1>
        <Footer logo={logoFooter} />
        </>
    )
    
}

export default Contatti;