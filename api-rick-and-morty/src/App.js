import React, { useEffect, useState } from "react";
import Navbar from "./Components/Nadvar";
import Characters from "./Components/Characters";
import Pagination from "./Components/Pagination";

function App() {
  const [characters, setcharacter] = useState([])
  const [info, setinfo] = useState([])
  const initialUrl = "https://rickandmortyapi.com/api/character";
  const fetchCharacters = (url) => {
    fetch(url)
      .then(respoonse => respoonse.json())
      .then(data => {
        setcharacter(data.results)
        setinfo(data.info);
      })
      .catch(error => console.log(error))
  };
  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])

  const onPrevious = () => {
    fetchCharacters(info.prev)
  }

  const onNext = () => {
    fetchCharacters(info.next)
  }
  return (
    <>
      <Navbar brand="Rick and Morty API" />
      <hr/>
      <div className="container">
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} />
        <Characters characters={characters} />
        <Pagination prev={info.prev} next={info.next} onNext={onNext} />
      </div>
    </>
  );
}

export default App;
