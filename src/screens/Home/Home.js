import React from 'react';
import "./Home.css";

export default function Home() {
  return (
    <main className='screens-home-main'>
      <section className='hero-section'>
        <h1 className='hero-title'>Get Digital</h1>
        <p className='hero-subtitle'>Empowering Your Online Presence</p>
        <a href='/services' className='cta-button'>Get Started</a>
      </section>

      <section className='about-section'>
        <h2>About Us</h2>
        <p>At Get Digital, we specialize in crafting modern, responsive websites to help your business thrive online. From design to deployment, we make your digital goals a reality.</p>
      </section>

      <section className='services-section'>
        <h2>Our Services</h2>
        <div className='service-cards'>
          <div className='service-card'>
            <h3>Web Design</h3>
            <p>Custom, user-friendly designs tailored for your brand.</p>
          </div>
          <div className='service-card'>
            <h3>SEO Optimization</h3>
            <p>Boost your website's visibility on search engines.</p>
          </div>
          <div className='service-card'>
            <h3>Site Maintenance</h3>
            <p>Keep your site updated, secure, and running smoothly.</p>
          </div>
          <div className='service-card'>
            <h3>Web Hosting</h3>
            <p>Put your site on the internet and keep it going.</p>
          </div>
        </div>
      </section>

      <section className='contact-section'>
        <h2>Want to know how to Get Digital?</h2>
        <a href='/contact-us' className='cta-button'>Contact Us</a>
      </section>
    </main>
  );
}
