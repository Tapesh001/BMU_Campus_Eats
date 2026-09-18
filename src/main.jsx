import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { AlertTriangle, ArrowRight, Check, Leaf, MapPin, ShieldCheck, ShoppingBag, Star, Tag, Utensils, Zap } from 'lucide-react';
import './styles.css';

const ASSETS = {
  backdrop: 'https://www.figma.com/api/mcp/asset/3b386765-5268-4bb6-8a41-a27017cdfeb9.png',
  logo: 'https://www.figma.com/api/mcp/asset/e9dca33e-c3b4-4506-ae15-cf19dca62dfc.png',
  emblem: 'https://www.figma.com/api/mcp/asset/42ff6a84-8d3c-47a0-9214-e86cef8d41e1.png',
  hero: 'https://www.figma.com/api/mcp/asset/d2bd300c-416b-4784-b852-db7f9c1d1552.png'
};

const navItems = [
  ['Home', '/home'], ['Shops', '/shops'], ['Cart', '/cart'], ['Orders', '/orders'], ['Profile', '/profile'], ['Login', '/login']
];

function Brand({ light = false }) {
  return <div className="brand">
    <div className="emblem"><img src={ASSETS.emblem} alt="BML Munjal University emblem" /></div>
    <span className={light ? 'light-text' : ''}>BMU Campus Eats</span>
    <span className="badge amber">STUDENT</span>
  </div>;
}

function Header() {
  const navigate = useNavigate(); const location = useLocation();
  return <header className="topbar">
    <Brand light />
    <nav>{navItems.map(([label, path]) => <button key={path} className={location.pathname === path ? 'active' : ''} onClick={() => navigate(path)}>{label}</button>)}</nav>
  </header>;
}

function Layout({ children, footer = false }) { return <div className="app-shell"><Header />{children}{footer && <footer><span>© BMU Campus Eats</span><div><span>Profile</span><span>Shops</span><span>Shop owner login</span><span>Admin login</span></div></footer>}</div>; }
function Button({ children, onClick, outline = false }) { return <button className={`button ${outline ? 'outline' : ''}`} onClick={onClick}>{children}</button>; }
function Status({ children, tone = 'green' }) { return <span className={`badge status-${tone}`}>{children}</span>; }

function Login() {
  const navigate = useNavigate();
  return <div className="login-page" style={{ backgroundImage: `url(${ASSETS.backdrop})` }}><div className="login-overlay" /><div className="login-card">
    <div className="login-logo"><img src={ASSETS.logo} alt="BMU logo" /></div>
    <div className="login-brand"><Utensils size={16} /> BMU Campus Eats</div>
    <div className="eyebrow">BML MUNJAL UNIVERSITY</div>
    <h1>Welcome to BMU Campus Eats</h1>
    <p className="muted">Order your favourite campus food, just a click away.</p>
    <label>Student ID / Email<input placeholder="name.surname.25cse@bmu.edu.in" /></label>
    <label>Password<input placeholder="••••••••••••" type="password" /></label>
    <a className="forgot">Forgot Password?</a>
    <Button onClick={() => navigate('/home')}>Login <ArrowRight size={15} /></Button>
    <p className="muted small">New to Campus Eats? <span className="link">Create account</span></p>
  </div></div>;
}

const steps = [['01', 'Browse shops', 'Pick from campus shops, see live status, and compare menus in one place.'], ['02', 'Place order', 'Add items, apply student discounts, and confirm your hostel gate pickup.'], ['03', 'Collect at hostel gate', 'Track every update and collect your meal without leaving the hostel.']];
const benefits = [[Zap, 'Fast delivery', 'Orders are routed to the nearest campus partner for quick pickup.'], [Leaf, 'Fresh food', 'Partner shops prepare orders just before pickup for the best quality.'], [Tag, 'Student discounts', 'Exclusive offers and student pricing make meals more affordable.'], [MapPin, 'Track your order', 'Stay updated from accepted to ready for collection.'], [ShieldCheck, 'Safe & reliable', 'Verified campus partners and secure student checkout.'], [Star, 'Made for BMU', 'One place for all your campus food needs.']];

