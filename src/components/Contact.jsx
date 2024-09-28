import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
      <div className="max-w-lg mx-auto">
        <p className="text-lg mb-4">Location: Durga Pandal, Biswas</p>
        <p className="text-lg mb-8">Email: contact@durgapuja2024.com</p>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg" />
          <textarea placeholder="Message" className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
