import React, {Component} from "react";
import "./main.css"
import * as data from '../../data.json'
import ShoppingItem from "./shopping-items/shopping-item";
class Main extends Component{

    constructor(props){
        super(props)
        this.state={
            error: null,
            isLoaded: false,
        }
    }

    componentDidMount(){
      console.log(data)
    }

    render(){
        return(
            <div className="mainContent">
              {data.default.map((shoppingItem, index) => {
                return <ShoppingItem shoppingItem={shoppingItem} key={index} />
              })}
            </div>
        )
    }
}
export default Main;