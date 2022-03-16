import React, { Fragment } from "react";
import { Route } from "react-router-dom";

const user = null;


export default function PrivateRoute({component: Component, ...rest}) {
  return (
    <Route {...rest}>
        <Component />
    </Route>    
  );
}
