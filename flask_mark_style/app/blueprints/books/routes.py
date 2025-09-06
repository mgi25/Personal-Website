from flask import render_template
from . import bp
from app.models import Book


@bp.route('/')
def index():
    books = Book.query.all()
    return render_template('books/index.html', books=books)


@bp.route('/<slug>')
def detail(slug):
    book = Book.query.filter_by(slug=slug).first_or_404()
    return render_template('books/detail.html', book=book)
