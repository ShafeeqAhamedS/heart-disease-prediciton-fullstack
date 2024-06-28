from flask import Blueprint, request, jsonify
from models import Prediction

predictions_blueprint = Blueprint('predictions', __name__)

@predictions_blueprint.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    # Replace this with your actual model prediction logic
    prediction = "dummy_prediction"
    prediction_data = {'data': data, 'prediction': prediction}
    Prediction.insert(prediction_data)
    return jsonify({'prediction': prediction}), 200

@predictions_blueprint.route('/history', methods=['GET'])
def history():
    predictions = Prediction.find_all()
    return jsonify(predictions), 200

@predictions_blueprint.route('/add', methods=['POST'])
def add():
    data = request.get_json()
    prediction_data = {'data': data, 'prediction': data.get('prediction')}
    Prediction.insert(prediction_data)
    return jsonify({'message': 'Data added successfully'}), 201
