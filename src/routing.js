import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Main/main';
import ShoppingCart from './components/Main/shopping-cart/shopping-cart';

export default class Routing extends Component {
  render() {
    return (
      <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={ShoppingCart} />
    </div>
    </Router>
    )
  }
}