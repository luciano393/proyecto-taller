import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useScreen } from "../hooks/useScreen";

export const Navbar = () => {
  const [showNavbar, setShowNavar] = useState(false);
  const screen = useScreen();

  const toggleNavbar = () => {
    setShowNavar(!showNavbar);
  };

  const open = showNavbar ? "open" : "close";

  const location = useLocation();
  useEffect(() => {
    const itemsHeader = Array.from(document.querySelectorAll(".item"));
    itemsHeader.map((item) => {
      item.pathname === location.pathname
        ? item.classList.add("active")
        : item.classList.remove("active");
    });
  }, [location.pathname]);

  return (
    <header>
      <h1 className="logo">LOGO</h1>

      <nav className={open}>
        <div className="heading">
          <h1 className="nav_logo">LOGO</h1>

          <FontAwesomeIcon
            icon={faTimes}
            className="nav_close"
            onClick={toggleNavbar}
          />
        </div>

        <Link
          to="/"
          className="item"
          onClick={screen < 920 ? toggleNavbar : null}
        >
          Inicio
        </Link>
        <Link
          to="/works"
          className="item"
          onClick={screen < 920 ? toggleNavbar : null}
        >
          Trabajos realizados
        </Link>
        <Link
          to="/about"
          className="item"
          onClick={screen < 920 ? toggleNavbar : null}
        >
          ¿Quienes Somos?
        </Link>
        <Link
          to="/location"
          className="item"
          onClick={screen < 920 ? toggleNavbar : null}
        >
          Ubicación
        </Link>
        <Link
          to="/contact"
          className="item"
          onClick={screen < 920 ? toggleNavbar : null}
        >
          Contacto
        </Link>
      </nav>

      <a
        href="https://wa.me/541127009501?text=Hola%20tengo%20una%20consulta..."
        className="whatsapp"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="whatsapp__icon" />
        <span className="whatsapp__number">11 2700-9501</span>
      </a>

      <FontAwesomeIcon icon={faBars} className="bars" onClick={toggleNavbar} />
    </header>
  );
};
