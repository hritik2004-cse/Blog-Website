# Blog App

A modern full-stack blog application built with Next.js App Router, MongoDB, and Mongoose.

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

### API + Database

- Blog API route: `/api/blog`
  - `GET /api/blog` -> fetch all blogs
  - `GET /api/blog?id=<blogId>` -> fetch single blog
  - `POST /api/blog` -> create blog and upload image to `public/`
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

## In Progress / Placeholder Screens

- `/admin/blogList` currently placeholder
- `/admin/subscriptions` currently placeholder
- `/api/email` folder exists but no endpoint implemented yet

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
- `app/api/blog/route.js` - blog API
- `lib/config/db.js` - MongoDB connection helper
- `lib/models/blog.model.js` - blog schema/model
- `components/Bloglist.jsx` - list + category filtering
- `components/Blogitem.jsx` - blog card UI

## Notes

- Blog description supports HTML input and rendering.
- Theme colors are preserved for rendered blog content.
- Sanitization is currently regex-based and suitable for controlled/admin content.
