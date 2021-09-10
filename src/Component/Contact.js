import React from 'react'
import './Scss/Contact.scss'

const Contact = () => {
    return (
        <>
            <div className="contact-container section-container">
                <div className="contact-header">
                    <h3 className="title">Contact</h3>                    
                </div>
                <address>
                    <a href="mailto:abdulalimrakib53@gmail.com" className="name">Adbul Alim</a> <br />
                    <p> Visit at:</p>
                    <p>3rd floor, xyz</p>
                    <p>39 NO. South Halishahar</p>
                    <p>Chattogram, CTG 400</p>
                    <p>CHATTOGRAM</p>
                </address>
                <h4 className="h4">Get In Touch</h4>
                <address>
                    <a href="mailto:abdulalimrakib53@gmail.com" className="email">abdulalimrakib53@gmail.com</a>
                    <p>Tel: +8801537-501-420</p>
                </address>
                <a className="mail-btn btn-btn" href="mailto:abdulalimrakib53@gmail.com">Let's Talk</a>
                <p className="description">I Am Currently Working From Bangladesh. I Am Always Available To Discuss Your Project Over The Phone Or Via Whatsapp.</p>
            </div>
        </>
    )
}

export default Contact
