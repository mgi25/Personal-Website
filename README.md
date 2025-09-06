# Author Website (Flask)

This is a minimal starter for an author website built with Flask and Markdown. It includes sample content for articles, newsletter notes and podcast episodes.

## Getting Started

1. Install Python dependencies

```bash
pip install -r requirements.txt
```

2. Run the development server

```bash
flask --app app run
```

3. Build CSS (optional, requires Node and Tailwind CLI)

```bash
npm install
npm run build:css
```

The site reads Markdown content from the `content/` directory.

## Content

- `content/posts` – blog posts
- `content/notes` – newsletter notes
- `content/episodes` – podcast notes

## Tests

Run tests with `pytest`:

```bash
pytest
```

## Deployment

For production use a WSGI server such as Gunicorn:

```bash
gunicorn app:app
```
