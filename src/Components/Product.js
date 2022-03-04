import React from 'react';
import '../App.css';


function Product(props) {
  return(
    <div className="product" onclick = {() => {props.buy(props.type, props.price)}}>
      <p>Click me to buy a {props.type}! {props.price}</p>
    </div>
  );
}

export default Product;
