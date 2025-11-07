import React from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    // Adds padding and the pink background
    <section id="contact" className="py-20 bg-brand-pink">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-brand-green-dark">
          Get In Touch
        </h2>
        
        {/* This form includes the inputs that were missing */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-pink-dark focus:ring-brand-pink-dark"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-pink-dark focus:ring-brand-pink-dark"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-pink-dark focus:ring-brand-pink-dark"
            ></textarea>
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md border border-transparent bg-brand-pink-dark px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-brand-pink-dark focus:ring-offset-2"
            >
              Send Message
              <Send className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;