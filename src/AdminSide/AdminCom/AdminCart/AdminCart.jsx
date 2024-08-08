import React from 'react';
import './AdminCart.css';

const CartModal = ({ isOpen, onClose, cartItems, Fitems }) => {
  if (!isOpen) return null;

  const items = Object.keys(cartItems).map((id) => {
    const item = Fitems.find((product) => product.id === id);
    return item ? { ...item, quantity: cartItems[id].quantity } : null;
  }).filter(item => item !== null);

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal">
        <button className="cart-modal-close" onClick={onClose}>X</button>
        <h2>User Cart</h2>
        <div className="cart-modal-content">
          {items.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-modal-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-modal-item-details">
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: ${item.price * item.quantity}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
