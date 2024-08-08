import React, { useContext } from 'react'
import './Fbrows.css'
import { StoreContext } from '../Context/StoreContext'
import Frnitems from '../FITEM/Frnitems'
import {Link} from 'react-router-dom';
import  {assets} from '../../Assets/assets'





const Fbrows = ({category}) => {

    const {Fitems} = useContext(StoreContext)
  
  return (
    <div className='f-brows' id='f-brows'>
        <h2> Best quality furniture</h2>
        <div className="brows-list">
            {Fitems.map((item,index)=>{
                if(category==='All'|| category===item.category){
                  
                  return <Frnitems key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image}  />
           
                } 
                })}
        </div>
        
    </div>
  )
}

export default Fbrows






























