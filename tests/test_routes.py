import json
from app import app


def test_home(client):
    resp = client.get('/')
    assert resp.status_code == 200
    assert b'Welcome' in resp.data


def test_subscribe(client):
    resp = client.post('/api/subscribe', data={'email': 'test@example.com'})
    assert resp.status_code == 200
    data = json.loads(resp.data)
    assert data['status'] == 'subscribed'


import pytest

@pytest.fixture
def client():
    app.config.update({'TESTING': True})
    with app.test_client() as client:
        yield client
