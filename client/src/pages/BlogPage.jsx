import React, { useState } from 'react';
import { FaRegNewspaper, FaUserAlt, FaCalendarAlt, FaCommentDots } from 'react-icons/fa';

const BlogPage = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const handleToggleContent = () => setShowFullContent(!showFullContent);

  // Blog Posts Array
  const blogPosts = [
    {
      id: 1,
      title: "The Importance of Custom Software Development for Growing Businesses",
      excerpt: "In today's rapidly changing digital landscape, having a custom software solution is more than a luxury—it's essential for businesses aiming for long-term growth.",
      content: `1. Enhanced Efficiency and Productivity\n
        Custom software is designed with your workflows in mind. With features and integrations aligned to your processes, it allows employees to work more efficiently and productively. At Cosmic Coder 24, we assess your needs to ensure your solution is fast, easy-to-use, and fully optimized for your business.\n\n
        2. Scalability for Future Growth\n
        As your business grows, so will its software needs. Custom solutions are built to scale, accommodating increasing users, data, and functionality without sacrificing performance. Off-the-shelf products may not keep up, while a custom approach ensures you’re ready for growth.\n\n
        3. Higher Security and Data Protection\n
        Security is a top priority for businesses. Custom software often incorporates stronger data security protocols tailored to industry standards, whereas generic products can be more vulnerable to breaches. Cosmic Coder 24 prioritizes cybersecurity to help safeguard your data.\n\n
        4. Competitive Advantage\n
        Finally, custom software can give your business a competitive edge. By streamlining operations and providing unique, user-friendly features, you stand out from competitors relying on one-size-fits-all solutions. In an era where differentiation is key, custom software can be a game-changer.\n\n
        Conclusion: Custom software development is not just an investment; it’s a step towards a more productive, secure, and future-proof business. Cosmic Coder 24 is committed to providing solutions that are as unique as your business.`,
      author: "Admin",
      date: "October 25, 2024",
      comments: 12
    },
    {
      id: 2,
      title: "How SEO and Digital Marketing Can Drive Success for New Businesses",
      excerpt: "SEO and digital marketing can transform a fledgling business by boosting its online visibility and engagement with potential customers. Here’s how.",
      content: `1. Enhanced Visibility\n
        SEO, or search engine optimization, ensures your business ranks well on search engines. This increases the likelihood that potential customers find you first when searching for services you provide. At Cosmic Coder 24, we focus on SEO strategies that align with your business goals.\n\n
        2. Targeted Engagement\n
        Unlike traditional marketing, digital marketing allows you to target specific demographics and interests. This helps build a loyal customer base and maximizes ROI by focusing on audiences most likely to convert.\n\n
        3. Builds Trust and Credibility\n
        Appearing on the first page of search results establishes authority and trust. When clients see your business as a leading result, it boosts your credibility and attracts more organic leads. Digital marketing further strengthens your brand's voice and positioning.\n\n
        4. Long-term Cost Efficiency\n
        SEO and digital marketing are long-term strategies with ongoing returns. The results compound over time, bringing continuous traffic without the hefty costs of traditional advertising. Cosmic Coder 24 is committed to driving sustainable growth for our clients through these strategies.\n\n
        Conclusion: Digital marketing and SEO are critical tools for business success in a competitive market. Cosmic Coder 24 is here to help new businesses harness the full power of digital engagement, driving meaningful results and long-term growth.`,
      author: "Admin",
      date: "October 26, 2024",
      comments: 8
    },
    {
      id: 3,
      title: "Why Choose Desktop Applications? Exploring the Power of Custom Desktop Solutions",
      excerpt: "With the shift towards cloud-based and mobile applications, it’s easy to overlook the advantages of desktop applications. However, for many industries, desktop apps still provide unparalleled benefits.",
      content: `1. Enhanced Security\n
        Desktop apps can offer higher levels of data security, as they operate independently of third-party platforms. Sensitive industries, such as finance and healthcare, often rely on desktop apps for this very reason.\n\n
        2. Offline Accessibility\n
        One major advantage of desktop applications is offline functionality, making them suitable for industries that require uninterrupted access, even without internet. This makes desktop apps reliable and ideal for complex, data-heavy operations.\n\n
        3. Higher Performance and Customization\n
        Desktop apps are capable of handling complex tasks and are often faster than web-based applications. They are highly customizable and can be tailored to meet the specific needs of the organization.\n\n
        Conclusion: Desktop applications are far from obsolete—they’re still a powerful solution for many businesses. Cosmic Coder 24 specializes in developing high-performing, secure desktop applications designed to elevate your operations and meet industry demands.`,
      author: "Admin",
      date: "October 27, 2024",
      comments: 15
    },
    {
      id: 4,
      title: "24/7 Commitment: Why Around-the-Clock Project Management Matters in Today’s Digital World",
      excerpt: "For businesses, digital projects need to be completed with precision and timeliness. At Cosmic Coder 24, our 24-hour commitment means our team is always ready to keep projects moving forward.",
      content: `1. Enhanced Client Communication\n
        With round-the-clock support, clients get regular updates and can reach out whenever needed, keeping everyone aligned on project status. This ensures greater transparency and client satisfaction.\n\n
        2. Faster Issue Resolution\n
        Technical challenges can happen anytime. With a team available 24/7, problems are addressed promptly, minimizing delays and allowing the project to stay on track.\n\n
        3. Improved Project Efficiency\n
        A 24/7 approach helps speed up timelines and increase project efficiency, ensuring our clients meet deadlines without compromising on quality.\n\n
        Conclusion: For Cosmic Coder 24, commitment to our clients’ success means always being there to support their needs. Our 24/7 approach ensures our clients get the reliability and speed they deserve.`,
      author: "Admin",
      date: "October 28, 2024",
      comments: 10
    },
    {
      id: 5,
      title: "Top Web Development Trends for 2024: How to Stay Ahead with Cosmic Coder 24",
      excerpt: "In 2024, staying on top of web development trends is crucial to remain competitive. Here are the trends we’re most excited about at Cosmic Coder 24.",
      content: `1. No-Code and Low-Code Development\n
        These platforms enable faster, more cost-effective website building, perfect for businesses that need a website quickly.\n\n
        2. Progressive Web Apps (PWAs)\n
        PWAs are hybrid apps that work offline and provide a seamless user experience, which enhances engagement and retention rates.\n\n
        3. AI-Driven Personalization\n
        AI is being used to analyze user behavior and deliver customized content, providing a tailored experience for every user.\n\n
        Conclusion: Cosmic Coder 24 is equipped to bring the latest innovations to our clients, ensuring they stay competitive and ahead of trends.`,
      author: "Admin",
      date: "October 29, 2024",
      comments: 20
    },
    {
      id: 6,
      title: "The Role of Technology in Business Transformation: From Small Businesses to Large Enterprises",
      excerpt: "Technology is not just a support function—it’s a strategic driver of business transformation. Here’s how Cosmic Coder 24 supports businesses of all sizes in leveraging technology to fuel their growth.",
      content: `1. Automation for Efficiency\n
        Automation reduces manual tasks, enhances productivity, and cuts operational costs. Cosmic Coder 24 helps clients integrate automation into everyday processes.\n\n
        2. Data-Driven Decision Making\n
        Data analysis allows businesses to make informed decisions. We help clients harness the power of data, using analytics to understand customer needs and optimize performance.\n\n
        3. Scalable Technology Solutions\n
        For businesses ready to expand, scalability is crucial. We design systems that grow alongside our clients, enabling them to scale smoothly and meet new demands.\n\n
        Conclusion: At Cosmic Coder 24, we see technology as a vehicle for growth and transformation. Our solutions are designed to empower clients and ensure they’re ready for whatever comes next.`,
      author: "Admin",
      date: "October 30, 2024",
      comments: 25
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Our Latest Blog Posts</h1>

        {blogPosts.map((post) => (
          <div key={post.id} className="bg-transparent border-2 border-gray-300 rounded-lg overflow-hidden mb-10 transition-all hover:shadow-lg focus:ring-4 focus:ring-gradient-to-r focus:ring-from-pink-500 focus:ring-to-purple-500 focus:ring-opacity-50 focus:ring-offset-2">
            <div className="flex items-center justify-between bg-transparent p-6">
              <div className="text-white">
                <h2 className="text-3xl font-semibold mb-2">{post.title}</h2>
                <p className="text-lg">{post.excerpt}</p>
              </div>
              <FaRegNewspaper className="text-white text-6xl hover:scale-110 transform transition-all duration-300 ease-in-out" />
            </div>
            <div className="p-6">
              <div className="flex items-center text-gray-500 mb-4">
                <FaUserAlt className="mr-2 text-xl hover:scale-110 transform transition-all duration-300 ease-in-out" />
                <span className="mr-6">By {post.author}</span>
                <FaCalendarAlt className="mr-2 text-xl hover:scale-110 transform transition-all duration-300 ease-in-out" />
                <span className="mr-6">{post.date}</span>
                <FaCommentDots className="mr-2 text-xl hover:scale-110 transform transition-all duration-300 ease-in-out" />
                <span>{post.comments} Comments</span>
              </div>
              <p className="text-lg text-gray-300 mb-6">
                {post.content.split("\n")[0]}
              </p>
              {/* Toggle content visibility */}
              {showFullContent && (
                <div>
                  <p className="text-lg text-gray-300 mb-6">
                    {post.content}
                  </p>
                </div>
              )}
              <div className="flex justify-center mt-6">
                <button 
                  className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-2 px-6 rounded-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
                  onClick={handleToggleContent}
                >
                  {showFullContent ? 'Show Less' : 'See More'}
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default BlogPage;
