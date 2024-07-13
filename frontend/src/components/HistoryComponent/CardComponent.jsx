import React from 'react'

const CardComponent = ({ item, index }) => {

  return (
        <div key={index} className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Name: {item.name}</h3>
            <p><span className="font-semibold">ID:</span> {item.id}</p>
            <p><span className="font-semibold">Age:</span> {item.age}</p>
            <p><span className="font-semibold">Sex:</span> {item.sex}</p>
            <p><span className="font-semibold">Chest Pain Type:</span> {item.chest_pain_type}</p>
            <p><span className="font-semibold">Cholesterol:</span> {item.cholesterol}</p>
            <p><span className="font-semibold">BP:</span> {item.bp}</p>
            <p><span className="font-semibold">FBS over 120:</span> {item.fbs_over_120}</p>
            <p><span className="font-semibold">EKG Results:</span> {item.ekg_results}</p>
            <p><span className="font-semibold">Max HR:</span> {item.max_hr}</p>
            <p><span className="font-semibold">Exercise Angina:</span> {item.exercise_angina}</p>
            <p><span className="font-semibold">ST Depression:</span> {item.st_depression}</p>
            <p><span className="font-semibold">Slope of ST:</span> {item.slope_of_st}</p>
            <p><span className="font-semibold">Number of Vessels Fluro:</span> {item.num_vessels_fluro}</p>
            <p><span className="font-semibold">Thallium:</span> {item.thallium}</p>
            <p><span className="font-semibold">Prediction:</span> {item.prediction}</p>
        </div>
  )
}

export default CardComponent