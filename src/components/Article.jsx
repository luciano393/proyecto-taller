import React from 'react';
import image from '../assets/image-4.svg'
import { Button } from './Button';

export const Article = () => {
    return (
        <section className="Article">
            <div className="box-container">
                <div className="text-content">
                    <h3>Te mantenemos al tanto de todo</h3>
                    <p>En nuestro taller la comunicación con los clientes es muy importante.
                    Hacemos un seguimiento de las etapas en los arreglos, para que el proceso sea lo mas transparente posible.</p>
                    <a href="https://wa.me/541127009501?text=Hola%20tengo%20una%20consulta..." className="btn primary">
                        Chatea con nostros
                    </a>
                </div>
                <div className="image-content">
                    <img src={image} alt=" " />
                </div>
            </div>
        </section>
    )
}
