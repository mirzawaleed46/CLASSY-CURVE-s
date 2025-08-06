'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const inquiryTypes = [
    'Product Inquiry',
    'Partnership Question',
    'Technical Support',
    'Advertising Opportunity',
    'Style Consultation',
    'General Question'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.message.length > 500) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          inquiryType: formData.inquiryType
        })
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          inquiryType: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
          <i className="ri-check-line text-green-600 text-2xl"></i>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600 mb-4">
          Thank you for reaching out! We've received your message and will get back to you within 24 hours.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="px-6 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
        <p className="text-gray-600">
          Fill out the form below and we'll get back to you as soon as possible. All fields are required.
        </p>
      </div>

      <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors text-sm"
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors text-sm"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
            Inquiry Type
          </label>
          <div className="relative">
            <select
              id="inquiryType"
              name="inquiryType"
              required
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors text-sm appearance-none cursor-pointer"
            >
              <option value="">Select inquiry type</option>
              {inquiryTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <i className="ri-arrow-down-s-line text-gray-400"></i>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors text-sm"
            placeholder="Brief description of your inquiry"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            maxLength={500}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors text-sm resize-none"
            placeholder="Please provide details about your inquiry..."
          ></textarea>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-500">Maximum 500 characters</span>
            <span className={`text-sm ${formData.message.length > 500 ? 'text-red-500' : 'text-gray-500'}`}>
              {formData.message.length}/500
            </span>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || formData.message.length > 500}
          className="w-full px-8 py-4 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors whitespace-nowrap cursor-pointer"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <i className="ri-loader-4-line animate-spin mr-2 w-5 h-5 flex items-center justify-center"></i>
              Sending Message...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              <i className="ri-send-plane-line mr-2 w-5 h-5 flex items-center justify-center"></i>
              Send Message
            </span>
          )}
        </button>
      </form>

      <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start space-x-3">
          <div className="w-6 h-6 flex items-center justify-center">
            <i className="ri-information-line text-blue-600"></i>
          </div>
          <div>
            <h4 className="font-medium text-blue-900 mb-1">Response Time</h4>
            <p className="text-sm text-blue-700">
              We typically respond to all inquiries within 24 hours. For urgent matters, 
              please contact us directly via WhatsApp or phone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}