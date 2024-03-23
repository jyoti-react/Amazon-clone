import React from "react";
import offer from "../images/offer.jpg";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import StarIcon from "@mui/icons-material/Star";

function Basket() {
  const value = useSelector((state) => state.cart.cart);
  console.log(value);
  return (
    <div className="basket_main">
      <div className="basket_left">
        <img className="offerBanner_img" src={offer}></img>
        <div className="basket_items">
          <h1 className="basket_title">Your shopping Basket</h1>
          {value.map(({ Title, Price, Rating, Image }, index) => (
            <div className="items_main" key={index}>
              <div>
                <img src={Image}></img>
              </div>
              <div>
                <p>{Title}</p>
                <p className="product_price">
                  <small>$</small>
                  <strong>{Price}</strong>
                </p>
                <div className="product_rating">
                  {Array(Rating)
                    .fill()
                    .map((i) => (
                      <StarIcon key={i} className="star" />
                    ))}
                </div>
                {/* <button onClick={()=>{useDispatch(removeitem(index))}}></div></div>>Remove item</button> */}
              </div>
             
            </div>
          ))}
        </div>
      </div>
      <div className="basket_right">
        <h1>Your shopping </h1>
      </div>
    </div>
  );
}

export default Basket;
