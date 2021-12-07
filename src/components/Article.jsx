import React from 'react';

export const Article = ({title, parrafo,link,textLink,image}) => {
    return (
        <section className="Article">
            <div className="box-container">
                <div className="text-content">
                    <h3>{title}</h3>
                    <p>{parrafo}</p>
                    {link ? 
                    <a href={link} className="btn primary">
                        {textLink}
                    </a>
                    : null
                    }
                </div>
                <div className="image-content">
                    <img src={image} alt=" " />
                </div>
            </div>
        </section>
    )
}

