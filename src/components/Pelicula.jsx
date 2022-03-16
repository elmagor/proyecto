import React, { Fragment } from "react";

function Pelicula({titulo = "sin titulo"}) {
  return (
    <Fragment>
      <div className="pelicula">
        <p>titulo: {titulo} </p>
      </div>
    </Fragment>
  );
}




export default Pelicula;
