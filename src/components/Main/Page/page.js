import React from "react";
import "./page.css"

const Page = (props) =>{
    return (
            <div className="content">
                    <span className="content2">{props.item}</span>
                    <span  className="content3">{props.size}</span>
                    <span className="content4">{props.qty}</span>
                    <span className="content5">{props.price}</span>
            </div>    
    )}

export default Page;