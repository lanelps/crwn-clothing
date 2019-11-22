import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Hats from "../src/pages/hats/hats.component";

import Homepage from "./pages/homepage/homepage.component.jsx";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Homepage} />
      <Route path="/shop/hats" component={Hats} />
    </div>
  );
}

export default App;
