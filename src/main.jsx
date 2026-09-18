import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './styles.css';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Shops from './pages/Shops.jsx';
import Cart from './pages/Cart.jsx';
import Orders from './pages/Orders.jsx';
function App(){return <Routes><Route path="/" element={<Navigate to="/login" replace/>}/><Route path="/login" element={<Login/>}/><Route path="/home" element={<Home/>}/><Route path="/shops" element={<Shops/>}/><Route path="/cart" element={<Cart/>}/><Route path="/orders" element={<Orders/>}/><Route path="/profile" element={<Navigate to="/home" replace/>}/><Route path="*" element={<Navigate to="/login" replace/>}/></Routes>}
createRoot(document.getElementById('root')).render(<BrowserRouter><App/></BrowserRouter>);
