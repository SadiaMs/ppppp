import React from 'react';

const Page = () => {
  return (
    <div>
      <section className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="full-name">Full Name</label>
            <input
              type="text"
              id="full-name"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email-address">Email Address</label>
            <input
              type="email"
              id="email-address"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone-number">Phone Number</label>
            <input
              type="tel"
              id="phone-number"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Message"
              rows={5}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Page;
