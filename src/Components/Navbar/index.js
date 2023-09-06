import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"



function Navbar() {
  return (
    <div className='navbar'>
        <Link style={{textDecoration: 'none',color:"black"}} to="/">
        <p className='botão'>Home</p>
        </Link>
        
        <Link style={{textDecoration: 'none',color:"black"}} to="/products">
        <p className='botão'>Produtos</p>
        </Link>
        
        <Link style={{textDecoration: 'none' , color:"black"}} to="/contactos">
        <p className='botão'>Contactos</p>
        </Link>
       
    </div>
  )
}

export default Navbar