function Home() { const navigate = useNavigate(); return <Layout footer><main className="page home-page">
  <section className="hero" style={{ backgroundImage: `url(${ASSETS.hero})` }}><div className="hero-copy"><span className="badge amber">MADE FOR BMU STUDENTS</span><h1>Campus food, delivered to your hostel gate</h1><p>Order from your favourite campus shops, track every update, and collect your meal without leaving the hostel.</p><Button outline onClick={() => navigate('/shops')}>Browse shops</Button></div><div className="hero-art"><ShoppingBag size={148} strokeWidth={1.2} /></div></section>
  <section className="panel"><SectionHeading title="How it works" description="A simple, hostel-first experience designed for BMU students." /><div className="card-grid three">{steps.map(([num, title, copy]) => <article className="soft-card" key={num}><span className="step">{num}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
  <section className="panel"><SectionHeading title="Why Campus Eats?" description="Built for BMU students, with the features that matter most." /><div className="card-grid three">{benefits.map(([Icon, title, copy]) => <article className="soft-card benefit" key={title}><span className="icon-circle"><Icon size={20} /></span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
 </main></Layout>; }
function SectionHeading({ title, description }) { return <div className="section-heading"><h2>{title}</h2><p>{description}</p></div>; }

const shops = [['Kathi Junction', 'Rolls, wraps, and North Indian comfort food.', 'OPEN', 'green', 'sandwich'], ['Greenox', 'Fresh bowls, salads, and wholesome plates.', 'OPEN', 'green', 'salad'], ['Sweet Truth', 'Desserts, shakes, and late-night treats.', 'BUSY', 'amber', 'dessert'], ['Tuck Shop', 'Quick bites, snacks, and essentials.', 'CLOSED', 'red', 'snack'], ["Domino's", 'Pizza and sides for a group hangout.', 'OPEN', 'green', 'pizza'], ['Maggie Point', 'Instant noodles, sandwiches, and chai.', 'OPEN', 'green', 'noodles']];
function Shops() { const navigate = useNavigate(); return <Layout><main className="page"><div className="page-title"><h1>Campus shops</h1><p>Find your next meal from BMU's favourite food spots.</p></div><div className="legend"><span>Shop status</span><Status tone="green">OPEN</Status><Status tone="amber">BUSY</Status><Status tone="red">CLOSED</Status></div><div className="shop-grid">{shops.map(([name, desc, state, tone, icon]) => <article className="shop-card" key={name}><div className={`shop-art art-${icon}`}><ShoppingBag size={62} strokeWidth={1.3} /></div><div className="shop-details"><div className="shop-heading"><h3>{name}</h3><Status tone={tone}>{state}</Status></div><p>{desc}</p><Button onClick={() => navigate('/cart')}>View menu <ArrowRight size={14} /></Button></div></article>)}</div></main></Layout>; }

const cartItems = [['Paneer Kathi Roll', 'Kathi Junction', '1', '₹120', 'READY FOR PICKUP', 'green'], ['Cold Coffee', 'Sweet Truth', '1', '₹90', 'PREPARING', 'amber']];
function Cart() { const navigate = useNavigate(); return <Layout><main className="page cart-page"><div className="page-title"><h1>Your cart</h1><p>Review your items before placing the order.</p></div><div className="warning"><AlertTriangle size={18} /><span>Orders are collected at the hostel gate selected during checkout.</span></div><h2 className="subheading">Cart items</h2><div className="table cart-table"><div className="table-row head"><span>Item</span><span>Shop</span><span>Qty</span><span>Price</span><span>Status</span></div>{cartItems.map(([item, shop, qty, price, status, tone]) => <div className="table-row" key={item}><span>{item}</span><span>{shop}</span><span>{qty}</span><span>{price}</span><span><Status tone={tone}>{status}</Status></span></div>)}</div><div className="cart-actions"><Button outline onClick={() => navigate('/shops')}>Continue shopping</Button><div className="summary"><strong>Total ₹210</strong><Button onClick={() => navigate('/orders')}>Proceed to checkout <ArrowRight size={14} /></Button></div></div></main></Layout>; }

const orders = [['#BMU-1048', 'Kathi Junction', '11 Sep, 12:42', 'PLACED', 'blue'], ['#BMU-1047', 'Burger Singh', '10 Sep, 20:14', 'ACCEPTED', 'green'], ['#BMU-1046', 'Greenox', '10 Sep, 13:08', 'PREPARING', 'amber'], ['#BMU-1045', "Domino's", '09 Sep, 21:32', 'OUT_FOR_DELIVERY', 'purple'], ['#BMU-1044', 'Maggie Point', '08 Sep, 18:05', 'DELIVERED', 'green'], ['#BMU-1043', 'Tuck Shop', '07 Sep, 16:22', 'REJECTED', 'red']];
function Orders() { return <Layout footer><main className="page orders-page"><div className="page-title"><h1>Your orders</h1><p>Track current orders and revisit your campus food history.</p></div><div className="table orders-table"><div className="table-row head"><span>Order</span><span>Shop</span><span>Date</span><span>Status</span><span><Button outline>Actions</Button></span></div>{orders.map(([id, shop, date, status, tone]) => <div className="table-row" key={id}><span>{id}</span><span>{shop}</span><span>{date}</span><span><Status tone={tone}>{status}</Status></span><span><Button outline>View order</Button></span></div>)}</div></main></Layout>; }

function App() { return <Routes><Route path="/" element={<Navigate to="/login" replace />} /><Route path="/login" element={<Login />} /><Route path="/home" element={<Home />} /><Route path="/shops" element={<Shops />} /><Route path="/cart" element={<Cart />} /><Route path="/orders" element={<Orders />} /><Route path="/profile" element={<Navigate to="/home" replace />} /><Route path="*" element={<Navigate to="/login" replace />} /></Routes>; }
createRoot(document.getElementById('root')).render(<BrowserRouter><App /></BrowserRouter>);
