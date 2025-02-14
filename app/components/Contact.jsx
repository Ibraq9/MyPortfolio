"use client";

import { useState } from 'react';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function ContactSection() {
  const [status, setStatus] = useState({ message: '', isError: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: '', isError: false });

    const formData = {
      name: e.target.name.value.trim(),
      email: e.target.email.value.trim(),
      message: e.target.message.value.trim()
    };

    try {
      const response = await fetch('https://formspree.io/f/mrbeaavq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ message: 'Message sent successfully!', isError: false });
        e.target.reset();
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      setStatus({ message: error.message || 'An error occurred. Please try again.', isError: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-lg text-gray-300">
            Have a question or want to work together? Reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {status.message && (
                <p className={`text-center mt-4 text-sm ${status.isError ? 'text-red-400' : 'text-green-400'
                  }`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>

          {/* Contact Info & Socials */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-xl p-8 shadow-2xl space-y-6">
              <div className="flex items-start space-x-4">
                <a className='flex gap-5' target='_blank' href='https://www.google.com/maps/place/Minya,+Qism+Minya,+Minya,+Minya+Governorate,+Egypt/@28.095217,30.7095215,13z/data=!3m1!4b1!4m6!3m5!1s0x145b2501ca8ed45f:0x1682970743a18080!8m2!3d28.0870967!4d30.7618397!16s%2Fm%2F02r6ww5?entry=ttu&g_ep=EgoyMDI1MDIxMS4wIKXMDSoASAFQAw%3D%3D'>
                  <MapPinIcon className="h-6 w-6 text-indigo-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-white">Location</h3>
                    <p className="text-gray-400">Minia, Egypt</p>
                  </div>
                </a>

              </div>

              <div className="flex items-start space-x-4">
                <EnvelopeIcon className="h-6 w-6 text-indigo-400 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <a
                    href="mailto:ebrahimqa99@gmail.com"
                    className="text-indigo-400 hover:text-indigo-300"
                  >
                    ebrahimqa99@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <PhoneIcon className="h-6 w-6 text-indigo-400 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-white">Phone</h3>
                  <a
                    href="tel:+2001069068234"
                    className="text-indigo-400 hover:text-indigo-300"
                  >
                    +20 01069068234
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800 rounded-xl p-8 shadow-2xl">
              <h3 className="text-lg font-medium text-white mb-6">Find me on</h3>
              <div className="flex justify-center space-x-8">
                <a href="https://github.com/Ibraq9" target='_blank' className="social-icon" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>


                <a href="https://www.facebook.com/profile.php?id=100074378787389" target='_blank' className="social-icon" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                  </svg>
                </a>


                <a href="https://www.linkedin.com/in/ibraheem-qassem-949639265/" target='_blank' className="social-icon" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}