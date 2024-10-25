import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen  flex flex-col justify-center items-center text-white px-4">
      <div className="max-w-2xl w-full">
        <h2 className="text-center text-4xl font-bold mb-4">Get in touch</h2>
        <p className="text-center text-lg mb-8">
          I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-1/2 p-3 bg-slate-700 text-white border border-[#3e3e64] rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-1/2 p-3 bg-slate-700 text-white border border-[#3e3e64] rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 h-40 bg-slate-700 text-white border border-[#3e3e64] rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your message"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-600 py-3 rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
