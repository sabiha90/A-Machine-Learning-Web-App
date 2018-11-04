from flask import Flask, render_template, request
import logging
import os
from werkzeug.utils import secure_filename
import pandas as pd
import numpy as np
app = Flask(__name__, static_folder="../static/dist",
            template_folder="../static")

APP_ROOT = os.path.dirname(os.path.abspath(__file__))


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/hello")
def hello():
    return "Hello World!"


@app.route("/upload", methods=['POST'])
def upload():
    target = os.path.join(APP_ROOT, "upload_files/")
    print(target)

    for file in request.files.getlist("file"):
        print(file)
        filename = file.filename
        destination = "/".join([target, filename])
        print(destination)
        file.save(destination)
    return "file uploaded!!"


if __name__ == "__main__":
    app.run(debug=True)
