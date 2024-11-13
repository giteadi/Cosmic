import React, { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        projectType: '',
        projectDescription: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Here you would typically send this data to a backend or database
    };

    return (
        <div className="py-8 bg-gray-50 text-gray-800">
            <div className="max-w-screen-md mx-auto">
                <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900">Get a Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-lg text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-lg text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-lg text-gray-700">Contact Number</label>
                        <input
                            type="tel"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-lg text-gray-700">Project Type</label>
                        <select
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700"
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
                        <label className="block text-lg text-gray-700">Brief Project Description</label>
                        <textarea
                            name="projectDescription"
                            value={formData.projectDescription}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700"
                            required
                        />
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-blue-600 py-2 px-6 rounded-lg text-white hover:bg-blue-700">
                            Submit Request
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
