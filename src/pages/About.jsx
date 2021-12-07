import React from 'react';
import { Article } from '../components/Article';
import imagen from '../assets/quienesSomos.jpg';

export const About = () => {
    return (
        <main>
            <div className="hero-image"></div>
            <div className="heading">
                <h1>Quienes somos</h1>
                <Article 
                    title="Desde 2006 al servicio de nuestros clientes"
                    parrafo="Somos un taller de chapa y pintura ubicados en zona oeste. Llama y solicita tu presupuesto. Reparamos todo tipo de choques, también hacemos reparaciones de paragolpes, pulidos de ópticas, repintados completos y restauraciones. 15 años en la misma ubicación. Mas de 40 de experiencia en el rubro."
                    image={imagen}
                />
            </div>
        </main>
    )
}
