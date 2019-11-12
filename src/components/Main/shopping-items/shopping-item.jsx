import React, { Component } from 'react'
import './shopping-item.css'
export class ShoppingItem extends Component {
  
  addToCart(shoppingItem) {
    let shoppingCart = JSON.parse(localStorage.getItem("cartData")) && JSON.parse(localStorage.getItem("cartData")).length > 0 ? JSON.parse(localStorage.getItem("cartData")) : [];
    shoppingCart.push(shoppingItem);
    localStorage.setItem("cartData", JSON.stringify(shoppingCart));
  }

  render() {
    return (
      <div className="shopping-item">
        <div className="image-container">
          <img src={this.props.shoppingItem.p_image}/>
        </div>
        <div className="data-container">
          <h4>{this.props.shoppingItem.p_name.toUpperCase()}</h4>
          <p>Style# {this.props.shoppingItem.p_style}</p>
          <p>Variation: {this.props.shoppingItem.p_variation}</p>
        </div>
        <i class="fa fa-plus fa-style" onClick={this.addToCart.bind(this, this.props.shoppingItem)} aria-hidden="true"></i>
      </div>
    )
  }
}

export default ShoppingItem;
