import React from 'react'
import { Article } from '../components/Article'
import { Banner } from '../components/Banner'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services';
import image from '../assets/image-4.svg';

export const Main = () => {
    return (
        <main>
            <Hero />
            <Services />
            <Banner />
            <Article 
            title="Te mantenemos al tanto de todo" 
            parrafo="En nuestro taller la comunicación con los clientes es muy importante.
            Hacemos un seguimiento de las etapas en los arreglos, para que el proceso sea lo mas transparente posible." link="https://wa.me/541127009501?text=Hola%20tengo%20una%20consulta..."
            textLink="Chatea con nostros"
            image={image}
            />
        </main>
    )
}
