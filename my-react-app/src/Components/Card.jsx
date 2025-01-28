import { useEffect } from "react";

export function Card(){
  useEffect(() => {
    console.log('I have mounted Card!');
    }, []);

   return( 
  <>
 <h1 className="">Ciao</h1>
  </>
   )

   
}

export function Card2(){
   return( 
  <>
 <h1>Ciao</h1>
  </>
   );
}

export function Card3(){
   return( 
  <>
 <h1>Ciao</h1>
  </>
   );
}

//uso default se ho soltanto 1 componente
// export default Card();

