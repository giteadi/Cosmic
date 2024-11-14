import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';  // Import axios for API requests
import { toast } from 'react-hot-toast';  // Import toast for notifications
import bg from "../assets/blue-black-sky-with-stars.jpg";

// Background container with responsive padding
const BackgroundContainer = styled.div`
  background-image: url(${bg});  // Use the imported bg variable
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem; // Default padding
  @media (max-width: 768px) {
    padding: 1rem; // Reduce padding on smaller screens
  }
`;

// Form container with backdrop blur and responsive width
const FormContainer = styled.div`
  background: rgba(0, 0, 0, 0.7); // Slightly transparent dark overlay
  backdrop-filter: blur(10px);
  padding: 1.5rem; // Reduced padding for a smaller form
  border-radius: 10px;
  max-width: 500px; // Slightly smaller max-width for the form
  width: 100%;
  margin-top: 50px; // Add top margin to avoid touching navbar
  @media (max-width: 768px) {
    padding: 1rem; // Further reduce padding for smaller screens
  }
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    projectType: '',
    projectDescription: ''
  });

  const [loading, setLoading] = useState(false);  // For loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);  // Set loading to true when the request starts

    try {
      const response = await axios.post('http://localhost:4000/api/v1/submit', formData);
      console.log('Form Submitted:', response.data);

      // Show success toast
      toast.success('Form submitted successfully!');
    } catch (err) {
      console.error('Error submitting form:', err);

      // Show error toast
      toast.error('Failed to submit the form. Please try again later.');
    } finally {
      setLoading(false);  // Set loading to false when the request finishes
    }
  };

  return (
    <BackgroundContainer>
      <FormContainer>
        <h2 className="text-3xl font-semibold mb-6 text-center text-white md:mt-10">Get a Quote</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-500 text-white"
              required
            />
          </div>
          <div>
            <label className="block text-lg text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-500 text-white"
              required
            />
          </div>
          <div>
            <label className="block text-lg text-gray-300">Contact Number</label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-500 text-white"
              required
            />
          </div>
          <div>
            <label className="block text-lg text-gray-300">Project Type</label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-500 text-white"
              required
            >
              <option value="">Select Project Type</option>
              <option value="Web Development">Web Development</option>
              <option value="App Development">App Development</option>
              <option value="SEO">SEO</option>
              <option value="Brand Development">Brand Development</option>
            </select>
          </div>
          <div>
            <label className="block text-lg text-gray-300">Brief Project Description</label>
            <textarea
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-500 text-white"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 py-2 px-6 rounded-lg text-white hover:bg-blue-700"
              disabled={loading}  // Disable button when loading
            >
              {loading ? 'Submitting...' : 'Submit Request'}
            </button>
          </div>
        </form>
      </FormContainer>
    </BackgroundContainer>
  );
};

export default ContactPage;
