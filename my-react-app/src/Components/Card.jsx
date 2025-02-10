import { useEffect } from "react";

//sapendo che due lementi sono dinamici abbiamo creato due props "cover e title"
// e li abbiamo messi sull'html con le graffe
export function Card({ cover, title }) {
  useEffect(() => {
    console.log("I have mounted Card!");
  }, []);

  return (
    <>
      <a
        href="#"
        className="block rounded-lg p-4 shadow-sm shadow-indigo-100 bookCard"
      >
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

          <div className="mt-6 flex items-center gap-8 text-xs"></div>
        </div>
      </a>
    </>
  );
}

export function Card2({ cover, title, text, date }) {
  return (
    <>
      <article className="flex bg-white transition hover:shadow-xl starwarsContainer">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            datetime={date}
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
          >
            <span>{date}</span>
            <span className="w-px flex-1 bg-gray-900/10"></span>
            <span></span>
          </time>
        </div>

        <div className="hidden sm:block sm:basis-56">
          <img
            alt=""
            src={cover}
            className="aspect-square h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <a href="#">
              <h3 className="font-bold uppercase text-gray-900">{title}</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
              {text}
            </p>
          </div>

          <div className="sm:flex sm:items-end sm:justify-end">
            <a
              href="#"
              className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
            >
              Read Blog
            </a>
          </div>
        </div>
      </article>
    </>
  );
}

export function Card3() {
  return (
    <>
      <h1>Ciao</h1>
    </>
  );
}

//uso default se ho soltanto 1 componente
// export default Card();
