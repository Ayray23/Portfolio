import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = ({darkMode}) => {
  const form = useRef();
  const [responseMessage, setResponseMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAIL_USER_ID
    )
      .then(() => {
        setResponseMessage('Message sent successfully!');
      }, (error) => {
        setResponseMessage('Oops! Something went wrong.');
        console.error("Error sending email:", error);
      });
  };

  return (
    <section className={`${darkMode && "dark"}`}>
      
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-black p-4">
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-center mb-6">Contact Me</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {/* <input
                type="tel"
                name="from_phone"
                placeholder="Your Phone Number"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              /> */}
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-500">{responseMessage}</p>
          </div>
        </div>
   </section>
  );
};

export default ContactForm;









// 