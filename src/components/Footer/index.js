import React from 'react'
import './index.css'
import twitterLogo from '../../assets/images/twitter.png'
import facebookLogo from '../../assets/images/facebook.png'
import youtubeLogo from '../../assets/images/youtube.png'
import instagramLogo from '../../assets/images/instagram.png'
import spacedogLogo from '../../assets/images/spacedog-logo.png'
import smokeBg from '../../assets/images/smoke-effect.png'

function Footer() {
    return (
        <>
            <footer>
                <div className='skew-container'>
                    <div className='skew-background'>
                        <img src={smokeBg} alt='' className='smokebg' />
                        <div className='footer-content'>
                            <img src={spacedogLogo} alt='spacedog' />
                            <h2>Spacedog Digital</h2>

                            <div className='social'>
                                <a href='#'>
                                    <img src={twitterLogo} alt='Follow spacedog on twitter' />
                                </a>
                                <a href='#'>
                                    <img src={facebookLogo} alt='Follow spacedog on facebook' />
                                </a>
                                <a href='#'>
                                    <img src={youtubeLogo} alt='Follow spacedog on youtube' />
                                </a>
                                <a href='#'>
                                    <img src={instagramLogo} alt='Follow spacedog on instagram' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer