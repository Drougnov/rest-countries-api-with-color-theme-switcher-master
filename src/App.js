import Header from "./Components/Header";
import Home from "./Components/Home";
import Detail from "./Components/Detail";
import React from "react";

export default function App(){
  const [darkMode, setDarkMode] = React.useState(false);
  function toggleDarkMode(){
    setDarkMode(prevMode => !prevMode);
  }

  return(
    <div className='container'>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Home darkMode={darkMode} />
        <Detail darkMode={darkMode} />
      </main>
    </div>
  )
}