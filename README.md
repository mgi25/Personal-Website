# Author Website

This is a minimal starter for an author website built with Next.js 14, TypeScript and MDX. It includes sample content for articles, newsletter notes and podcast episodes.

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Run the development server

```bash
npm run dev
```

The site uses Contentlayer for MDX content located in the `content/` directory.

## Content

- `content/posts` – blog posts
- `content/notes` – newsletter notes
- `content/episodes` – podcast notes

## Tests

Simple unit tests are located in `tests/` and can be run with:

```bash
npm test
```

## Deployment

Deploy to Vercel or any platform supporting Next.js 14.

## Environment Variables

- `NEXT_PUBLIC_SITE_URL` – canonical site URL used in sitemap and RSS.
