import * as React from 'react';
import { BrowserRouter as BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "ui/pages/Home";
import { Map } from "ui/pages/Map";

const Router = () => {
  const routes = [
    {
      path: "/",
      exact: true,
      component: Home,
      protected: false,
    },
    {
      path: "/map",
      exact: true,
      component: Map,
      protected: false,
    },
  ];
  return (
      <BrowserRouter>
        <Switch>
          {
            routes.map( (route, index) => {
                return <Route
                  exact={route.exact}
                  key={index}
                  path={route.path}
                  component={route.component} />
            })
          }
        </Switch>
      </BrowserRouter>
  )
};

export {Router}
