import React, { useState } from 'react';
import './Contact.css';
import address from '../../assets/location.png';
import phone from '../../assets/telephone-call.png';
import email from '../../assets/email.png';
import facebock from '../../assets/facebook-app-symbol.png';
import insta from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "1b3539b1-afb7-4331-8a62-b8e557a1589f");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-info">
                    <div className="box">
                        <div className="icon">
                            <b></b><img src={address} alt="Location" />
                        </div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>405544 Sugar Camp Road, <br /> San Francisco, <br />CA 94108</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <b></b><img src={phone} alt="Phone" />
                        </div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p>000-000-0000</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <b></b><img src={email} alt="Email" />
                        </div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>bsoomnodemailer@gmail.com</p>
                        </div>
                    </div>
                    <h2 className="txt">Connect With Us</h2>
                    <ul className="social">
                        <li><a href="#"><img src={facebock} alt="Facebook" /></a></li>
                        <li><a href="#"><img src={twitter} alt="Twitter" /></a></li>
                        <li><a href="#"><img src={insta} alt="Instagram" /></a></li>
                        <li><a href="#"><img src={linkedin} alt="LinkedIn" /></a></li>
                    </ul>
                </div>

                <div className="contact-form">
                    <form onSubmit={onSubmit}>
                        <h2>Contact us</h2>
                        <div className="input-box">
                            <input type="text" required name="name" />
                            <span>Name</span>
                        </div>
                        <div className="input-box">
                            <input type="email" required name="email" />
                            <span>Email</span>
                        </div>
                        <div className="input-box">
                            <textarea name="message" required></textarea>
                            <span>Message</span>
                        </div>
                        <div className="input-box">
                            <input type="submit" value="Send" />
                        </div>
                        <span className="span">{result}</span>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
