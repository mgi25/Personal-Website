from app import create_app
from app.extensions import db


def test_search_route():
    app = create_app()
    app.config.from_object('config.TestConfig')
    with app.app_context():
        db.create_all()
        client = app.test_client()
        resp = client.get('/articles/search?q=hello')
        assert resp.status_code == 200
