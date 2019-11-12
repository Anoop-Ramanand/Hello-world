import React, { Component } from 'react'
import './shopping-cart.css'

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
                allData: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.changeCartData = this.changeCartData.bind(this);
    }

    componentDidMount() {
      this.changeCartData();
    }
    
    handleChange(data, event) {
      const shoppingCartData = JSON.parse(localStorage.getItem("cartData"));
      let orderArray = shoppingCartData.filter(cart => cart.p_id !== data.p_id );
      let editedItem = shoppingCartData.filter(cartData => cartData.p_id === data.p_id )[0];
      editedItem.p_quantity = event.target.value;
      orderArray.push(editedItem);
      localStorage.setItem("cartData", JSON.stringify(orderArray));
      this.changeCartData();
    }

    changeCartData() {
      const shoppingCartData = JSON.parse(localStorage.getItem("cartData"));
      this.setState({
        allData: shoppingCartData
      })
    }

    render() {
        return (
            <React.Fragment>
              <div className="main-shopping-container">
                <div className="cart-container">
                    <div className="cart">
                        <h2 className="heading">YOUR SHOPPING CART</h2>
                        <h5 className="subheading">If the cart is completely empty than we shall again add back the products for you</h5>
                        <hr className="hr"/>
                    </div>
                    <div className="sub-counts">
                        <span>{this.state.allData.length} ITEMS</span>
                        <span>SIZE</span>
                        <span>QTY</span>
                        <span>PRICE</span>
                    </div>
                </div>
                <hr/>
                {this.state.allData && this.state.allData.length > 0 && this.state.allData.map((data) => (
                    <div>
                <div className="data-container">
                  <div className="description-conatiner">
                      <div className="image">
                          <img src={data.p_image} className="image" />
                      </div>
                      <div className="details">
                          <p className="name"><b>{data.p_name.toUpperCase()}</b></p>
                          <p className="style">Style #:<span className="style">{data.p_style.toUpperCase()}</span></p>
                          <p className="color">Color:<span className="color">{data.p_selected_color.name}</span></p>
                          <div className="options"><label>EDIT</label><label>REMOVE</label><label>SAVE FOR LATER</label></div>
                    </div>
                    </div>
                    <div className="size">
                        <p><h4>{data.p_selected_size.code.toUpperCase()}</h4></p>
                    </div>
                    <div className="quantity">
                        <input type="number" value={data.p_quantity} onChange={this.handleChange.bind(this, data)}></input>
                    </div>
                    <div className="price">
                        <p>${data.p_price}</p>
                    </div>
                </div>
                <hr/>
                </div>
                ))}
                <hr className="separator" />
                <div className="total-price">
                  <div className="sub-total">
                    <span class="title">Sub Total</span>
                    <span className="price">59.90</span>
                  </div>
                  <div className="sub-total">
                    <span class="title">Estimated Shipping</span>
                    <span className="price">Free</span>
                  </div>
                  <hr />
                  <div className="sub-total">
                    <span class="title">Estimated Total</span>
                    <span className="price">53</span>
                  </div>
                  <hr />
                  <div className="buttons">
                    <a >Continue Shopping</a>
                    <a >CHECKOUT</a>
                  </div>
                  <p className="checkout-text">Secure Checkout. Shopping Always Safe and Secure</p>
                </div>
                </div>
            </React.Fragment>
        )
    }
}
