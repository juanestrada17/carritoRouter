import React from 'react';
// Step 1 Import the Link from the router-dom
import { Link } from "react-router-dom";
import "./Header.css";
// Step 2 Import the icons after installing  npm install boxicons --save


const Header = () => {

  const Titulo = "Delicias Italianas";

  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"> {Titulo}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <Link className='nav-link active' to='/'>Inicio</Link>
                    </li>

                    <li class="nav-item">
                        <Link className='nav-link' to='/nueva'>Nueva receta</Link>
                    </li>
                  
                </ul>

                
                <Link className='nav-link' to='/cart'>
                    <box-icon className = "iconColor" name='cart-add'></box-icon>
                </Link>
                
                
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header