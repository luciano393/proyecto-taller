import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FormContact } from "../components/FormContact";

export const Contact = () => {
  return (
    <main className="Contact">
      <h1>Contactate con nosotros</h1>
      <FormContact />
      <h2>O contactanos por WhatsApp</h2>
      <a
        href="https://wa.me/541127009501?text=Hola%20tengo%20una%20consulta..."
        className="whatsapp-contact"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-contact__icon" />
        <span className="whatsapp-contact__number">11 2700-9501</span>
      </a>
    </main>
  );
};
