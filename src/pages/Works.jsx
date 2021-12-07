import React from 'react';
import auto from '../assets/auto.jpg';
import auto2 from '../assets/bmw.jpg';
import auto3 from '../assets/duster.jpg';
import auto4 from '../assets/f100.jpg';
import auto5 from '../assets/f100-2.jpg';
import auto6 from '../assets/fox.jpg';
import auto7 from '../assets/honda.jpg';
import auto8 from '../assets/peugeot.jpg';
import auto9 from '../assets/trend.jpg';
import auto10 from '../assets/vento.jpg';

export const Works = () => {
    const vehiculos = [
        auto,auto2,auto3,auto4,auto5,auto6,auto7,auto8,auto9,auto10
    ]

    return (
        <main className="Works">
            <h1>Trabajos Finalizados</h1>
            <div className="box-container">
                {vehiculos.map((auto, i) => (
                    <div className="box">
                        <img src={auto} alt="i" />
                    </div>
                ))}
            </div>
        </main>
    )
}
