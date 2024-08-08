import './Header.css'

import React from 'react'
import {useNavigate} from 'react-router-dom'


const Header = () => {

  const navigate = useNavigate();

  return (<div className="home">

<div className="header-contents">
            <h2>Shop The Best</h2>
            <p>Shop  primes of the market @ <u>PureCraft</u></p>
            <button onClick={() => navigate('/Search')}>View Products</button>
        </div>

    <div className='header'> </div>
    
    
  </div>
  )
}

export default Header