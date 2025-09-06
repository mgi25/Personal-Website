import click
from flask.cli import with_appcontext
from app import create_app
from app.extensions import db
from app.models import Topic, Article, NewsletterIssue

app = create_app()

@app.cli.command('seed')
@with_appcontext
def seed():
    t = Topic(name='general', slug='general')
    db.session.add(t)
    db.session.commit()
    click.echo('Seeded database')


@app.cli.command('reindex')
@with_appcontext
def reindex():
    click.echo('Reindexing search')
