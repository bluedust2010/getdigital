import React from 'react'
import './AboutUs.css'

export default function AboutUs() {
  return (
    <main className='about-main'>
        <h1 className='about-h1'>About Get Digital</h1>
        <section className='about-section-1'>
            <h2>Who are we?</h2>
            <p>Get Digital is a Web and Application Design business. We are devoted to giving you the quick service whilst giving you a designed Website or Application to your satisfaction. We guarantee your satisfaction.</p>
        </section>
        <section className='about-section-2'>
            <h2>What we do?</h2>
            <p>At Get Digital Web Design, we are passionate about creating custom, user-friendly designs that are meticulously tailored to reflect your unique brand identity. Our team understands that in today's digital landscape, a compelling online presence is crucial for success. That's why we dedicate ourselves to crafting visually stunning websites that not only captivate your audience but also effectively communicate your brand's message.</p>
            <p>Our expertise doesn't stop at design. We recognize the importance of being discovered in the vast world of the internet, which is why we specialize in SEO (Search Engine Optimization). We believe that a beautiful website is only beneficial if people can find it. By utilizing the latest SEO techniques and strategies, we help boost your website's visibility on search engines, driving organic traffic and enhancing your online reach.
            </p>
            <p>In addition to our design and maintenance services, we offer reliable Web Hosting solutions. We know that a strong online presence requires robust infrastructure. Our hosting services ensure that your site is not only visible on the internet but also operates seamlessly. We prioritize speed, security, and uptime, ensuring that your website is always accessible to your audience.</p>
            <p>But our commitment doesn't end with launching your site. We provide comprehensive Site Maintenance services to ensure that your website remains updated, secure, and running smoothly. We understand that technology is ever-evolving, and we take pride in keeping your site aligned with the latest trends and security protocols. By entrusting us with your website's maintenance, you can focus on what you do best while we handle the technical complexities.
            </p>
            <p>At Get Digital Web Design, our ultimate goal is to empower your brand in the digital space. We believe in building lasting partnerships with our clients, understanding that your success is our success. With our comprehensive suite of services, we are here to guide you through every step of your online journey.</p>
            <p>Let us help you transform your vision into reality and create a digital experience that truly resonates with your audience. Together, we can take your brand to new heights in the digital world.</p>
        </section>
        <section className='about-section-3'>
            <h2>Not sure?</h2>
            <p>Discover what we offer with a more detailed description with our <a href='/services'>Services</a></p>
        </section>
        <section className='about-section-4'>
            <h2>Read to Get Digital?</h2>
            <p>You can send a query on the <a href='/contact'>Contact Us</a> page</p>
            <p>Or you can email us at <a href='mailto:admin@getdigital.co.za'>admin@getdigital.co.za</a></p>
        </section>
    </main>
  )
}
