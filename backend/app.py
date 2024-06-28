from flask import Flask, request, jsonify, render_template
from pymongo import MongoClient
from config import Config
from flask_cors import CORS
import numpy as np
from sklearn.preprocessing import StandardScaler
import tensorflow as tf
from bson import json_util

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

scaler = StandardScaler()
model = tf.keras.models.load_model('./heart_disease_model.h5')

client = MongoClient('mongodb+srv://root:root@cluster0.yx4htz5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
db = client['predicateDB']  # Replace with your database name
collection = db['predictions']

# Routes
@app.route('/')
def home():
    return render_template('sample.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json

    age = int(data['age'])
    sex = int(data['sex'])
    chest_pain_type = int(data['chest_pain_type'])
    bp = int(data['bp'])
    cholesterol = int(data['cholesterol'])
    fbs_over_120 = int(data['fbs_over_120'])
    ekg_results = int(data['ekg_results'])
    max_hr = int(data['max_hr'])
    exercise_angina = int(data['exercise_angina'])
    st_depression = float(data['st_depression'])
    slope_of_st = int(data['slope_of_st'])
    num_vessels_fluro = int(data['num_vessels_fluro'])
    thallium = int(data['thallium'])

    # Prepare the input data for prediction
    input_data = {
        'age': age,
        'sex': sex,
        'chest_pain_type': chest_pain_type,
        'bp': bp,
        'cholesterol': cholesterol,
        'fbs_over_120': fbs_over_120,
        'ekg_results': ekg_results,
        'max_hr': max_hr,
        'exercise_angina': exercise_angina,
        'st_depression': st_depression,
        'slope_of_st': slope_of_st,
        'num_vessels_fluro': num_vessels_fluro,
        'thallium': thallium
    }

    # Predict using the loaded model
    scaled_data = scaler.fit_transform([[age, sex, chest_pain_type, bp, cholesterol, fbs_over_120,
                                      ekg_results, max_hr, exercise_angina, st_depression,
                                      slope_of_st, num_vessels_fluro, thallium]])
    prediction = model.predict(scaled_data)
    predicted_class = np.round(prediction).astype(int)[0, 0]

    # Prepare output message based on prediction
    if predicted_class == 0:
        result = 'No heart disease'
    else:
        result = 'Heart disease detected'

    # Save the prediction to the database
    input_data['prediction'] = result
    data = collection.insert_one(input_data)
    print(data.inserted_id)

    # Return JSON response
    return jsonify({'result': result})

@app.route('/history', methods=['GET'])
def history():
    data = collection.find({})
    json_data = json_util.dumps(list(data))  # Serialize MongoDB documents
    return json_data, 200  # Return as JSON with HTTP status code

@app.route('/add', methods=['POST'])
def add():
    data = request.json
    collection.insert_one(data)
    return jsonify({'message': 'Data added successfully'}), 201

if __name__ == '__main__':
    app.run(debug=True)
