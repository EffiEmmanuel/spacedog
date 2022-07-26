import React from 'react'
import './index.css'
import spacedogLogo from '../../assets/images/spacedog-logo.png'
import smokeBg from '../../assets/images/smoke-effect.png'
import arrowDownButton from '../../assets/images/arrow-down-button.png'

function Header() {
    return (
        <>
            <header className='hero'>
                <div className='skew-container'>
                    <div className='skew-background'>
                        <img src={smokeBg} alt='' className='smokebg' />
                        <div className='hero-content'>
                            <img src={spacedogLogo} className='spacedog-logo' alt='Spacedog logo' />
                            <h1>Spacedog Digital</h1>
                            <a href='#'>
                                <img src={arrowDownButton} className='arrowdown' alt='Down arrow button' />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header