import React, { Fragment } from "react";
import PropTypes from "prop-types";

function Pelicula(props) {
  return (
    <Fragment>
      <div className="pelicula">
        <p>titulo: {props.titulo} </p>
      </div>
    </Fragment>
  );
}

Pelicula.propTypes = {
  titulo: PropTypes.string,
};

Pelicula.defaultProps = {
  titulo: "La jungla de cristal",
};

export default Pelicula;
