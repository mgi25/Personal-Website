from app import create_app
from app.extensions import db
from app.models import User


def test_user_password():
    app = create_app()
    app.config.from_object('config.TestConfig')
    with app.app_context():
        db.create_all()
        u = User(email='test@example.com')
        u.set_password('secret')
        assert u.check_password('secret')
