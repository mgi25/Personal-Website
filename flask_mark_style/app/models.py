from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .extensions import db, login_manager


class Subscription(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    plan = db.Column(db.String(50))
    status = db.Column(db.String(50))
    current_period_end = db.Column(db.DateTime)
    provider_customer_id = db.Column(db.String(100))
    provider_sub_id = db.Column(db.String(100))


class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128))
    role = db.Column(db.String(20), default='user')
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    is_active = db.Column(db.Boolean, default=True)
    subscriptions = db.relationship('Subscription', backref='user', lazy=True)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


article_topics = db.Table(
    'article_topics',
    db.Column('article_id', db.Integer, db.ForeignKey('article.id')),
    db.Column('topic_id', db.Integer, db.ForeignKey('topic.id'))
)


class Topic(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True)
    slug = db.Column(db.String(50), unique=True)


class Article(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    slug = db.Column(db.String(120), unique=True, nullable=False)
    title = db.Column(db.String(200), nullable=False)
    excerpt = db.Column(db.Text)
    body_md = db.Column(db.Text)
    hero_image = db.Column(db.String(200))
    is_premium = db.Column(db.Boolean, default=False)
    reading_min = db.Column(db.Integer, default=1)
    published_at = db.Column(db.DateTime, default=datetime.utcnow)
    year = db.Column(db.Integer, default=datetime.utcnow().year)
    topics = db.relationship('Topic', secondary=article_topics, backref='articles')


class NewsletterIssue(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    slug = db.Column(db.String(120), unique=True)
    title = db.Column(db.String(200))
    body_md = db.Column(db.Text)
    sent_at = db.Column(db.DateTime)
    cta_text = db.Column(db.String(200))
    is_premium = db.Column(db.Boolean, default=False)
    year = db.Column(db.Integer, default=datetime.utcnow().year)


class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    slug = db.Column(db.String(120), unique=True)
    title = db.Column(db.String(200))
    subtitle = db.Column(db.String(200))
    description_md = db.Column(db.Text)
    cover_image = db.Column(db.String(200))
    retailers_json = db.Column(db.Text)


class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    slug = db.Column(db.String(120), unique=True)
    title = db.Column(db.String(200))
    tagline = db.Column(db.String(200))
    description_md = db.Column(db.Text)
    syllabus_json = db.Column(db.Text)
    is_premium = db.Column(db.Boolean, default=False)
    lessons = db.relationship('Lesson', backref='course', lazy=True)


class Lesson(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    course_id = db.Column(db.Integer, db.ForeignKey('course.id'))
    slug = db.Column(db.String(120))
    title = db.Column(db.String(200))
    video_url = db.Column(db.String(200))
    body_md = db.Column(db.Text)
    is_premium = db.Column(db.Boolean, default=False)
    order_index = db.Column(db.Integer, default=0)


class Sponsorship(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    channel = db.Column(db.String(50))
    metrics_json = db.Column(db.Text)
    contact_email = db.Column(db.String(120))


class ContactMessage(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    email = db.Column(db.String(120))
    subject = db.Column(db.String(200))
    message = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)


class Redirect(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    from_path = db.Column(db.String(200))
    to_path = db.Column(db.String(200))
    code = db.Column(db.Integer, default=302)
