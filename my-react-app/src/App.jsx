
import { Card3, Card, Card2 } from './Components/Card'
import './App.css'
import { useEffect , useState } from 'react';

function App() {
  //primo valore è il nome della variabile, 
  // il secondo valore è il metodo utilizzato per cambiare il valore della variabile
   const [books, setBooks] = useState(null)
   const baseUrl = "https://api.potterdb.com/"
   
   //useEffet è utilizzato per le azioni da fare quando il componente viene ad esempio montato
   //e allora faccio la chiamata all'API - in generale viene usata per montare un componente
   useEffect(() => {
    console.log('I have mounted!');
    fetchData()
    }, []);

   async function fetchData() {
    const response = await fetch (baseUrl + "/v1/books")
    console.log(response.status);
    
    if (response.status != 200) {
      console.log("Error fetch code: " + response.status);
    } else {
       //estrapolo i dati ricevuti dal fetch in una variabile
       const responseData = await response.json();
       console.log(responseData.data);

       //sto inserendo responeData.data dentro la variabile books di useState
       setBooks(responseData.data)
   }
  }

console.log(books);


  return (
    <>
   <h1>Home</h1>

    <Card/>
    <Card2/>
    <Card3/>
   
    </>
  )
}


export default App
