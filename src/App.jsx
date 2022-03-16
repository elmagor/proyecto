
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Error404 from "./pages/Error404";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/*
import { fakeAuthProvider } from "./utils/auth";
import PrivateRoute from "./routers/PrivateRoute";
import AdminPage from "./pages/AdminPage";
*/

import { Fragment } from "react";
import "./styles/App.scss";

function App() {
  const persona = {
    nombre: "Andres",
    apellido: "Fresno",
  };

  return (
    <Fragment>
        <Router>
          <Routes>
            <Route path={"/us"} element={<AboutPage />} />
            <Route path={"/singin"} element={<LoginPage />} />
            <Route path={"/singup"} element={<RegisterPage />} />

            <Route path={"/"} element={<HomePage persona={persona} />} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
        </Router>
    </Fragment>
  );
}

export default App;
