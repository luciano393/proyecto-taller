import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer, faFill, faClipboard, faCar } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';

export const Services = () => {
    return (
        <section className="Services">
            <h2>Nuestos Servicios</h2>
            <p>Descubrí los servicios que tenemos para vos</p>
            <div className="box-container">
                <div className="box">
                    <FontAwesomeIcon icon={faHammer} className="box-icon"/>
                    <p>Reparación de carrocería</p>
                </div>
                <div className="box">
                    <FontAwesomeIcon icon={faFill} className="box-icon"/>
                    <p>Pintura Automotríz</p>
                </div>
                <div className="box">
                    <FontAwesomeIcon icon={faClipboard} className="box-icon"/>
                    <p>Presupuestos</p>
                </div>
                <div className="box">
                    <FontAwesomeIcon icon={faCar} className="box-icon"/>
                    <p>Estética Automotríz</p>
                </div>
            </div>
            <div className="buttons">
                <Button text="Solicitar Presupuesto" to="/" className="btn outline" />
                <Button text="Solicitar un turno" to="/" className="btn primary" />
            </div>
        </section>
    )
}
