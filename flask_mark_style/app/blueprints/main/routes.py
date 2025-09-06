from flask import render_template, redirect, url_for, flash
from . import bp
from ..forms import ContactForm
from ..emails import email_adapter
from ..extensions import db
from ..models import ContactMessage


@bp.route('/')
def home():
    return render_template('main/home.html')


@bp.route('/about')
def about():
    return render_template('main/about.html')


@bp.route('/contact', methods=['GET', 'POST'])
def contact():
    form = ContactForm()
    if form.validate_on_submit():
        msg = ContactMessage(name=form.name.data, email=form.email.data,
                             subject=form.subject.data, message=form.message.data)
        db.session.add(msg)
        db.session.commit()
        email_adapter.send_welcome_subscriber(form.email.data)
        flash('Message sent.')
        return redirect(url_for('main.home'))
    return render_template('main/contact.html', form=form)


@bp.route('/privacy-policy')
def privacy():
    return render_template('main/privacy.html')


@bp.route('/terms')
def terms():
    return render_template('main/terms.html')


@bp.route('/sponsor')
def sponsor():
    return render_template('main/sponsor.html')
