import React from 'react';
import './ECom.css';

export default function ecom() {
  return (
    <main className='ecom-main'>
      <a className='cta-button' href='/services'>Back to Services</a>
      <h1 className='ecom-h1'>Ecommerce Websites</h1>
      
      <section className='ecom-description'>
        <h2 className='ecom-description-title'>Description</h2>
        <p className='ecom-description-text'>Ecommerce Websites from <strong>R5 000</strong></p>
        <div className='ecom-pages'>
          <p className='ecom-pages-text'>Pages in this Package are</p>
          <ul className='ecom-pages-list'>
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Product Specific Pages</li>
            <li>Contact Us</li>
            <li>Payment</li>
            <li>Admin</li>
            <li>Product Management</li>
            <li>Add Products</li>
            <li>Edit Products</li>
          </ul>
        </div>
        <p className='ecom-description-text'>Terms and Conditions &amp; Privacy Policy done for free</p>
          <p className='ecom-description-text'>These are the ecommerce pages supplied</p>
        <p className='ecom-description-text'>Domain Purchase Is part of the Fee</p>
        <p className='ecom-description-text'>Additional Pages for <strong>R500</strong> per Page</p>
      </section>

      <section className='ecom-additional-services'>
        <h2 className='ecom-additional-services-title'>Additional Services</h2>
        <div className='ecom-additional-services-cards'>
          <div className='ecom-additional-service'>
            <h2 className='ecom-additional-service-title'>Web hosting</h2>
            <p className='ecom-additional-service-text'>We handle the web hosting for you</p>
            <p className='ecom-additional-service-text'>We will get the website live for you and you would not need to worry about anything on the internet</p>
            <p className='ecom-additional-service-price'>Web Hosting from <strong>R200</strong>/month</p>
          </div>
          <div className='ecom-additional-service'>
            <h2 className='ecom-additional-service-title'>Web Hosting & Continuous Maintenance</h2>
            <p className='ecom-additional-service-text'>We do the web hosting for you and keep updating the website whenever necessary</p>
            <p className='ecom-additional-service-text'>This way you are never out of date and will always be 1 step ahead</p>
            <p className='ecom-additional-service-price'>Web Hosting & Maintenance from <strong>R350</strong>/month</p>
          </div>
          <div className='ecom-additional-service'>
            <h2 className='ecom-additional-service-title'>Emails</h2>
            <p className='ecom-additional-service-text'>Emails as an Additional cost would be R150 for 10 email address name@yourdomain.co.za</p>
            <p className='ecom-additional-service-text'>This goes for all domains such as .com .net or .org and many more</p>
            <p className='ecom-additional-service-price'>Email Hosting <strong>R150</strong>/month</p>
          </div>
        </div>
      </section>

      <section className='ecom-terms'>
        <h2 className='ecom-terms-title'>Terms</h2>
        <div className='ecom-terms-content'>
          <p className='ecom-terms-text'>If you are not happy with our services you can cancel them at anytime</p>
          <p className='ecom-terms-text'>If you cancel your service with us you will still get to keep your website as you have paid for it</p>
          <p className='ecom-terms-text'>A 50% deposit is required, this is non-refundable. This guarantees your spot and ensures your website is developed</p>
          <p className='ecom-terms-text'>No website will be built until the 50% deposit has reflected in our account.</p>
          <p className='ecom-terms-text'>Quotes and Meetings with us are done free of charge.</p>
          <p className='ecom-terms-text'>ecom website sitemaps and preliminary designs or template display are done for free</p>
          <p className='ecom-terms-text'>Should you wish to take the Hosting and Maintenance plan and then decide not to do the Maintenance, a downgrade offer is available.</p>
          <p className='ecom-terms-text'>Should you not pay the full amount for the website, it will not be delivered nor hosted.</p>
          <p className='ecom-terms-text'>Should you select the email and hosting packages, the amount due should be paid with the final amount of the website for us to proceed</p>
        </div>
      </section>
    </main>
  );
}
