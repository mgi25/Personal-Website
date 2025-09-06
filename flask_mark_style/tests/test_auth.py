import pytest
from app import create_app
from app.extensions import db
from app.models import User


@pytest.fixture
def client():
    app = create_app()
    app.config.from_object('config.TestConfig')
    with app.app_context():
        db.create_all()
        u = User(email='a@b.com')
        u.set_password('pass')
        db.session.add(u)
        db.session.commit()
        yield app.test_client()
        db.drop_all()


def test_login(client):
    resp = client.post('/login', data={'email': 'a@b.com', 'password': 'pass'}, follow_redirects=True)
    assert resp.status_code == 200
