from flask import Flask, render_template, request, jsonify, abort
from pathlib import Path
import markdown
import yaml

app = Flask(__name__)

CONTENT_DIR = Path(__file__).resolve().parent.parent / 'content'


def load_markdown(path):
    text = Path(path).read_text(encoding='utf-8')
    meta = {}
    body = text
    if text.startswith('---'):
        _, fm, body = text.split('---', 2)
        meta = yaml.safe_load(fm)
    html = markdown.markdown(body, extensions=['fenced_code', 'tables'])
    return meta, html


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/articles')
def articles():
    posts = []
    posts_dir = CONTENT_DIR / 'posts'
    if posts_dir.exists():
        for file in sorted(posts_dir.glob('*.md*')):
            meta, _ = load_markdown(file)
            posts.append({'slug': file.stem, 'title': meta.get('title', file.stem)})
    return render_template('articles.html', posts=posts)


@app.route('/articles/<slug>')
def article_detail(slug: str):
    path = CONTENT_DIR / 'posts' / f'{slug}.md'
    if not path.exists():
        path = CONTENT_DIR / 'posts' / f'{slug}.mdx'
    if not path.exists():
        abort(404)
    meta, html = load_markdown(path)
    return render_template('article_detail.html', title=meta.get('title', slug), content=html)


@app.route('/books')
def books():
    return render_template('books.html')


@app.route('/newsletter')
def newsletter():
    notes = []
    notes_dir = CONTENT_DIR / 'notes'
    if notes_dir.exists():
        for file in sorted(notes_dir.glob('*.md*')):
            meta, _ = load_markdown(file)
            notes.append({'slug': file.stem, 'title': meta.get('title', file.stem)})
    return render_template('newsletter.html', notes=notes)


@app.route('/podcast')
def podcast():
    episodes = []
    episodes_dir = CONTENT_DIR / 'episodes'
    if episodes_dir.exists():
        for file in sorted(episodes_dir.glob('*.md*')):
            meta, _ = load_markdown(file)
            episodes.append({'slug': file.stem, 'title': meta.get('title', file.stem)})
    return render_template('podcast.html', episodes=episodes)


@app.route('/community')
def community():
    return render_template('community.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/api/subscribe', methods=['POST'])
def subscribe():
    data = request.get_json() if request.is_json else request.form
    email = data.get('email')
    if not email:
        return jsonify({'error': 'Email required'}), 400
    # In a real app we would store or send the email somewhere
    return jsonify({'status': 'subscribed'}), 200


@app.route('/sitemap.xml')
def sitemap():
    pages = ['/']
    posts_dir = CONTENT_DIR / 'posts'
    if posts_dir.exists():
        for file in posts_dir.glob('*.md*'):
            pages.append(f'/articles/{file.stem}')
    xml = render_template('sitemap.xml', pages=pages)
    return app.response_class(xml, mimetype='application/xml')


@app.route('/rss.xml')
def rss():
    posts = []
    posts_dir = CONTENT_DIR / 'posts'
    if posts_dir.exists():
        for file in posts_dir.glob('*.md*'):
            meta, html = load_markdown(file)
            posts.append({'title': meta.get('title', file.stem), 'slug': file.stem, 'content': html})
    xml = render_template('rss.xml', posts=posts)
    return app.response_class(xml, mimetype='application/rss+xml')


