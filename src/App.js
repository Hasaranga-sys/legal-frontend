import Header from "./components/Header";
import NavBar from "./components/NavBar";
import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <React.Fragment>
      <header>
        <NavBar/>
        <Header/>
      </header>
      <main>
        <Routes>
           
          <Route path="/" element={<Home/>} exact/>
        </Routes>
      </main>

      

    </React.Fragment>
    
  );
}

export default App;
