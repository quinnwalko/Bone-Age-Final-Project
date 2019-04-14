import os
import csv
import json
import pandas as pd
import numpy as np
import tensorflow as tf
import keras
from keras.models import load_model
from flask import Flask, jsonify, render_template
import flask

app = Flask(__name__)

csv_filepath = "static/data/clean_v3_reduced.csv"
df = pd.read_csv(csv_filepath)

model = load_model("static/data/test_model.h5")
#load standard scaler here

@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

@app.route("/patient-data")
def patients():
    index_dict = df.to_dict(orient="index")
    return jsonify(index_dict)

@app.route("/raw-data")
def raw():
    dict = df.to_dict()
    return jsonify(dict)

# define a predict function as an endpoint 
# @app.route("/predict", methods=["GET","POST"])
# def predict():

#     # data = {"success": False}
#     # # get the request parameters
#     params = flask.request.json
#     print(params)
#     # if (params == None):
#     #     params = flask.request.args
#     # # if parameters are found, echo the msg parameter 
#     # if (params != None):
#     #     data["response"] = params.get("msg")
#     #     data["success"] = True
#     # # return a response in json format 
#     return jsonify(0)

# start the flask app, allow remote connections

if __name__ == "__main__":
    app.run()
