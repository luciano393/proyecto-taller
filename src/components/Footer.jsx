import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <footer>
            <p>Seguinos en</p>
            <div className="row">
                <a href="/" className="social">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="/" className="social">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
        </footer>
    )
}
