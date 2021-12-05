import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faCarCrash } from '@fortawesome/free-solid-svg-icons';

export const Banner = () => {
    return (
        <section className="Banner">
            <h3>¿Chocaste y necesitás un presupuesto para la aseguradora?</h3>
            <div className="box-container">
                <div className="box">
                    <FontAwesomeIcon icon={faCarCrash} className="box-icon"/>
                    <div className="text">
                        <h4>No la cajeties mas</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="box">
                    <FontAwesomeIcon icon={faClipboardList} className="box-icon"/>
                    <div className="text">
                        <h4>No la cajeties mas</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
