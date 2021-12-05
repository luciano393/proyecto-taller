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
                    <Button text="Chatea con nostros" to="/" className="btn primary" />
                </div>
                <div className="image-content">
                    <img src={image} alt=" " />
                </div>
            </div>
        </section>
    )
}
