import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Checkout from "./components/Checkout";
import ProductPage from "./components/ProductPage"

function App(props) {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
             <Route exact path="/" component={Home} />
             <Route path="/checkout" component={Checkout} />
             <Route path="/product/:id" render={(props) => (<ProductPage key={props.match.params.id} {...props}/>)} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}
export default App;