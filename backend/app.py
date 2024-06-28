from flask import Flask, request, jsonify, render_template
from flask_pymongo import PyMongo
from config import Config
from flask_cors import CORS
import numpy as np
from sklearn.preprocessing import StandardScaler
import tensorflow as tf

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

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
    input_data = [[age, sex, chest_pain_type, bp, cholesterol, fbs_over_120,
                   ekg_results, max_hr, exercise_angina, st_depression,
                   slope_of_st, num_vessels_fluro, thallium]]

    # Normalize the input data
    scaled_data = scaler.fit_transform(input_data)

    # Predict using the loaded model
    prediction = model.predict(scaled_data)
    predicted_class = np.round(prediction).astype(int)[0, 0]

    # Prepare output message based on prediction
    if predicted_class == 0:
        result = 'No heart disease'
    else:
        result = 'Heart disease detected'

    # Return JSON response
    return jsonify({'result': result})


if __name__ == '__main__':
    app.run(debug=True)
