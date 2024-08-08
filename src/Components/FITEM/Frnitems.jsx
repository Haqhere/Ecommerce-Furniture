
import React, { useContext } from 'react';
import './Frnitems.css';
import { StoreContext } from '../Context/StoreContext';

const Frnitems = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, logedin } = useContext(StoreContext);

  const item = { id, name, price, description, image };

  return (
    <div className='frnitem'>
      <div className="frnitem-img-container">
        <img className='frnitem-img' src={image} alt="" />
        {logedin ? (
          <div>
            {!cartItems[id] ? (
              <p className='add' onClick={() => addToCart(item)}>+</p>
            ) : (
              <div className='f-item-counter-container'>
                <p className='rmvitem' onClick={() => removeFromCart(id)}>-</p>
                <p>{cartItems[id].quantity}</p>
                <p className='additem' onClick={() => addToCart(item)}>+</p>
              </div>
            )}
          </div>
        ) : null}
      </div>
      <div className="frnitem-info">
        <div className="frnitem-name-rating">
          <p>{name}</p>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
        <p className="frnitem-description">{description}</p>
        <p className="frnitem-price">${price}</p>
      </div>
    </div>
  );
};

export default Frnitems;





















