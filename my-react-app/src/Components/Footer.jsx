import React from "react";

export default function Footer({logo}){
    let year = new Date().getFullYear()
return(
<>
<footer className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex justify-center text-teal-600 sm:justify-start">
 <img src={logo} alt='logo' className="logo"/> 
      </div>

      <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
        Copyright &copy; {year}. All rights reserved.
      </p>
    </div>
  </div>
</footer>



</>

)
}