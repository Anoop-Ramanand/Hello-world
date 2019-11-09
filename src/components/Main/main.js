import React, {Component} from "react";
import Page from "./Page/page"
import "./main.css"


class Main extends Component{

    constructor(props){
        super(props)
        this.state={
            error: null,
            values : [
                {id : 111, item : "Design1", qty:0, size:32, price:222},
                {id : 112, item : "Design2", qty:0, size:32, price:223}
            ],
            isLoaded: false,
        }
    }
    render(){
        return(
            <div className="mainContent">
                <hr/>
                <div className="contentlist">
                    <span>Items</span>
                    <span>Size</span>
                    <span>Qty</span>
                    <span>Price</span>
                </div>
                <hr/>
                 {this.state.values.map(ele=>{
                     return <Page id= {ele.id}
                            item= {ele.item} 
                            qty={ele.qty}
                            size={ele.size}
                            price={ele.price}/>
                 })}
            </div>
        )
    }
}
export default Main;

// onClickHandler = ()=>{
    //     let temp = this.state.isLoaded
    //         this.setState(
    //             {this.state.isLoaded:!temp}
    //         )
    // }
    
    // componentDidMount(){
    //     // https://www.goodreads.com/author/list.xml  
    //     fetch("https://dog.ceo/api/breeds/image/random")
    //         .then(res =>res.json)
    //             console.log(res)
    //             .then(result=>{
    //                 this.setState(
    //                     {values : result.values,
    //                     isLoaded: true
    //                 }       
    //              )
    //              console.log(this.state.values)     
    //         }
    //         )
    //         }