import React from "react";
import "./styles.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Admin from "./Admin";
import User from "./User";
import Home from "./Home";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/user" component={User} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
