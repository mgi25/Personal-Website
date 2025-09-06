from flask import render_template
from flask_login import login_required, current_user
from . import bp
from ..models import Course, Lesson


@bp.route('/')
def index():
    courses = Course.query.all()
    return render_template('courses/index.html', courses=courses)


@bp.route('/<slug>')
def detail(slug):
    course = Course.query.filter_by(slug=slug).first_or_404()
    return render_template('courses/detail.html', course=course)


@bp.route('/<slug>/lesson/<lesson_slug>')
@login_required
def lesson(slug, lesson_slug):
    lesson = Lesson.query.join(Course).filter(Course.slug == slug, Lesson.slug == lesson_slug).first_or_404()
    return render_template('courses/lesson.html', lesson=lesson)
