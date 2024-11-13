// PortfolioPage.jsx
import React from 'react';

const projects = [
    {
        title: "Project 1",
        description: "A full-stack web app built with the MERN stack.",
        link: "https://project1.example.com"
    },
    {
        title: "Project 2",
        description: "A mobile app developed using React Native.",
        link: "https://project2.example.com"
    },
    {
        title: "Project 3",
        description: "SEO optimization for a local business website.",
        link: "https://project3.example.com"
    },
];

const PortfolioPage = () => {
    return (
        <div className="py-8">
            <div className="max-w-screen-lg mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Our Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                            <p className="text-lg mb-4">{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary underline">View Live Project</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;
