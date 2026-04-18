# Blog App

Blog App is a full-stack content platform built with Next.js App Router, MongoDB, and Mongoose. It includes a public blog experience, a lightweight admin dashboard, newsletter subscriptions, and server-side rendering for the main feed.

## Overview

The public site focuses on fast reading and simple discovery. The home page loads blog data on the server with ISR, the category filter is keyboard-friendly, and blog cards are optimized for responsive images and concise previews. The blog detail page renders full HTML content with a small sanitization layer to strip unsafe or noisy markup before display.

The admin side provides a focused workflow for creating posts, browsing all posts, and managing newsletter signups. The API routes are designed to connect to MongoDB on demand and clean up uploaded images when posts are deleted.

## Highlights

- Server-rendered home feed with `revalidate = 60` for fresher content and better first paint.
- Responsive blog cards with tuned `next/image` breakpoints.
- Category filtering on the homepage.
- Blog detail pages with HTML rendering and sanitization.
- Admin tools for adding posts, listing posts, and reviewing subscriptions.
- Dynamic `robots.txt` and web manifest support.
- PWA and favicon metadata configured in the app layout.

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- MongoDB
- Mongoose
- Axios
- React Toastify
- React Icons

## App Routes

### Public

- `/` - blog homepage
- `/blogs/[id]` - blog detail page

### Admin

- `/admin` - admin landing page
- `/admin/addProduct` - create a new blog post
- `/admin/blogList` - manage existing posts
- `/admin/subscriptions` - view and delete newsletter subscribers

### API

- `/api/blog`
  - `GET` - fetch all blogs
  - `GET?id=<blogId>` - fetch a single blog
  - `POST` - create a blog and upload its image
  - `DELETE?id=<blogId>` - delete a blog and its image
- `/api/email`
  - `GET` - fetch all subscriber emails
  - `POST` - save a subscriber email
  - `DELETE?id=<emailId>` - delete a subscriber email

## Key Behavior

- Home feed blogs are loaded on the server and sorted by newest first.
- Blog cards convert stored HTML into a plain-text preview.
- Blog detail pages sanitize stored HTML before rendering.
- The add-post form also sanitizes HTML before it reaches the database.
- Image uploads are written into `public/` so the stored paths can be served directly.
- MongoDB connections are cached in `lib/config/db.js` to avoid reconnecting on hot reload.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

Create a `.env` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
```

### 3. Start the app

```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` - start the development server
- `npm run build` - create a production build
- `npm run start` - run the production server
- `npm run lint` - run ESLint

## Project Layout

- `app/page.jsx` - homepage data loading and layout
- `app/blogs/[id]/page.jsx` - blog reader page
- `app/admin/page.jsx` - admin landing page
- `app/admin/addProduct/page.jsx` - blog creation form
- `app/admin/blogList/page.jsx` - blog management table
- `app/admin/subscriptions/page.jsx` - subscription management
- `app/api/blog/route.js` - blog CRUD API
- `app/api/email/route.js` - subscription API
- `app/robots.js` - robots.txt generator
- `app/manifest.webmanifest` - web app manifest
- `app/layout.jsx` - app metadata and shared layout
- `lib/config/db.js` - MongoDB connection helper
- `lib/models/blog.model.js` - blog schema
- `lib/models/email.model.js` - subscriber schema
- `components/Bloglist.jsx` - homepage filtering and grid
- `components/Blogitem.jsx` - blog card UI
- `components/Header.jsx` - homepage hero header
- `components/Nav.jsx` - top navigation
- `components/Newsletter.jsx` - newsletter signup UI
- `components/AdminComponents/Sidebar.jsx` - admin navigation
- `components/AdminComponents/BlogTable.jsx` - admin blog list rows
- `components/AdminComponents/SubscriptionTable.jsx` - subscription rows

## Notes

- Content sanitization is intentionally lightweight and regex-based for controlled admin input.
- The current ESLint setup may require `typescript` to be installed locally before `npm run lint` succeeds.
- Public and admin UI share the same visual language, so layout and metadata changes in `app/layout.jsx` affect both.
