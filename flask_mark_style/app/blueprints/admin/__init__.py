from flask import Blueprint
from flask_login import login_required

bp = Blueprint('admin', __name__)

from . import routes
