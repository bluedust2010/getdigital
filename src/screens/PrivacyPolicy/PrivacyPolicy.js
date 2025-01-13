import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <main className="privacy-policy-main">
      <h1 className="privacy-policy-title">Privacy Policy</h1>
      <section className="privacy-policy-section">
        <h2 className="privacy-policy-section-title">Information We Collect</h2>
        <p>We collect personal information that you provide directly to us when you contact us to build a website. This includes:</p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Contact details</li>
          <li>Website content and other information necessary to complete the website creation process</li>
        </ul>
      </section>
      <section className="privacy-policy-section">
        <h2 className="privacy-policy-section-title">How We Use Your Information</h2>
        <p>We use the information you provide solely for the purpose of building and maintaining your website. This includes:</p>
        <ul>
          <li>Communicating with you regarding the status of your project</li>
          <li>Customizing your website based on your input</li>
          <li>Responding to inquiries and providing customer support</li>
        </ul>
      </section>
      <section className="privacy-policy-section">
        <h2 className="privacy-policy-section-title">Data Protection</h2>
        <p>We take the protection of your personal information seriously. Your information is stored securely and will only be accessed by our team as needed to perform services for you.</p>
      </section>
      <section className="privacy-policy-section">
        <h2 className="privacy-policy-section-title">Sharing of Information</h2>
        <p>We do not share your personal information with any third parties, except as necessary to complete the website creation and hosting process, or when required by law.</p>
      </section>
      <section className="privacy-policy-section">
        <h2 className="privacy-policy-section-title">Data Retention</h2>
        <p>We retain your data for as long as necessary to provide our services. Once your project is complete, your data will be retained only as long as required for legal, accounting, or operational purposes.</p>
      </section>
      <section className="privacy-policy-section">
        <h2 className="privacy-policy-section-title">Your Rights</h2>
        <p>You have the right to access, update, or request the deletion of your personal information. Please contact us at <a href="mailto:admin@getdigital.co.za">admin@getdigital.co.za</a> if you wish to make any changes to your data.</p>
      </section>
      <section className="privacy-policy-section">
        <h2 className="privacy-policy-section-title">Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. Any changes will be communicated through the appropriate channels.</p>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
