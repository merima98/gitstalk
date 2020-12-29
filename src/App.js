import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./features/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact to="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
