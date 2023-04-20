import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setCart] = useState(false);
  function handleCart() {
    setCart(!inCart);
  }
  const cartItem = inCart ? "the item is in the cart" : "the item is NOT in the cart";
  return (
    <li className={cartItem}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{inCart ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
