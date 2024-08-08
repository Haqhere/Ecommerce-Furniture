

import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [logedin, setLogedin] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [Fitems, setFitems] = useState([]);

  const user = JSON.parse(localStorage.getItem('user')); 
  const userId = user ? user.id : null;

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/products');
      setFitems(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchUserCart = async () => {
    if (userId) {
      try {
        const response = await axios.get(`http://localhost:5000/users/${userId}`);
        const userCart = {};
        response.data.Cart.forEach(item => {
          userCart[item.id] = item;
        });
        setCartItems(userCart);
      } catch (error) {
        console.error('Error fetching user cart:', error);
      }
    }
  };

  const addToCart = async (item) => {
    const updatedCart = { ...cartItems };

    if (!updatedCart[item.id]) {
      updatedCart[item.id] = { ...item, quantity: 1 };
    } else {
      updatedCart[item.id].quantity += 1;
    }

    setCartItems(updatedCart);

    if (logedin && userId) {
      try {
        await axios.patch(`http://localhost:5000/users/${userId}`, {
          Cart: Object.values(updatedCart),
        });
      } catch (error) {
        console.error('Error updating cart:', error);
      }
    }
  };

  const removeFromCart = async (itemId) => {
    const updatedCart = { ...cartItems };

    if (updatedCart[itemId].quantity > 1) {
      updatedCart[itemId].quantity -= 1;
    } else {
      delete updatedCart[itemId];
    }

    setCartItems(updatedCart);

    if (logedin && userId) {
      try {
        await axios.patch(`http://localhost:5000/users/${userId}`, {
          Cart: Object.values(updatedCart),
        });
      } catch (error) {
        console.error('Error updating cart:', error);
      }
    }
  };

  const getTotalCartAmount = () => {
    let total = 0;
    Object.values(cartItems).forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  };

  useEffect(() => {
    if (user) setLogedin(true);
    fetchItems();
    fetchUserCart();
  }, [userId]);

  const contextValue = {
    Fitems,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    logedin,
    setLogedin,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
