from flask import Blueprint, request, jsonify
from app import mongo, bcrypt, jwt
from models import User
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

auth_blueprint = Blueprint('auth', __name__)

@auth_blueprint.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    user = {
        'name': data['name'],
        'email': data['email'],
        'password': hashed_password,
        'admin': False
    }
    User.insert(user)
    return jsonify({'message': 'Registered successfully'}), 201

@auth_blueprint.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.find_by_email(data['email'])
    if user and bcrypt.check_password_hash(user['password'], data['password']):
        access_token = create_access_token(identity=str(user['_id']))
        return jsonify({'token': access_token}), 200
    return jsonify({'message': 'Invalid credentials'}), 401
