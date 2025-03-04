import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const formData = {
    name: (e.target as any).name.value,
    phone: (e.target as any).phone.value,
    email: (e.target as any).email.value,
    message: (e.target as any).message.value,
  };

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwlTkHSUNGgb4v3xRZweJs5KRU5o9sSau-HYh8hARpxYyyC7aH91ibLgZ7TZGwIhRHMYA/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    if (result.status === 'success') {
      alert('Form submitted successfully!');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('Failed to submit the form. Please try again.');
  }
};


  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Get in Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-red-600 flex-shrink-0" />
                  <p>SVA Public School, Shiv Colony, Tijara Phatak, Alwar</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-red-600" />
                  <div>
                    <p>Helpline 1: <a href="tel:7073331995" className="text-red-600">7073331995</a></p>
                    <p>Helpline 2: <a href="tel:7073087068" className="text-red-600">7073087068</a></p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden h-64">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.8485961736694!2d76.6344!3d27.1789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5d6d7067c67%3A0x6f3b89ca17e15f96!2sAlwar%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1635835636547!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
