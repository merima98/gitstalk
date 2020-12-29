import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./features/Home";
import User from "./features/User";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:login" component={User} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
