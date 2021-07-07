import React from "react";
import { Redirect, Route } from "react-router-dom";

function NoneProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("rakuten_authenticated");

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default NoneProtectedRoute;