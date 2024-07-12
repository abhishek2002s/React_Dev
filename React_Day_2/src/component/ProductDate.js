import React from "react";

import "./ProductDate.css";

const ProductDate = (props) => {
    const month = props.date.toLocaleString('en-Us', {month : 'long'});
    const day = props.date.toLocaleString('en-Us', {day : '2-digit'});
    const Year = props.date.getFullYear();


    return(
        <div className="product-date">
            <div className="product-date_month">{month}</div>
            <div className="product-date_year">{Year}</div>
            <div className="product-date_year">{day}</div>
        </div>
    );
};

export default ProductDate;

