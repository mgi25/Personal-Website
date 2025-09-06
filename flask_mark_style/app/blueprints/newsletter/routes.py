from flask import render_template, request, redirect, url_for, flash
from . import bp
from ..models import NewsletterIssue
from ..emails import email_adapter


@bp.route('/')
def archive():
    issues = NewsletterIssue.query.order_by(NewsletterIssue.sent_at.desc()).all()
    return render_template('newsletter/archive.html', issues=issues)


@bp.route('/<slug>')
def issue(slug):
    issue = NewsletterIssue.query.filter_by(slug=slug).first_or_404()
    return render_template('newsletter/issue.html', issue=issue)


@bp.route('/subscribe', methods=['GET', 'POST'])
def subscribe():
    if request.method == 'POST':
        email = request.form['email']
        token = 'sample-token'
        email_adapter.send_double_opt_in(email, token)
        flash('Check your email to confirm subscription.')
        return redirect(url_for('newsletter.archive'))
    return render_template('newsletter/subscribe.html')


@bp.route('/confirm')
def confirm():
    flash('Subscription confirmed.')
    return redirect(url_for('newsletter.archive'))
