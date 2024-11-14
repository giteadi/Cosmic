import React from 'react';

const projects = [
    {
        title: "BharatRoofers",
        description: "A full-stack web app built with the MERN stack.",
        link: "https://real-estate.doaguru.com/"
    },
    {
        title: "BigBull",
        description: "A full-stack web app built with the MERN stack.",
        link: "https://test.bigbulls.co.in/"
    },
    {
        title: "Hitkarini H.SEC Girls School Jabalpur",
        description: "A full-stack web app built with the MERN stack.",
        link: "https://hitkarinigirlsschool.netlify.app"
    },
    {
        title: "Zaperon",
        description: "A full-stack web app built with the MERN stack for managing business operations.",
        link: "https://zaperon.com/"
    },
    {
        title: "Property Website",
        description: "A full-stack real estate website built using the MERN stack.",
        link: "https://property-website-ashu.netlify.app/"
    },
    {
        title: "Pizza Lover App",
        description: "A fun and interactive pizza ordering app built with the MERN stack.",
        link: "https://pizza-lover-app.netlify.app/"
    }
];

const PortfolioPage = () => {
    return (
        <div 
            className="relative w-full min-h-screen bg-cover bg-center" 
            style={{ backgroundImage: `url(https://res.cloudinary.com/bazeercloud/image/upload/v1731575698/blue-black-sky-with-stars_qqwtho.jpg)` }}
        >
            {/* Overlay to darken the background */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="relative z-10 py-8">
                <div className="max-w-screen-lg mx-auto text-center px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-white">
                        Our Projects
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="p-6 bg-transparent border-4 border-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                            >
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-white">{project.title}</h3>
                                <p className="text-base sm:text-lg md:text-xl mb-4 text-white">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white underline hover:text-pink-500"
                                >
                                    View Live Project
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;
