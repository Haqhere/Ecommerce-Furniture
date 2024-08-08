import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import "./App.css";
import { useState } from "react";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/login/Login";
import Layout from "./Pages/layout/UserLayout";
import Search from "./Pages/SearchItems/Search";
import Payment from "./Pages/Payment/Payment";
import AdminPage from "./AdminSide/AdminPage/Adminpage";
import AdProducts from "./AdminSide/AdminCom/AdProducts/AdProducts";
import AdminUsers from "./AdminSide/AdminCom/AdminUsers/AdminUsers";

const App = () => {
  return (
    <>
      <div className="app">
        <Routes>
          
        <Route path="/" element={<Layout/>}>

          <Route index element={<Home/>}/>
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Order" element={<PlaceOrder />} />
          <Route path="/Search" element={<Search/>}/>
        
        </Route>

        <Route path="/Registration" element={<Registration />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/admin" element={<AdminPage/>} />
        <Route path="/users" element={<AdminUsers/>} />
       
        </Routes>
      </div>
    </>
  );
};

export default App;
