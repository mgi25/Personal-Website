from app import create_app
from app.extensions import db
from app.models import Article


def test_article_view():
    app = create_app()
    app.config.from_object('config.TestConfig')
    with app.app_context():
        db.create_all()
        a = Article(slug='test', title='Test', body_md='Body')
        db.session.add(a)
        db.session.commit()
        client = app.test_client()
        resp = client.get('/articles/test')
        assert resp.status_code == 200
