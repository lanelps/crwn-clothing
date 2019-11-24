import React from "react"
import { Switch, Route } from "react-router-dom"
import "./App.css"

// import Hats from "../src/pages/hats/hats.component";
import Header from "./components/header/header.component"
import Homepage from "./pages/homepage/homepage.component.jsx"
import ShopPage from "./pages/shop/shop.component.jsx"

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App
