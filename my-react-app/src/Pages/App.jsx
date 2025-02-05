import { Card } from "../Components/Card";
import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function App() {
  //primo valore è il nome della variabile,
  // il secondo valore è il metodo utilizzato per cambiare il valore della variabile
  const [books, setBooks] = useState(null);
  const baseUrl = "https://api.potterdb.com/";

  //useEffet è utilizzato per le azioni da fare quando il componente viene ad esempio montato
  //e allora faccio la chiamata all'API - in generale viene usata per montare un componente
  useEffect(() => {
    console.log("I have mounted!");
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(baseUrl + "/v1/books");
    console.log(response.status);

    if (response.status != 200) {
      console.log("Error fetch code: " + response.status);
    } else {
      //estrapolo i dati ricevuti dal fetch in una variabile
      const responseData = await response.json();
      console.log(responseData.data);

      //sto inserendo responeData.data dentro la variabile books di useState
      setBooks(responseData.data);
    }
  }

  console.log(books);

  let logoFooter =
    "https://www.freeiconspng.com/thumbs/harry-potter-logo/harry-potter-logo-png-19.png";
  return (
    <div>
      <Navbar logo={logoFooter} />
      <Header title={"Harry Potter"} />

      <div className="bookContainer">
        {/* conditional rendering e ciclare elementi con Map su React anzichè con ForEach*/}

        {books != null &&
          books.map((book) => (
            // abbiamo richiamato il componente card per mostrare i libri dell'API e specifichiamo quale valore renderizzare
            // nel nostro caso cover, title e l'id univoco richiesto da react
            <Card
              key={book.id}
              cover={book.attributes.cover}
              title={book.attributes.title}
            />
          ))}
      </div>
      <Footer logo={logoFooter} />
    </div>
  );
}

export default App;
