import React from "react";
import { Route, Switch } from "react-router";
import Flats from "./containers/Flats/Flats";

const Routes = ({ user }) => {
  return (
    <Switch>
      <Route path="/" exact component={Flats} />
    </Switch>
  );
};

export default Routes;
