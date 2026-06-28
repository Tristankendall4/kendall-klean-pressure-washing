'use client';

import { useState } from 'react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Form submission can be connected to a backend service
      // For now, just show success message
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        address: '',
        service: '',
        message: '',
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <input
        type="text"
        name="address"
        placeholder="Service Address"
        value={formData.address}
        onChange={handleChange}
        required
        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
      />

      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        required
        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
      >
        <option value="">Select a Service</option>
        <option value="house-washing">House Washing</option>
        <option value="driveway-cleaning">Driveway Cleaning</option>
        <option value="roof-cleaning">Roof Soft Washing</option>
        <option value="deck-fence">Deck & Fence Cleaning</option>
        <option value="gutter-cleaning">Gutter Cleaning</option>
        <option value="commercial">Commercial Storefront</option>
        <option value="fleet-washing">Fleet Washing</option>
      </select>

      <textarea
        name="message"
        placeholder="Additional Details (optional)"
        value={formData.message}
        onChange={handleChange}
        rows={3}
        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full resize-none"
      />

      <button
        type="submit"
        disabled={loading || submitted}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Submitting...' : submitted ? '✓ Request Sent!' : 'Get Free Quote'}
      </button>
    </form>
  );
}
