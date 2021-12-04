import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
    const [showNavbar, setShowNavar] = useState(false);

    const toggleNavbar = () => {
        setShowNavar(!showNavbar)
    }

    const open = showNavbar ? "open" : "close";

    return (
        <header>
            <h1 className="logo">Servicio Alcorta</h1>

            <nav className={open}>
                <div className="heading">
                    <h1 className="nav_logo">Servicio Alcorta</h1>

                    <FontAwesomeIcon icon={faTimes} className="nav_close" onClick={toggleNavbar}/>
                </div>

                <Link to="/" className="item">Inicio</Link>
                <Link to="/" className="item">¿Quienes Somos?</Link>
                <Link to="/" className="item">Ubicación</Link>
                <Link to="/" className="item">Contacto</Link>
            </nav>

            <div className="whatsapp">
                <FontAwesomeIcon icon={faWhatsapp} className="whatsapp__icon"/>
                <a href="/" className="whatsapp__number">11 4857-7777</a>
            </div>

            <FontAwesomeIcon icon={faBars} className="bars" onClick={toggleNavbar}/>
        </header>
    )
}
