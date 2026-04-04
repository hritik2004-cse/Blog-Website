import blog_pic_1 from "./blog_pic_1.png";
import blog_pic_2 from "./blog_pic_2.png";
import blog_pic_3 from "./blog_pic_3.png";
import blog_pic_4 from "./blog_pic_4.png";
import blog_pic_5 from "./blog_pic_5.png";
import blog_pic_6 from "./blog_pic_6.png";
import blog_pic_7 from "./blog_pic_7.png";
import blog_pic_8 from "./blog_pic_8.png";
import blog_pic_9 from "./blog_pic_9.png";
import blog_pic_10 from "./blog_pic_10.png";
import blog_pic_11 from "./blog_pic_11.png";
import blog_pic_12 from "./blog_pic_12.png";
import blog_pic_13 from "./blog_pic_13.png";
import blog_pic_14 from "./blog_pic_14.png";
import blog_pic_15 from "./blog_pic_15.png";
import blog_pic_16 from "./blog_pic_16.png";
import profile_icon from "./profile_icon.jpg";
import logo from "./logo.svg";
import logo_light from "./blog_light_logo.svg";
import upload_area from "./upload_area.png";

const assets = {
  profile_icon,
  logo,
  logo_light,
  upload_area,
};

const blog_data = [
  {
    id: 1,
    title: "Complete Frontend Developer Roadmap in 2026",
    description:
      "A step-by-step guide to mastering HTML, CSS, JavaScript, and modern frameworks to become a frontend developer.",
    image: blog_pic_1,
    date: Date.now(),
    category: "frontend",
    author: "Hritik Sharma",
    author_img: profile_icon,
  },
  {
    id: 2,
    title: "How to Build Scalable Backend Systems with Node.js",
    description:
      "Learn how to design APIs, manage databases, and structure scalable backend architectures.",
    image: blog_pic_2,
    date: Date.now(),
    category: "backend",
    author: "Hritik Sharma",
    author_img: profile_icon,
  },
  {
    id: 3,
    title: "JavaScript Deep Dive: Closures, Promises, and Async/Await",
    description:
      "Master advanced JavaScript concepts that are essential for real-world web development.",
    image: blog_pic_3,
    date: Date.now(),
    category: "javascript",
    author: "Hritik Sharma",
    author_img: profile_icon,
  },
  {
    id: 4,
    title: "React vs Next.js: Which One Should You Choose?",
    description:
      "A practical comparison between React and Next.js for modern web applications.",
    image: blog_pic_4,
    date: Date.now(),
    category: "react",
    author: "Hritik Sharma",
    author_img: profile_icon,
  },
  {
    id: 5,
    title: "CSS Mastery: Flexbox, Grid, and Responsive Design",
    description:
      "Learn how to create modern responsive layouts using CSS Flexbox and Grid.",
    image: blog_pic_5,
    date: Date.now(),
    category: "css",
    author: "Hritik Sharma",
    author_img: profile_icon,
  },
  {
    id: 6,
    title: "Building Full Stack Apps with MERN Stack",
    description:
      "A complete guide to building full-stack applications using MongoDB, Express, React, and Node.js.",
    image: blog_pic_6,
    date: Date.now(),
    category: "fullstack",
    author: "Hritik Sharma",
    author_img: profile_icon,
  },
  {
    id: 7,
    title: "Top 10 Web Development Tools Every Developer Should Know",
    description:
      "Boost productivity with essential tools like VS Code, Git, Chrome DevTools, and more.",
    image: blog_pic_7,
    date: Date.now(),
    category: "technology",
    author: "Hritik Sharma",
    author_img: profile_icon,
  },
  {
    id: 8,
    title: "Next.js for Beginners: Server-Side Rendering Explained",
    description:
      "Understand SSR, SSG, and how Next.js improves performance and SEO.",
    image: blog_pic_8,
    date: Date.now(),
    category: "nextjs",
    author: "Hritik Sharma",
    author_img: profile_icon,
  },
  {
    id: 9,
    title: "How to Optimize Website Performance Like a Pro",
    description:
      "Techniques to improve loading speed, reduce bundle size, and enhance UX.",
    image: blog_pic_9,
    date: Date.now(),
    category: "performance",
    author: "Hritik Sharma",
    author_img: profile_icon,
  },
  {
    id: 10,
    title: "UI/UX Principles Every Developer Must Understand",
    description:
      "Learn the fundamentals of user experience and interface design for better products.",
    image: blog_pic_10,
    date: Date.now(),
    category: "ui/ux",
    author: "Hritik Sharma",
    author_img: profile_icon,
  },
  {
    id: 11,
    title: "REST APIs vs GraphQL: A Developer’s Guide",
    description:
      "Compare REST and GraphQL and understand when to use each in your projects.",
    image: blog_pic_11,
    date: Date.now(),
    category: "backend",
    author: "Hritik Sharma",
    author_img: profile_icon,
  },
  {
    id: 12,
    title: "State Management in React: Redux vs Context API",
    description:
      "Learn different state management approaches and when to use them.",
    image: blog_pic_12,
    date: Date.now(),
    category: "react",
    author: "Hritik Sharma",
    author_img: profile_icon,
  },
  {
    id: 13,
    title: "Authentication in Web Apps: JWT vs Sessions",
    description:
      "Understand authentication strategies and how to implement them securely.",
    image: blog_pic_13,
    date: Date.now(),
    category: "backend",
    author: "Hritik Sharma",
    author_img: profile_icon,
  },
  {
    id: 14,
    title: "Responsive Design Best Practices for 2026",
    description:
      "Design websites that look perfect on all devices using modern techniques.",
    image: blog_pic_14,
    date: Date.now(),
    category: "frontend",
    author: "Hritik Sharma",
    author_img: profile_icon,
  },
  {
    id: 15,
    title: "Version Control with Git and GitHub for Beginners",
    description:
      "Learn how to track changes, collaborate, and manage code using Git.",
    image: blog_pic_15,
    date: Date.now(),
    category: "technology",
    author: "Hritik Sharma",
    author_img: profile_icon,
  },
  {
    id: 16,
    title: "Deploying Web Apps: From Localhost to Production",
    description:
      "Step-by-step guide to deploying applications using Vercel, Netlify, and cloud services.",
    image: blog_pic_16,
    date: Date.now(),
    category: "web dev",
    author: "Hritik Sharma",
    author_img: profile_icon,
  },
];

const tagData = [
  'all',
  'technology',
  'frontend',
  'backend',
  'fullstack',
  'web dev',
  'javascript',
  'react',
  'nextjs',
  'css',
  'performance',
  'ui/ux'
];

let date = new Date();
let year = date.getFullYear();

export {assets, blog_data, tagData, year};
