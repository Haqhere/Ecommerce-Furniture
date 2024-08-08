import './ExploreMenu.css'
import {Itemlist} from '../../Assets/assets.jsx'


const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
            <h1>Explore Products</h1>
            <p className='expolre-menu-text'>explore variuos luxury furnitures across the world.Built with premium quality metirials </p>
            <div className="explore-menu-list ">
                {Itemlist.map((item,index) =>{
                    return(
                        <div onClick={() => setCategory(prev=>prev===item.itemname ? "All": item.itemname)} key={index} className="explore-menu-list-item">
                           <div className="w-48 h-45 ">
                            <img className={category===item.itemname?"active":""} src={item.itemimage} alt="" id='expimg'/>
                            <p>{item.itemname}</p>
                           </div>
                        </div>
                    )
                })}
            </div>
            <hr/>
    </div>
  )
}

export default ExploreMenu