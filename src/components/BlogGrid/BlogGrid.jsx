import React, { useState, useEffect } from "react";
import styles from "./BlogGrid.module.css";
import { useNavigate } from "react-router-dom";

const BlogGrid = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const navigate = useNavigate();

  const handlePostClick = (post) => {
    setSelectedPost(post);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closePopup = () => {
    setSelectedPost(null);
    document.body.style.overflow = "auto"; // Restore scrolling
  };

  // Cleanup function to ensure scrolling is restored when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const blogPosts = [
    {
      id: 1,
      date: "March 31, 2025",
      readTime: "5 min read",
      title: "7 Great Web Development Languages to Learn this Year",
      excerpt: "From the ubiquity of JavaScript to the safety of Rust, discovering the right language can skyrocket your career potential in 2025.",
      fullContent: `In the rapidly evolving world of technology, choosing the right programming language is crucial. 
      
      1. **JavaScript/TypeScript**: The undisputed king of the web. TypeScript adds type safety, making scalable application development easier.
      2. **Python**: Essential for backend development and AI integration, which is becoming increasingly relevant for web apps.
      3. **Rust**: Known for memory safety and performance, Rust is gaining traction for high-performance web assembly modules.
      4. **Go (Golang)**: Excellent for backend services and microservices architecture due to its concurrency model.
      5. **PHP**: With modern frameworks like Laravel, PHP remains a powerhouse for rapid development.
      6. **Ruby**: Rails continues to be a favorite for startups looking to MVP quickly.
      7. **Swift**: Server-side Swift is an emerging trend for iOS developers branching into backend.`,
      category: "Development",
      author: "Henry Martin"
    },
    {
      id: 2,
      date: "March 25, 2025",
      readTime: "7 min read",
      title: "How to Optimize your Website for Better Performance",
      excerpt: "Speed is currency. Learn advanced techniques like lazy loading, tree-shaking, and CDN usage to keep your users engaged.",
      fullContent: `Performance isn't just about code; it's about user experience and SEO. 
      
      **Key Strategies:**
      - **Image Optimization**: Use WebP formats and proper sizing attributes to reduce payload.
      - **Code Splitting**: Break your JavaScript bundles into smaller chunks so the browser only loads what is necessary for the current page.
      - **Lazy Loading**: Defer offscreen images and components until the user scrolls to them.
      - **CDN Integration**: Serve static assets from locations geographically closer to your users.
      - **Minification**: Ensure all CSS and JS files are minified in production builds to remove unnecessary characters.`,
      category: "Optimization",
      author: "Sarah Jenkins"
    },
    {
      id: 3,
      date: "March 20, 2025",
      readTime: "4 min read",
      title: "8 Tips to Improve your Web Development Skills in 2025",
      excerpt: "Stuck in a rut? Here are actionable habits, from reading open source code to mastering developer tools, that will sharpen your craft.",
      fullContent: `Continuous learning is the hallmark of a great developer.
      
      1. **Read Open Source Code**: Go to GitHub and read popular repositories. Understand how they structure large projects.
      2. **Master the Command Line**: GUI is great, but CLI is faster.
      3. **Learn Testing**: Unit, Integration, and E2E testing are non-negotiable for senior roles.
      4. **Build Projects**: Tutorials are fine, but building a real app solves real problems.
      5. **Focus on Accessibility**: Make the web usable for everyone.
      6. **Understand Design Patterns**: Learn MVC, Singleton, Observer, etc.
      7. **Network**: Join Discord servers and dev communities.
      8. **Teach Others**: Writing blogs (like this one!) solidifies your own knowledge.`,
      category: "Tips & Tricks",
      author: "Henry Martin"
    },
    {
      id: 4,
      date: "March 15, 2025",
      readTime: "6 min read",
      title: "5 Great Web Development Frameworks to Learn in 2025",
      excerpt: "React is huge, but have you tried Svelte? We break down the pros and cons of the modern framework landscape.",
      fullContent: `Frameworks boost productivity, but which one should you choose?
      
      - **Next.js (React)**: The standard for server-side rendering and static site generation. It's React on steroids.
      - **SvelteKit**: Offers a compiler-first approach, resulting in smaller bundle sizes and incredible performance.
      - **Vue.js (Nuxt)**: Known for its gentle learning curve and highly readable syntax.
      - **Angular**: The enterprise choice. Opinionated, robust, and comes with batteries included.
      - **SolidJS**: If you want React syntax but without the Virtual DOM overhead, Solid is the speed king.`,
      category: "Frameworks",
      author: "Tech Team"
    },
    {
      id: 5,
      date: "March 10, 2025",
      readTime: "8 min read",
      title: "A Guide to Becoming a Full-Stack Developer",
      excerpt: "Bridging the gap between frontend beauty and backend logic. A roadmap to mastering databases, APIs, and server management.",
      fullContent: `Full-stack development requires a T-shaped skill set.
      
      **The Frontend:** HTML, CSS, JS, and a framework like React.
      **The Backend:** Node.js, Python, or Go. Understanding REST and GraphQL APIs.
      **The Database:** SQL (PostgreSQL) vs NoSQL (MongoDB). knowing when to use which is key.
      **DevOps:** Basic understanding of Docker, CI/CD pipelines, and cloud providers like AWS or Vercel.
      **Soft Skills:** Communication is the bridge between the stack and the stakeholders.`,
      category: "Career",
      author: "Henry Martin"
    },
    {
      id: 6,
      date: "March 01, 2025",
      readTime: "5 min read",
      title: "How to Build Desktop Apps with HTML, CSS and JavaScript",
      excerpt: "Electron and Tauri are changing the game. Learn how to package your web app as a native executable for Windows and Mac.",
      fullContent: `You don't need C++ to build desktop apps anymore.
      
      **Electron:** Used by VS Code and Slack. It bundles Chromium and Node.js. It's heavy but powerful and established.
      
      **Tauri:** The new challenger. It uses the OS's native webview and Rust for the backend. The result? Tiny installer sizes and massive performance gains.
      
      **The Process:**
      1. Build your React/Vue app.
      2. Configure your main process (backend) to handle OS-level events.
      3. Build and package for specific targets (DMG, EXE, Deb).`,
      category: "Tutorial",
      author: "Guest Writer"
    }
  ];

  const handleShareClick = () => {
    // Restore scrolling before navigation
    document.body.style.overflow = "auto";
    navigate("/Error");
  };

  return (
    <section className={styles.gridSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {blogPosts.map((post) => (
            <article key={post.id} className={styles.blogCard}>
              <div className={styles.cardInner}>
                
                {/* Meta Header */}
                <div className={styles.cardMetaHeader}>
                   <div className={styles.categoryTag}>{post.category}</div>
                   <div className={styles.readTime}><i className="fa-regular fa-clock"></i> {post.readTime}</div>
                </div>

                <h3 className={styles.postTitle}>
                  <span onClick={() => handlePostClick(post)}>{post.title}</span>
                </h3>
                
                <p className={styles.excerpt}>{post.excerpt}</p>
                
                <div className={styles.divider}></div>

                {/* Footer Meta */}
                <div className={styles.cardFooter}>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorAvatar}>
                      {post.author.charAt(0)}
                    </div>
                    <span className={styles.authorName}>{post.author}</span>
                  </div>
                  <div className={styles.date}>{post.date}</div>
                </div>

                <button 
                  className={styles.readMoreBtn}
                  onClick={() => handlePostClick(post)}
                >
                  Read Article <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.loadMoreWrapper}>
          <button className={styles.loadMoreBtn} onClick={()=>navigate("/Error")}>
            Load More Posts
          </button>
        </div>
      </div>

      {/* Elaborated Message Popup */}
      {selectedPost && (
        <div className={styles.popupOverlay} onClick={closePopup}>
          <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closePopup}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            
            <div className={styles.popupHeader}>
              <span className={styles.popupCategory}>{selectedPost.category}</span>
              <h2 className={styles.popupTitle}>{selectedPost.title}</h2>
              <div className={styles.popupMeta}>
                <span><i className="fa-regular fa-calendar"></i> {selectedPost.date}</span>
                <span><i className="fa-regular fa-clock"></i> {selectedPost.readTime}</span>
                <span><i className="fa-regular fa-user"></i> {selectedPost.author}</span>
              </div>
            </div>

            <div className={styles.popupBody}>
              {selectedPost.fullContent.split('\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            
            <div className={styles.popupFooter}>
              <button className={styles.shareBtn} onClick={handleShareClick}>
                Share Article
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default BlogGrid;