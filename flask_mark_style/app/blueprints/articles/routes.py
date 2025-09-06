from flask import render_template, request
from . import bp
from ..models import Article

@bp.route('/')
def index():
    articles = Article.query.order_by(Article.published_at.desc()).all()
    return render_template('articles/index.html', articles=articles)

@bp.route('/search')
def search():
    q = request.args.get('q','')
    results = []
    return render_template('articles/search.html', results=results, query=q)

@bp.route('/<slug>')
def detail(slug):
    article = Article.query.filter_by(slug=slug).first_or_404()
    return render_template('articles/detail.html', article=article)
