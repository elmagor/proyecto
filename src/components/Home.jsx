import React, { Fragment } from "react";
import Pelicula from "./Pelicula";


const peliculas = ["Naturo", "Pokemon", "Batman"];

function Home({persona}) {
  return (
    <Fragment>
      <main>
        <p>Hola {persona.titulo}</p>
        <p>Peliculas recomendadas:</p>

        <section className="films_container">
  
          {peliculas.map((x) => (
            <Pelicula key={x} titulo={x} />
          ))}
        </section>
      </main>
    </Fragment>
  );
}

export default Home;
