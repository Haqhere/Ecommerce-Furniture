import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import  {assets} from '../../Assets/assets'
import {Link, useNavigate} from 'react-router-dom';
import { StoreContext } from '../Context/StoreContext';
import axios from "axios";



const Navbar = () => {
  
  const {getTotalCartAmount,logedin,setLogedin,cartItems,setCartItems}= useContext(StoreContext);

  const [drop,setDrop] = useState(false);
 
  const[username,setUsername]= useState('');

  const navigate = useNavigate();

  const newLis=Object.keys(cartItems).length
  
  
  
  const handleLogout = () => {
    localStorage.removeItem('user');
    setLogedin(false)
    navigate('/')
    setCartItems({})
  }


  const [menu,setMenu] = useState('home')




  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const user = JSON.parse(storedUser);
          const response = await axios.get(`http://localhost:5000/users/${user.id}`);
          setUsername(response.data.username);
        }
      } catch (error) {
        console.error('Error fetching username:', error);
      }
    };

    if (logedin) {
      fetchUsername();
    }
    console.log(newLis)
  }, [logedin]);

  

  
  
  return (
    <div className='navbar'>
       <div className='logo-container'>
      <Link to='/' className='flex items-center'><img onClick={()=>setDrop(!drop)} className="logo"src={assets.Logo}alt="navlogo" /><p className='text-emerald-500 font-bold'>PureCraft</p></Link>
  {!drop?
  <></> : <div className="drop relative inline-block text-left">
 
  <div className="absolute right-120 z-10  w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div className="py-1" role="none">
      <a href="#explore-menu" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1">Menu</a>
      <a href="#footer" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-2">Contact</a>
    </div>
  </div>

  </div> }

  </div>
       
        <ul className="navbar-menu">
          <Link to='/' className={menu==='home'?"active":""} onClick={() => setMenu("home")}>Home</Link>
          <a href='#explore-menu' className={menu==='menu'?"active":""} onClick={() => setMenu("menu")}>Menu</a>
          <a href='#footer' className={menu==='contact'?"active":""} onClick={() => setMenu("contact")}>Contact us</a>
        </ul>
        <div className="navbar-right"> 
          <img className='searchlogo' onClick={() => navigate('/Search')} src={assets.seacrh} alt="" />
          <div className="navbar-search-icon">
           <Link to='/Cart'><img className="cartlogo" src={assets.cart} alt="" /></Link>
           {newLis>0? <div className={getTotalCartAmount()===0?"":"dot"}>{newLis} </div>:<></>}
          </div>
         {!logedin? <Link to='/Login'><button >Login</button></Link>
          : <label className="popup">
  <input type="checkbox" />
  <div tabIndex="0" className="burger">
    <svg       viewBox="0 0 24 24" fill="white" height="20"
      width="20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z"
      ></path>
    </svg>
  </div>
  <nav className="popup-window">
    
    <ul>
      <li>
        <button onClick={handleLogout} >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.598 9h-1.055c1.482-4.638 5.83-8 10.957-8 6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5c-5.127 0-9.475-3.362-10.957-8h1.055c1.443 4.076 5.334 7 9.902 7 5.795 0 10.5-4.705 10.5-10.5s-4.705-10.5-10.5-10.5c-4.568 0-8.459 2.923-9.902 7zm12.228 3l-4.604-3.747.666-.753 6.112 5-6.101 5-.679-.737 4.608-3.763h-14.828v-1h14.826z"
            ></path>
          </svg>
          <span>Log Out</span>
        </button>
      </li>
    </ul>
  </nav>
</label>}
{logedin?<p className='text-emerald-500 font-bold -ml-5'>{username}</p>:<></>}
        </div>
    </div>
  )
}

export default Navbar