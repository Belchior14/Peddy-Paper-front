import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Products from './Components/Products';
import Product from './Components/Product';
import Contactos from './Pages/Contactos/contactos';
import HomePage from './Pages/HomePage/homePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
    
    <Navbar />

    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<Products/>}/>
    <Route path="/product/:id" element={<Product/>} />
    <Route path="/contactos" element={<Contactos/>} />
    
    </Routes>
   
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
