# Blog App

A modern full-stack blog application built with Next.js App Router, MongoDB, and Mongoose.

## What's New (Latest Update)

- Home page blog data is now server-rendered with ISR (`revalidate = 60`) for faster first load and better LCP.
- Accessibility improvements across key UI components:
  - semantic landmarks (`main`, `nav`, `footer`, section labeling)
  - keyboard-accessible category filter controls
  - improved heading order and better alt/link labels
- Performance optimizations:
  - responsive image delivery improvements with tuned `sizes` and `next.config.mjs` image breakpoints
  - reduced client-side JS on the main page by replacing `react-icons` in shared public components with inline SVGs
  - newsletter submit on public home switched from Axios to native `fetch`
- SEO and crawl updates:
  - dynamic `robots.txt` via `app/robots.js`
  - web app manifest added (`app/manifest.webmanifest`)
- PWA/favicon metadata refreshed with new icon assets wired through `app/layout.jsx`

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- MongoDB + Mongoose
- Axios
- React Toastify
- React Icons

## Implemented Features

### Public Blog UI

- Responsive home page with:
  - Navbar
  - Header section
  - Category-based blog filtering
  - Blog cards with image, date, author, and short description preview
  - Newsletter subscription UI section
- Blog cards support HTML descriptions by converting HTML to plain text preview.
- Home page uses server-rendered initial blog payload for faster perceived loading.
- Newsletter subscription form posts to `/api/email` and stores subscribed emails.

### Blog Details Page

- Dynamic route: `/blogs/[id]`
- Fetches a single blog by ID from API.
- Renders full HTML blog description as formatted article content.
- Preserves theme colors and typography in rendered content.
- Sanitizes incoming HTML before rendering:
  - Removes `<script>` tags
  - Removes `<style>` tags
  - Removes `<!doctype>`, `<html>`, `<head>`, `<body>` wrappers
  - Removes inline `style="..."` attributes

### Admin Panel

- Admin layout with sidebar navigation.
- Add Blog page (`/admin/addProduct`) includes:
  - Thumbnail image upload
  - Title, category, author metadata
  - HTML description editor
  - Live HTML preview with app theme styles
  - Sanitization of HTML before saving
  - Toast notifications for success/error
- Blog List page (`/admin/blogList`) includes:
  - Fetching all blogs
  - Table view with author/title/date
  - Blog delete action
- Subscriptions page route exists (`/admin/subscriptions`) and can be expanded further.

### API + Database

- Blog API route: `/api/blog`
  - `GET /api/blog` -> fetch all blogs
  - `GET /api/blog?id=<blogId>` -> fetch single blog
  - `POST /api/blog` -> create blog and upload image to `public/`
  - `DELETE /api/blog?id=<blogId>` -> delete blog and image
- Email API route: `/api/email`
  - `POST /api/email` -> save newsletter subscriber email
- MongoDB connection helper with global caching to avoid reconnect on hot reload.
- Mongoose blog schema with fields:
  - `title`
  - `description`
  - `category`
  - `author`
  - `image`
  - `authorImg`
  - `date`
  - timestamps (`createdAt`, `updatedAt`)

### Accessibility + Performance + SEO

- Semantic layout and landmark improvements for assistive technologies.
- Keyboard-accessible controls for blog category filtering.
- Improved heading hierarchy on public blog cards.
- Responsive image tuning with custom Next image breakpoints in `next.config.mjs`.
- Dynamic `robots.txt` support and web manifest integration.
- Updated favicon/app icon metadata and assets.

## In Progress / Placeholder Screens

- `/admin/subscriptions` currently minimal placeholder UI

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

Create/update `.env` in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
```

### 3. Run development server

```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` - start development server
- `npm run build` - build for production
- `npm run start` - start production server
- `npm run lint` - run ESLint

## Project Structure (Important Paths)

- `app/page.jsx` - home page
- `app/blogs/[id]/page.jsx` - blog details page
- `app/admin/addProduct/page.jsx` - add blog page
- `app/admin/blogList/page.jsx` - admin blog management table
- `app/api/email/route.js` - newsletter subscription API
- `app/api/blog/route.js` - blog API
- `app/manifest.webmanifest` - web app manifest
- `app/robots.js` - robots.txt generator
- `lib/config/db.js` - MongoDB connection helper
- `lib/models/blog.model.js` - blog schema/model
- `lib/models/email.model.js` - subscriber email schema/model
- `components/Bloglist.jsx` - list + category filtering
- `components/Blogitem.jsx` - blog card UI

## Notes

- Blog description supports HTML input and rendering.
- Theme colors are preserved for rendered blog content.
- Sanitization is currently regex-based and suitable for controlled/admin content.
- `npm run lint` may require TypeScript package presence because of current ESLint/Next config expectations.
