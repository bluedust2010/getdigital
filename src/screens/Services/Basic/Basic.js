import React from 'react';
import './Basic.css';

export default function Basic() {
  return (
    <main className='basic-main'>
      <a className='cta-button' href='/services'>Back to Services</a>
      <h1 className='basic-h1'>Basic Websites</h1>
      
      <section className='basic-description'>
        <h2 className='basic-description-title'>Description</h2>
        <p className='basic-description-text'>Basic 4 Page Websites from <strong>R 2000</strong></p>
        <div className='basic-pages'>
          <p className='basic-pages-text'>4 Pages are Generally</p>
          <ul className='basic-pages-list'>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
          <p className='basic-description-text'>Your choice does not have to use those 4 pages names</p>
        </div>
        <p className='basic-description-text'>Terms and Conditions &amp; Privacy Policy done for free</p>
        <p className='basic-description-text'>Domain Purchase Is part of the Fee</p>
        <p className='basic-description-text'>Additional Pages for <strong>R500</strong> per Page</p>
      </section>

      <section className='basic-additional-services'>
        <h2 className='basic-additional-services-title'>Additional Services</h2>
        <div className='basic-additional-services-cards'>
          <div className='basic-additional-service'>
            <h2 className='basic-additional-service-title'>Web hosting</h2>
            <p className='basic-additional-service-text'>We handle the web hosting for you</p>
            <p className='basic-additional-service-text'>We will get the website live for you and you would not need to worry about anything on the internet</p>
            <p className='basic-additional-service-price'>Web Hosting from <strong>R200</strong>/month</p>
          </div>
          <div className='basic-additional-service'>
            <h2 className='basic-additional-service-title'>Web Hosting & Continuous Maintenance</h2>
            <p className='basic-additional-service-text'>We do the web hosting for you and keep updating the website whenever necessary</p>
            <p className='basic-additional-service-text'>This way you are never out of date and will always be 1 step ahead</p>
            <p className='basic-additional-service-price'>Web Hosting & Maintenance from <strong>R350</strong>/month</p>
          </div>
          <div className='basic-additional-service'>
            <h2 className='basic-additional-service-title'>Emails</h2>
            <p className='basic-additional-service-text'>Emails as an Additional cost would be R150 for 10 email address name@yourdomain.co.za</p>
            <p className='basic-additional-service-text'>This goes for all domains such as .com .net or .org and many more</p>
            <p className='basic-additional-service-price'>Email Hosting <strong>R150</strong>/month</p>
          </div>
        </div>
      </section>

      <section className='basic-terms'>
        <h2 className='basic-terms-title'>Terms</h2>
        <div className='basic-terms-content'>
          <p className='basic-terms-text'>If you are not happy with our services you can cancel them at anytime</p>
          <p className='basic-terms-text'>If you cancel your service with us you will still get to keep your website as you have paid for it</p>
          <p className='basic-terms-text'>A 50% deposit is required, this is non-refundable. This guarantees your spot and ensures your website is developed</p>
          <p className='basic-terms-text'>No website will be built until the 50% deposit has reflected in our account.</p>
          <p className='basic-terms-text'>Quotes and Meetings with us are done free of charge.</p>
          <p className='basic-terms-text'>Basic website sitemaps and preliminary designs or template display are done for free</p>
          <p className='basic-terms-text'>Should you wish to take the Hosting and Maintenance plan and then decide not to do the Maintenance, a downgrade offer is available.</p>
          <p className='basic-terms-text'>Should you not pay the full amount for the website, it will not be delivered nor hosted.</p>
          <p className='basic-terms-text'>Should you select the email and hosting packages, the amount due should be paid with the final amount of the website for us to proceed</p>
        </div>
      </section>
    </main>
  );
}
