from flask import Blueprint

bp = Blueprint('newsletter', __name__)

from . import routes
