import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      
      <div className="contact-info">
        <p>Get in touch with the CDI Project team!</p>
        
        <div className="contact-methods">
          <div className="contact-method">
            <h3>Email</h3>
            <p>contact@cdiproject.com</p>
          </div>
          
          <div className="contact-method">
            <h3>GitHub</h3>
            <p>github.com/cdi-project</p>
          </div>
          
          <div className="contact-method">
            <h3>Support</h3>
            <p>For technical support, please create an issue on GitHub.</p>
          </div>
        </div>
      </div>
      
      <div className="contact-form">
        <h2>Send us a message</h2>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Your email" />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea rows="5" placeholder="Your message"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;