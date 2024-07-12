import React, { useState } from "react";

import ProductDate from "./ProductDate";

import Card from './Card';

import "./ProductItem.css";

const ProductItem = (props) => {

    // let title;
    //state conncept is coming
const [title, setTitle]  =  useState(props.title);

 
    function clickHandler(){
        // title = "Ram";
        setTitle("SitaRam");
          alert("button click");
    }

     




          return(
        <Card className = 'product-item'>
            <ProductDate date={props.date} />
            <div className="product-item_description">
                <h2>{title}</h2>
            </div>
            <button onClick={clickHandler}>Add to cart</button>
        </Card>
    );
}

export default ProductItem;