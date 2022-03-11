import "./styles/App.scss";
import Header from "./components/Header";
import Registro from "./components/Registro.tsx";

import Home from "./components/Home";
import Us from "./components/Us";

import Footer from "./components/Footer";
import E404 from "./components/E404";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";

function App() {
  const persona = {
    nombre: "Andres",
    apellido: "Fresno",
  };

  return (
    <Fragment>
      <Router>
        <Header />
        <Registro />

        <Routes>


          <Route path={"/us"} element={<Us />}/>
          <Route path={"/"} element={<Home persona={persona} />}/>
          <Route path={"*"} element={ <E404 />}/>

        </Routes>

        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
