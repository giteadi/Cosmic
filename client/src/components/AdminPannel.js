// AdminPanel.jsx
import React from 'react';

const AdminPanel = () => {
    return (
        <div className="py-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white min-h-screen">
            <div className="max-w-screen-lg mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Admin Panel</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
                        <h3 className="text-xl font-semibold mb-4">Manage Services</h3>
                        <p className="text-sm">Update and manage service offerings.</p>
                        <button className="mt-4 px-4 py-2 bg-blue-600 rounded text-white hover:bg-blue-700">Go to Services</button>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
                        <h3 className="text-xl font-semibold mb-4">Manage Projects</h3>
                        <p className="text-sm">Add or update portfolio projects.</p>
                        <button className="mt-4 px-4 py-2 bg-blue-600 rounded text-white hover:bg-blue-700">Go to Projects</button>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
                        <h3 className="text-xl font-semibold mb-4">View Form Submissions</h3>
                        <p className="text-sm">Review and respond to client inquiries.</p>
                        <button className="mt-4 px-4 py-2 bg-blue-600 rounded text-white hover:bg-blue-700">View Submissions</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
