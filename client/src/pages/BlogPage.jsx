import React from 'react';
import { FaRegNewspaper, FaUserAlt, FaCalendarAlt, FaCommentDots } from 'react-icons/fa';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Latest Blog Posts</h1>

        {/* Blog Post 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-10">
          <div className="flex items-center justify-between bg-blue-600 p-6">
            <div className="text-white">
              <h2 className="text-3xl font-semibold mb-2">Exploring the Future of Web Development</h2>
              <p className="text-lg">Learn about the latest trends in web development.</p>
            </div>
            <FaRegNewspaper className="text-white text-6xl" />
          </div>
          <div className="p-6">
            <div className="flex items-center text-gray-500 mb-4">
              <FaUserAlt className="mr-2 text-xl" />
              <span className="mr-6">By Admin</span>
              <FaCalendarAlt className="mr-2 text-xl" />
              <span className="mr-6">October 25, 2024</span>
              <FaCommentDots className="mr-2 text-xl" />
              <span>12 Comments</span>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Web development is evolving rapidly with new tools and technologies emerging every year.
              In this post, we explore the future of web development, including trends like AI integration,
              serverless architecture, and the rise of JAMstack.
            </p>
            <a href="/blog/post-1" className="text-blue-600 font-semibold">Read More &rarr;</a>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-10">
          <div className="flex items-center justify-between bg-green-600 p-6">
            <div className="text-white">
              <h2 className="text-3xl font-semibold mb-2">Understanding the Power of SEO</h2>
              <p className="text-lg">A guide to improving your website's search engine ranking.</p>
            </div>
            <FaRegNewspaper className="text-white text-6xl" />
          </div>
          <div className="p-6">
            <div className="flex items-center text-gray-500 mb-4">
              <FaUserAlt className="mr-2 text-xl" />
              <span className="mr-6">By Admin</span>
              <FaCalendarAlt className="mr-2 text-xl" />
              <span className="mr-6">October 22, 2024</span>
              <FaCommentDots className="mr-2 text-xl" />
              <span>5 Comments</span>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              SEO (Search Engine Optimization) is critical for driving organic traffic to your website.
              This post explains the essential techniques to optimize your website for search engines
              and increase your chances of ranking on the first page of Google.
            </p>
            <a href="/blog/post-2" className="text-green-600 font-semibold">Read More &rarr;</a>
          </div>
        </div>

        {/* Blog Post 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-10">
          <div className="flex items-center justify-between bg-red-600 p-6">
            <div className="text-white">
              <h2 className="text-3xl font-semibold mb-2">The Importance of UI/UX Design</h2>
              <p className="text-lg">How design impacts user engagement and conversion.</p>
            </div>
            <FaRegNewspaper className="text-white text-6xl" />
          </div>
          <div className="p-6">
            <div className="flex items-center text-gray-500 mb-4">
              <FaUserAlt className="mr-2 text-xl" />
              <span className="mr-6">By Admin</span>
              <FaCalendarAlt className="mr-2 text-xl" />
              <span className="mr-6">October 18, 2024</span>
              <FaCommentDots className="mr-2 text-xl" />
              <span>8 Comments</span>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              User Interface and User Experience design are crucial for creating products that users love
              to interact with. This post discusses why UI/UX design is important and how it can improve user
              satisfaction, engagement, and conversion rates.
            </p>
            <a href="/blog/post-3" className="text-red-600 font-semibold">Read More &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
