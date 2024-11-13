import React from 'react';
import { FaRegNewspaper, FaUserAlt, FaCalendarAlt, FaCommentDots } from 'react-icons/fa';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Our Latest Blog Posts</h1>

        {/* Blog Post 1 */}
        <div className="bg-transparent border-2 border-gray-300 rounded-lg overflow-hidden mb-10 transition-all focus:ring-4 focus:ring-gradient-to-r focus:ring-from-pink-500 focus:ring-to-purple-500 focus:ring-opacity-50 focus:ring-offset-2">
          <div className="flex items-center justify-between bg-transparent p-6">
            <div className="text-white">
              <h2 className="text-3xl font-semibold mb-2">Exploring the Future of Web Development</h2>
              <p className="text-lg">Learn about the latest trends in web development.</p>
            </div>
            <FaRegNewspaper className="text-white text-6xl hover:scale-110 transform transition-all duration-300 ease-in-out" />
          </div>
          <div className="p-6">
            <div className="flex items-center text-gray-500 mb-4">
              <FaUserAlt className="mr-2 text-xl hover:scale-110 transform transition-all duration-300 ease-in-out" />
              <span className="mr-6">By Admin</span>
              <FaCalendarAlt className="mr-2 text-xl hover:scale-110 transform transition-all duration-300 ease-in-out" />
              <span className="mr-6">October 25, 2024</span>
              <FaCommentDots className="mr-2 text-xl hover:scale-110 transform transition-all duration-300 ease-in-out" />
              <span>12 Comments</span>
            </div>
            <p className="text-lg text-gray-300 mb-6">
              Web development is evolving rapidly with new tools and technologies emerging every year.
              In this post, we explore the future of web development, including trends like AI integration,
              serverless architecture, and the rise of JAMstack.
            </p>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="bg-transparent border-2 border-gray-300 rounded-lg overflow-hidden mb-10 transition-all focus:ring-4 focus:ring-gradient-to-r focus:ring-from-pink-500 focus:ring-to-purple-500 focus:ring-opacity-50 focus:ring-offset-2">
          <div className="flex items-center justify-between bg-transparent p-6">
            <div className="text-white">
              <h2 className="text-3xl font-semibold mb-2">Understanding the Power of SEO</h2>
              <p className="text-lg">A guide to improving your website's search engine ranking.</p>
            </div>
            <FaRegNewspaper className="text-white text-6xl hover:scale-110 transform transition-all duration-300 ease-in-out" />
          </div>
          <div className="p-6">
            <div className="flex items-center text-gray-500 mb-4">
              <FaUserAlt className="mr-2 text-xl hover:scale-110 transform transition-all duration-300 ease-in-out" />
              <span className="mr-6">By Admin</span>
              <FaCalendarAlt className="mr-2 text-xl hover:scale-110 transform transition-all duration-300 ease-in-out" />
              <span className="mr-6">October 22, 2024</span>
              <FaCommentDots className="mr-2 text-xl hover:scale-110 transform transition-all duration-300 ease-in-out" />
              <span>5 Comments</span>
            </div>
            <p className="text-lg text-gray-300 mb-6">
              SEO (Search Engine Optimization) is critical for driving organic traffic to your website.
              This post explains the essential techniques to optimize your website for search engines
              and increase your chances of ranking on the first page of Google.
            </p>
          </div>
        </div>

        {/* Blog Post 3 */}
        <div className="bg-transparent border-2 border-gray-300 rounded-lg overflow-hidden mb-10 transition-all focus:ring-4 focus:ring-gradient-to-r focus:ring-from-pink-500 focus:ring-to-purple-500 focus:ring-opacity-50 focus:ring-offset-2">
          <div className="flex items-center justify-between bg-transparent p-6">
            <div className="text-white">
              <h2 className="text-3xl font-semibold mb-2">The Importance of UI/UX Design</h2>
              <p className="text-lg">How design impacts user engagement and conversion.</p>
            </div>
            <FaRegNewspaper className="text-white text-6xl hover:scale-110 transform transition-all duration-300 ease-in-out" />
          </div>
          <div className="p-6">
            <div className="flex items-center text-gray-500 mb-4">
              <FaUserAlt className="mr-2 text-xl hover:scale-110 transform transition-all duration-300 ease-in-out" />
              <span className="mr-6">By Admin</span>
              <FaCalendarAlt className="mr-2 text-xl hover:scale-110 transform transition-all duration-300 ease-in-out" />
              <span className="mr-6">October 18, 2024</span>
              <FaCommentDots className="mr-2 text-xl hover:scale-110 transform transition-all duration-300 ease-in-out" />
              <span>8 Comments</span>
            </div>
            <p className="text-lg text-gray-300 mb-6">
              User Interface and User Experience design are crucial for creating products that users love
              to interact with. This post discusses why UI/UX design is important and how it can improve user
              satisfaction, engagement, and conversion rates.
            </p>
          </div>
        </div>

        {/* Android Post */}
        <div className="bg-transparent border-2 border-gray-300 rounded-lg overflow-hidden mb-10 transition-all focus:ring-4 focus:ring-gradient-to-r focus:ring-from-pink-500 focus:ring-to-purple-500 focus:ring-opacity-50 focus:ring-offset-2">
          <div className="flex items-center justify-between bg-transparent p-6">
            <div className="text-white">
              <h2 className="text-3xl font-semibold mb-2">The Future of Android App Development</h2>
              <p className="text-lg">Exploring advancements in Android app development and trends.</p>
            </div>
            <FaRegNewspaper className="text-white text-6xl hover:scale-110 transform transition-all duration-300 ease-in-out" />
          </div>
          <div className="p-6">
            <div className="flex items-center text-gray-500 mb-4">
              <FaUserAlt className="mr-2 text-xl hover:scale-110 transform transition-all duration-300 ease-in-out" />
              <span className="mr-6">By Admin</span>
              <FaCalendarAlt className="mr-2 text-xl hover:scale-110 transform transition-all duration-300 ease-in-out" />
              <span className="mr-6">October 28, 2024</span>
              <FaCommentDots className="mr-2 text-xl hover:scale-110 transform transition-all duration-300 ease-in-out" />
              <span>15 Comments</span>
            </div>
            <p className="text-lg text-gray-300 mb-6">
              Android development is evolving with the introduction of Jetpack Compose, Kotlin Multiplatform, and more.
              In this post, we dive into the latest trends shaping the Android development ecosystem and what developers
              should focus on to stay ahead.
            </p>
          </div>
        </div>

        {/* iOS Post */}
        <div className="bg-transparent border-2 border-gray-300 rounded-lg overflow-hidden mb-10 transition-all focus:ring-4 focus:ring-gradient-to-r focus:ring-from-pink-500 focus:ring-to-purple-500 focus:ring-opacity-50 focus:ring-offset-2">
          <div className="flex items-center justify-between bg-transparent p-6">
            <div className="text-white">
              <h2 className="text-3xl font-semibold mb-2">What’s New in iOS Development</h2>
              <p className="text-lg">A look at the latest tools and features in iOS development.</p>
            </div>
            <FaRegNewspaper className="text-white text-6xl hover:scale-110 transform transition-all duration-300 ease-in-out" />
          </div>
          <div className="p-6">
            <div className="flex items-center text-gray-500 mb-4">
              <FaUserAlt className="mr-2 text-xl hover:scale-110 transform transition-all duration-300 ease-in-out" />
              <span className="mr-6">By Admin</span>
              <FaCalendarAlt className="mr-2 text-xl hover:scale-110 transform transition-all duration-300 ease-in-out" />
              <span className="mr-6">October 30, 2024</span>
              <FaCommentDots className="mr-2 text-xl hover:scale-110 transform transition-all duration-300 ease-in-out" />
              <span>9 Comments</span>
            </div>
            <p className="text-lg text-gray-300 mb-6">
              With the release of SwiftUI, Combine, and other advanced features, iOS development is growing rapidly.
              This article covers what’s new in the world of iOS and how developers can make the most of the latest tools.
            </p>
          </div>
        </div>

        {/* Desktop Post */}
        <div className="bg-transparent border-2 border-gray-300 rounded-lg overflow-hidden mb-10 transition-all focus:ring-4 focus:ring-gradient-to-r focus:ring-from-pink-500 focus:ring-to-purple-500 focus:ring-opacity-50 focus:ring-offset-2">
          <div className="flex items-center justify-between bg-transparent p-6">
            <div className="text-white">
              <h2 className="text-3xl font-semibold mb-2">Desktop App Development in 2024</h2>
              <p className="text-lg">Insights into the future of desktop application development.</p>
            </div>
            <FaRegNewspaper className="text-white text-6xl hover:scale-110 transform transition-all duration-300 ease-in-out" />
          </div>
          <div className="p-6">
            <div className="flex items-center text-gray-500 mb-4">
              <FaUserAlt className="mr-2 text-xl hover:scale-110 transform transition-all duration-300 ease-in-out" />
              <span className="mr-6">By Admin</span>
              <FaCalendarAlt className="mr-2 text-xl hover:scale-110 transform transition-all duration-300 ease-in-out" />
              <span className="mr-6">November 1, 2024</span>
              <FaCommentDots className="mr-2 text-xl hover:scale-110 transform transition-all duration-300 ease-in-out" />
              <span>7 Comments</span>
            </div>
            <p className="text-lg text-gray-300 mb-6">
              As desktop apps evolve, developers are exploring new frameworks and tools like Electron, Flutter, and
              more. This post delves into the changes happening in desktop development and how it’s making cross-platform
              development more accessible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
