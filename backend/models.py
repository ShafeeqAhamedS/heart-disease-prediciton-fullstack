from app import mongo

class Prediction:
    @staticmethod
    def insert(data):
        return mongo.db.predictions.insert_one(data)

    @staticmethod
    def find_all():
        return list(mongo.db.predictions.find())
