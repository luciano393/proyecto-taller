import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <footer>
            <p>Seguinos en</p>
            <div className="row">
                <a href="/">
                    <FontAwesomeIcon icon={faFacebook} className="social"/>
                </a>
                <a href="/">
                    <FontAwesomeIcon icon={faInstagram} className="social"/>
                </a>
            </div>
        </footer>
    )
}
