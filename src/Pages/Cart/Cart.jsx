
import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Components/Context/StoreContext";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, Fitems, removeFromCart, getTotalCartAmount, addToCart } = useContext(StoreContext);

  return (
    <div className="Cart-1">
      <div className="cart-item-1">
        <div className="cart-items-title-1">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {Fitems.map((item) => {
          if (cartItems[item.id]) {
            return (
              <div key={item.id}>
                <div className="cart-items-title-1 cart-items-item-1">
                  <img src={item.image} alt="nothing" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item.id].quantity}</p>
                  <p>${item.price * cartItems[item.id].quantity}</p>
                  <div className='f-item-counter-1'>
                    <p className='rmvitem-1' onClick={() => removeFromCart(item.id)}>-</p>
                    <p>{cartItems[item.id].quantity}</p>
                    <p className='additem-1' onClick={() => addToCart(item)}>+</p>
                  </div>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom-1">
        <div className="cart-total-1">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details-1">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details-1">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 100}</p>
            </div>
            <hr />
            <div className="cart-total-details-1">
              <p>Total</p>
              <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 100}</p>
            </div>
          </div>
          <button onClick={() => navigate('/Order')}>Proceed To Checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have any promocode, enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promocode" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;































