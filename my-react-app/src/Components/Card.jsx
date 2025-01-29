import { useEffect } from "react";

//sapendo che due lementi sono dinamici abbiamo creato due props "cover e title"
// e li abbiamo messi sull'html con le graffe
export function Card({cover, title}){
  useEffect(() => {
    console.log('I have mounted Card!');
    }, []);

   return( 
  <>
<a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100 bookCard">
  <img
    alt=""
    //richiamiamo cover come immagine dinamica
    src={cover}
    className="h-56 w-full rounded-md object-cover"
  />

  <div className="mt-2">
    <dl>

      <div>
        <dt className="sr-only">Title</dt>
          {/* richiamo title come titolo dinamico della card */}
        <dd className="font-medium">{title}</dd>
      </div>
    </dl>

    <div className="mt-6 flex items-center gap-8 text-xs">

    </div>
  </div>
</a>
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

