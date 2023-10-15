import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = ({ data }) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yoitw06', 'template_pcoyh5j', form.current, 'vvrD8g5LT1st3YKqf')
            .then((result) => {
                console.log(result.text);
                const userName = form.current.user_name.value;
                alert(`Hi ${userName}, thank you for reaching out to me!`);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id="contact">

            <div className="row section-head">
                <div className="two columns header-col">
                    <h1><span>Get In Touch.</span></h1>
                </div>
            </div>

            <div className="row">
                <div className="eight columns">
                    <form id="contactForm" name="contactForm" ref={form} onSubmit={sendEmail}>
                        <label>Name <span className="required">*</span></label>
                        <input type="text" name="user_name" />
                        <label>Email <span className="required">*</span></label>
                        <input type="email" name="user_email" />
                        <label>Message <span className="required">*</span></label>
                        <textarea name="message" />
                        <button type="submit" value="Send" className="submit">Submit</button>
                    </form>
                </div>


                <aside className="four columns footer-widgets">
                    <div className="widget widget_contact">
                        <h4>Address and Phone</h4>
                        <p className="address">
                            {data?.name}<br />
                            {data?.address.street} <br />
                            {data?.address.city}, {data?.address.state} {data?.address.zip}<br />
                            <span>{data?.phone}</span>
                        </p>
                    </div>
                    <div className="widget widget_tweets">
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default ContactUs;