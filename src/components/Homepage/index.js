import React, { useState } from 'react'
import './index.css'
import penLight from '../../assets/images/Pen_light.png'
import pipeLight from '../../assets/images/Pipe_light.png'
import phoneLight from '../../assets/images/phone_light.png'
import codeLight from '../../assets/images/Code_light.png'
import ServiceCard from '../ServiceCard'
import Footer from '../Footer'
import Header from '../Header'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'

function Homepage() {
    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [message, setMessage] = useState()
    const [isVerified, setIsVerified] = useState(false)

    // Testing environment variables
    // console.log(process.env.SECRET_KEY)

    // handle form submission
    const handleContactForm = async (e) => {
        e.preventDefault()

        // check if captcha is verified
        if(isVerified) {
            axios.post('http://localhost:5010/api/sendEmail', {
                firstname,
                lastname,
                email,
                phone,
                message
            }).then(response => {
                console.log('Response:', response)
                setFirstname('')
                setLastname('')
                setEmail('')
                setPhone('')
                setMessage('')
                setIsVerified(false)
                window.location.reload()
            }).catch(error => {
                console.log('Error:', error)
            })
        } else {
            console.log('Captcha not filled yet!')
        }
    }

    // handle captcha verification
    const handleOnChange = (value) => {
        console.log('Captcha value:', value)
        isVerified ? setIsVerified(false) : setIsVerified(true)
    }

    return (
        <div className='layout-container'>
            <Header />

            <main className='main-content' id='main-content'>
                <div className='main-content-heading'>
                    <div className='main-content-heading-content'>
                        <h2>Services We Can Help You</h2>
                        <p>voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                            ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
                        </p>
                    </div>

                </div>

                <div className='services'>
                    <div className='service-group'>
                        <ServiceCard
                            icon={penLight}
                            title='Web Development'
                            paragraph='Voluptatem accusantium doloremque laudantium, totam rem aperiam,
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.'
                            link='#'
                            linkText='Learn More'
                        />
                        <ServiceCard
                            icon={pipeLight}
                            title='Custom Web App Development'
                            paragraph='Voluptatem accusantium doloremque laudantium, totam rem aperiam,
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.'
                            link='#'
                            linkText='Learn More'
                        />
                    </div>

                    <div className='service-group'>
                        <ServiceCard
                            icon={phoneLight}
                            title='App Development'
                            paragraph='Voluptatem accusantium doloremque laudantium, totam rem aperiam,
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.'
                            link='#'
                            linkText='Learn More'
                        />
                        <ServiceCard
                            icon={codeLight}
                            title='Software Development'
                            paragraph='Voluptatem accusantium doloremque laudantium, totam rem aperiam,
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.'
                            link='#'
                            linkText='Learn More'
                        />
                    </div>

                </div>

                <div className='contact'>
                    <div className='skew-container'>
                        <div className='skew-background'>
                            <div className='contact-content text-align-center'>
                                <h2>Can't wait to hear from you</h2>
                                <h1>{isVerified}</h1>
                                <form className='form-container' onSubmit={handleContactForm}>
                                    <div className='d-flex form-group-container'>
                                        <div className='form-group'>
                                            <label htmlFor='firstname'>Firstname *</label>
                                            <input type='text' name='firstname' id='firstname' className='form-control' placeholder='Firstname' onChange={(e) => setFirstname(e.target.value)} />
                                        </div>

                                        <div className='form-group'>
                                            <label htmlFor='lastname'>Lastname *</label>
                                            <input type='text' name='lastname' id='lastname' className='form-control' placeholder='Lastname' onChange={(e) => setLastname(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className='d-flex justify-space-between form-group-container'>
                                        <div className='form-group'>
                                            <label htmlFor='email'>Email *</label>
                                            <input type='email' name='email' id='email' className='form-control' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                                        </div>

                                        <div className='form-group'>
                                            <label htmlFor='phone'>Phone Number *</label>
                                            <input type='tel' name='phone' id='phone' className='form-control' placeholder='Phone Number' onChange={(e) => setPhone(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className='form-group'>
                                        <label htmlFor='message'>Message *</label>
                                        <textarea className='form-control' id='message' name='message' placeholder='Hi Sandro,' onChange={(e) => setMessage(e.target.value)} />
                                    </div>

                                    <div className='form-group d-flex mt-4 justify-content-center'>
                                        <ReCAPTCHA
                                            sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
                                            onChange={handleOnChange}
                                        />
                                    </div>

                                    <div className='form-group d-flex justify-content-center'>
                                        <button className='btn btn-primary mt-3 py-2 px-4 send-button' disabled={!isVerified} >Send</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Homepage