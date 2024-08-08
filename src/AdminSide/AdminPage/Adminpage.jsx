import React from 'react'
import AdNav from '../AdminCom/AdNav/AdNav'
import AdProducts from '../AdminCom/AdProducts/AdProducts'
import Footer from '../../Components/Footer/Footer'

const AdminPage = () => {
  return (
    <div>
        <AdNav/>
        <AdProducts/>
        <Footer/>
    </div>
  )
}

export default AdminPage