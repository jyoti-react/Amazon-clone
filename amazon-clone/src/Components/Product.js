import React, { useState } from "react";
import "../App.css";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch } from 'react-redux'
import { addToCart } from "../Reducers/cartSlice";

function Product({id,title,price,rating,image}) {
   const dispatch=useDispatch()
   const productdata={
    Title:title,
    Price:price,
    Rating:rating,
    Image:image
   }
   const [data , setdata]=useState(productdata)
   
   function hndleproduct(e){
    // console.log(data);
       setdata(productdata)
        dispatch(addToCart(data))
   }
  return (
    <div className="product" >
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
         {
          Array(rating).fill().map((i)=>(
            <StarIcon key={i} className="star" />
          ))
         }
          
        </div>
      </div>
      <img src={image}></img>
       <button onClick={hndleproduct}>ADD TO CART</button>
    </div>
  );
}

export default Product;
