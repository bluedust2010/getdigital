import React from 'react';
import './TermsAndConditions.css';

export default function TermsAndConditions() {
  return (
    <main className="terms-main">
      <h1 className="terms-title">Terms and Conditions</h1>
      <section className="terms-section">
        <h2>1. Introduction</h2>
        <p>
          Welcome to Get Digital. By engaging our services, you agree to the following terms and conditions. Please read them carefully.
        </p>
      </section>

      <section className="terms-section">
        <h2>2. Services</h2>
        <p>
          We offer website creation services, which include but are not limited to:
        </p>
        <ul>
          <li>Basic websites</li>
          <li>E-commerce platforms</li>
          <li>Custom web solutions</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>3. Project Scope</h2>
        <p>
          Each project will have a defined scope, which includes the number of pages, features, and functionalities. Any additional work outside the agreed scope will be quoted separately.
        </p>
      </section>

      <section className="terms-section">
        <h2>4. Pricing and Payment</h2>
        <p>
          - A 50% deposit is required before any work begins. This deposit is non-refundable.
        </p>
        <p>
          - The remaining balance is due upon completion of the project.
        </p>
        <p>
          - Payment plans or installments may be discussed and agreed upon in writing.
        </p>
      </section>

      <section className="terms-section">
        <h2>5. Revisions and Feedback</h2>
        <p>
          - Clients are entitled to a set number of revisions, typically two, after which additional changes will incur extra charges.
        </p>
        <p>
          - Feedback must be provided promptly to ensure the project stays on schedule.
        </p>
      </section>

      <section className="terms-section">
        <h2>6. Timelines and Deadlines</h2>
        <p>
          - Project timelines will be agreed upon before work begins.
        </p>
        <p>
          - Delays caused by the client, such as late feedback or content delivery, may result in adjusted deadlines.
        </p>
      </section>

      <section className="terms-section">
        <h2>7. Content and Ownership</h2>
        <p>
          - Clients are responsible for providing accurate content and images for their website.
        </p>
        <p>
          - Once the final payment is made, the website content becomes the client's property. However, Get Digital retains the right to display the work in its portfolio.
        </p>
      </section>

      <section className="terms-section">
        <h2>8. Cancellation Policy</h2>
        <p>
          - Clients may cancel the project at any time. However, the 50% deposit will not be refunded.
        </p>
        <p>
          - If a project is canceled after work has begun, additional charges for work completed beyond the initial deposit may apply.
        </p>
      </section>

      <section className="terms-section">
        <h2>9. Hosting and Maintenance</h2>
        <p>
          - Hosting and maintenance services are available at additional costs.
        </p>
        <p>
          - Clients who choose not to use our hosting services are responsible for their hosting arrangements.
        </p>
      </section>

      <section className="terms-section">
        <h2>10. Limitation of Liability</h2>
        <p>
          - Get Digital is not liable for any damages resulting from website downtime, data loss, or cyber-attacks.
        </p>
        <p>
          - It is the client’s responsibility to maintain regular backups of their website.
        </p>
      </section>

      <section className="terms-section">
        <h2>11. Governing Law</h2>
        <p>
          These terms and conditions are governed by the laws of [Your Country/State].
        </p>
      </section>

      <section className="terms-section">
        <h2>12. Changes to Terms</h2>
        <p>
          Get Digital reserves the right to update these terms and conditions at any time. Clients will be notified of any significant changes.
        </p>
      </section>

      <section className="terms-section">
        <h2>13. Contact Information</h2>
        <p>
          For any questions or concerns regarding these terms, please contact us at:
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:admin@getdigital.co.za">admin@getdigital.co.za</a>
        </p>
        <p>
          <strong>Phone:</strong> +27 76 489 5654
        </p>
      </section>
    </main>
  );
}
