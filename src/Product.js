import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>&#8377;</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p> &#9734;</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
    /*
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>&#8377;</small>
          <strong>1500</strong>
        </p>
        <div className="product__rating">
          <p> &#9734;</p>
          <p> &#9734;</p>
          <p> &#9734;</p>
        </div>
        <img
          src="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"
          alt=""
        />
        <button className="product__button">Add to basket</button>
      </div>
    </div>
    */
  );
}

export default Product;
