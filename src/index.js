import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Product from './Components/Product';
import Contactos from './Pages/Contactos/contactos';
import HomePage from './Pages/HomePage/homePage';
import Produtos from './Pages/Productos/produtos';
import Snowfall from 'react-snowfall'

//test

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
   {/*  <Snowfall snowflakeCount={100} /> */}
 

    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<Produtos/>}/>
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
