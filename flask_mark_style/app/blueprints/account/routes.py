from flask import render_template, redirect, url_for, flash, request
from flask_login import login_user, logout_user, login_required, current_user
from . import bp
from ..forms import LoginForm, RegisterForm
from ..models import User
from ..extensions import db


@bp.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user and user.check_password(form.password.data):
            login_user(user, remember=form.remember.data)
            return redirect(url_for('main.home'))
        flash('Invalid credentials')
    return render_template('account/login.html', form=form)


@bp.route('/register', methods=['GET', 'POST'])
def register():
    form = RegisterForm()
    if form.validate_on_submit():
        user = User(email=form.email.data)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        flash('Account created')
        return redirect(url_for('account.login'))
    return render_template('account/register.html', form=form)


@bp.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('main.home'))


@bp.route('/account')
@login_required
def account():
    return render_template('account/settings.html')


@bp.route('/billing')
@login_required
def billing():
    return render_template('account/billing.html')
