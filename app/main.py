from flask import Flask, render_template

import random

app = Flask(__name__)


@app.route('/ping')
def _ping():
    return 'pong'


@app.route('/another-endpoint')
def _another_endpoint():
    statuses = [
        200,
        404,
        500
    ]
    status = random.choice(statuses)
    return 'pong', status


if __name__ == '__main__':
    app.run()
