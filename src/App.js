import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

// import Hats from "../src/pages/hats/hats.component";

import Homepage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
