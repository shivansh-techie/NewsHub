import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 mt-6">
      <h1 className="text-2xl font-bold mb-4"><u>Contact Us</u></h1>

      <p className="mb-4">
        We value your feedback, suggestions, and inquiries. Whether you're a reader with a question, a partner looking to collaborate, or just someone who wants to share their thoughts — we’re always eager to hear from you.
      </p>

      <p className="mb-4">
        To get in touch with us, please email us at:  
        <a href="mailto:shivanshpradhan098@gmail.com" className="text-blue-600 underline ml-1">
          shivanshpradhan098@gmail.com
        </a>. We strive to respond to all messages within 24 – 48 hours. Please include as much detail as possible so we can assist you effectively.
      </p>

      <p className="mb-4">
        For media inquiries, advertising opportunities, or any technical issues related to the site, kindly mention the specific topic in your subject line. This helps us route your message to the appropriate team.
      </p>

      <p>
        Thank you for being a part of the <b>NEWSHUB</b> community. Your input helps us grow and serve you better every day.
      </p>
    </div>
  );
};

export default Contact;
