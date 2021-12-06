import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image from '../assets/image-1.svg';
import image2 from '../assets/image-2.svg';
import image3 from '../assets/image-3.svg';
import { Button } from './Button';

export const Hero = () => {
    return (
        <Carousel 
            className="Hero"
            useKeyboardArrows={true}
            renderThumbs={() => false}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            swipeable={false}
        >
            <div className="slide-item">
                <div className="text-content">
                    <h1>Taller de chapa y pintura Servicio Alcorta</h1>
                    <Button text="Conocenos" className="btn primary" to="/"/>
                </div>
                <div className="image-content">
                    <img src={image2} alt=" "/>
                </div>
            </div>
            <div className="slide-item">
                <div className="text-content">
                    <h1>Estamos ubicados en Moreno, Buenos Aires</h1>
                    <Button text="Ubicacion" className="btn primary" to="/"/>
                </div>
                <div className="image-content">
                    <img src={image} alt=" "/>
                </div>
            </div>
            <div className="slide-item">
                <div className="text-content">
                    <h1>Presupuestos para el seguro</h1>
                    <Button text="Cotizar" className="btn primary" to="/"/>
                </div>
                <div className="image-content">
                    <img src={image3} alt=" "/>
                </div>
            </div>
        </Carousel>
    )
}
