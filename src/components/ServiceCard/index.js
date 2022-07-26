import React from 'react'
import './index.css'
import arrowLeft from '../../assets/images/Arrow.png'

function ServiceCard({ icon, title, paragraph, link, linkText }) {
    return (
        <>
            <div className='service-card'>
                <img src={icon} alt={title} />
                <div className='service-card-text'>
                    <h3>{title}</h3>
                    <p>{ paragraph }</p>
                </div>

                <div className='service-card-cta'>
                    <a href={link}>
                        <span>{linkText}</span>
                        <span className='arrow'><img src={arrowLeft} alt={linkText} /></span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default ServiceCard