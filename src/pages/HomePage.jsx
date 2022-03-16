import React, { Fragment } from "react";
import Header from "../components/layaout/Header";
import Footer from "../components/layaout/Footer";
import Pelicula from "../components/Pelicula";

const peliculas = ["Naturo", "Pokemon", "Batman"];

function Home({ persona }) {
  return (
    <Fragment>
      <Header />
      <main>
        <p>Hola {persona.titulo}</p>
        <p>Peliculas recomendadas:</p>

        <section className="films_container">
          {peliculas.map((x) => (
            <Pelicula key={x} titulo={x} />
          ))}

          <Pelicula titulo={"pinocchio"} />
			 <Pelicula  />
        </section>
      </main>

      <Footer />
    </Fragment>
  );
}

export default Home;
