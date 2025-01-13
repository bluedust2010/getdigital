import React from 'react';
import './Services.css';

export default function Services() {
  return (
    <main className='services-main'>
        <h1 className='services-h1'>Services we offer</h1>
        <div className='services-offers'>
            <p>Web design is one of the most sought after things in the world and with many 'easy to use' web designer tools it can be quite overwhelming. Here at Get Digital we want to put your online interests at ease. We offer professional and Personalised Websites that are modern. Website Design is not easy, but at Get Digital we make it easy.</p>
        </div>
        <section className='services-cards'>
            <h2>Web Design Packages</h2>
            <div className='service-card-holder'>
                <div className='services-card'>
                    <h3>Basic Website</h3>
                    <div className='service-card-description'>
                        <p>Simple basic 4 Page website</p>
                        <p>Terms and Conditions &amp; Privacy Policy included for free</p>
                        <div className='services-pricing'>
                            <span>From </span>
                            <span><strong>R2 000</strong></span>
                        </div>
                        <a href='/services/basic'>Learn More</a>
                    </div>
                </div>
                <div className='services-card'>
                    <h3>Ecommerce Websites</h3>
                    <div className='service-card-description'>
                        <p>Easy to use Ecommerce Website</p>
                        <p>Standard Ecommerce Pages</p>
                        <p>Admin login and product management</p>
                        <p>Terms and Conditions &amp; Privacy Policy included for free</p>
                        <div className='services-pricing'>
                            <span>From </span>
                            <span><strong>R5 000</strong></span>
                        </div>
                        <a href='/services/ecommerce'>Learn More</a>
                    </div>
                </div>
            </div>
        </section>
        <section className='services-additional'>
            <h2>We also offer additional services along with web design</h2>
            <div className='additional-card-holder'>
                <div className='services-additional-card'>
                    <h3>Web Hosting</h3>
                    <p>If you are happy with your website we will offer to take the hassle and host the website for you.</p>
                    <p>We put it up and monitor it for you</p>
                    <div className='services-additional-card-price'>
                        <span>From: </span>
                        <span><strong>R200</strong>/month</span>
                    </div>
                </div>
                <div className='services-additional-card'>
                    <h3>Web Hosting & Continuous Maintenance</h3>
                    <p>We get the website up, and offer Continuous Maintenance</p>
                    <p>Any and all changes you wish to make (depending on the size) within a short period of time</p>
                    <div className='services-additional-card-price'>
                        <span>From:</span>
                        <span><strong>R300</strong>/month</span>
                    </div>
                </div>
                <div className='services-additional-card'>
                    <h3>Email Services</h3>
                    <p>Get an email specific to your busienss</p>
                    <p>This will be a name@domain.co.za we set it up</p>
                    <p>Basic 10 emails for R150 and then its an additional R50 every 10 emails</p>
                    <div className='services-additional-card-price'>
                        <span>From:</span>
                        <span><strong>R150</strong>/month</span>
                    </div>
                </div>
            </div>
        </section>
        <div className='why-us'>
            <h2>Why Choose Us?</h2>
            <p>At Get Digital we specialise in specific and personalised websites for you or your business. We want you to get your online footprint as soon as possible and offer you real time assistance.</p>
            <p>We want to give you a website that is professional and comprehensive. </p>
        </div>
        <div className='get-digital'>
            <h2>Get Digital</h2>
            <p>Once you know what you want <a href='/contact'>Get Digital</a></p>
        </div>
    </main>
  );
}
