from flask import Flask
from config import DevConfig
from .extensions import db, migrate, login_manager
from .blueprints.main import bp as main_bp
from .blueprints.articles import bp as articles_bp
from .blueprints.newsletter import bp as newsletter_bp
from .blueprints.books import bp as books_bp
from .blueprints.courses import bp as courses_bp
from .blueprints.account import bp as account_bp
from .blueprints.admin import bp as admin_bp


def create_app(config_class=DevConfig):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_object(config_class)

    db.init_app(app)
    migrate.init_app(app, db)
    login_manager.init_app(app)

    app.register_blueprint(main_bp)
    app.register_blueprint(articles_bp, url_prefix='/articles')
    app.register_blueprint(newsletter_bp, url_prefix='/breakthrough')
    app.register_blueprint(books_bp, url_prefix='/books')
    app.register_blueprint(courses_bp, url_prefix='/courses')
    app.register_blueprint(account_bp)
    app.register_blueprint(admin_bp, url_prefix='/admin')

    return app
