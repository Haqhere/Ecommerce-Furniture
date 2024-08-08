import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AdNav from '../AdNav/AdNav';
import Footer from '../../../Components/Footer/Footer';
import './AdminUsers.css';
import { StoreContext } from '../../../Components/Context/StoreContext';
import AdminCart from './../AdminCart/AdminCart'

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);
  const [userCart, setUserCart] = useState({});
  const [selectedUser, setSelectedUser] = useState(null);

  const { Fitems } = useContext(StoreContext);

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(res => { setUsers(res.data); })
      .catch(error => { console.error('error fetching data:', error); });
  }, []);

  const handleDelete = (userId) => {
    axios.delete(`http://localhost:5000/users/${userId}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== userId));
      })
      .catch(error => {
        console.error('error deleting user', error);
      });
  };

  const handleCart = (userId) => {
    axios.get(`http://localhost:5000/users/${userId}`)
      .then(res => {
        setUserCart(res.data.Cart.reduce((acc, item) => {
          acc[item.id] = item;
          return acc;
        }, {}));
        setSelectedUser(userId);
        setModal(true);
      })
      .catch(error => {
        console.error('Error while fetching:', error);
      });
  };

  const closeModal = () => {
    setModal(false);
    setSelectedUser(null);
  };

  return (
    <>
      <AdNav />
      <div className='user-cards-container'>
        {users.map(user => (
          <div key={user.id} className='user-card'>
            <h2>{user.username}</h2>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
            <div className='btn-container'>
              <button className='delete-btn' onClick={() => handleDelete(user.id)}>Delete</button>
              <button className='cart-btn' onClick={() => handleCart(user.id)}>Cart</button>
            </div>
          </div>
        ))}
      </div>
      {modal && (
        <AdminCart
          isOpen={modal}
          onClose={closeModal}
          cartItems={userCart}
          Fitems={Fitems}
        />
      )}
      <Footer />
    </>
  );
};

export default AdminUsers;

























