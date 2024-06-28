import os

class Config:
    MONGO_URI = 'mongodb+srv://root:root@cluster0.yx4htz5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    SECRET_KEY = os.getenv('SECRET_KEY', 'wdsjfcnw832552dfca')