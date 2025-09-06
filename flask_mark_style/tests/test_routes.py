import pytest
from app import create_app
from app.extensions import db


@pytest.fixture
def client():
    app = create_app()
    app.config.from_object('config.TestConfig')
    with app.app_context():
        db.create_all()
        yield app.test_client()
        db.drop_all()


def test_home(client):
    resp = client.get('/')
    assert resp.status_code == 200
