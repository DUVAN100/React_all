import React from "react";
import CountYears from "./Components/CountYears";

function App() {
  const date = new Date();
  const yearActual = date.getFullYear();  
  return (
    <div className="App">
      <header className="App-header">
        <CountYears year={yearActual} />
      </header>
    </div>
  );
}

export default App;
