import React, { useState } from 'react';
import axios from 'axios';

function PredictComponent() {
  const [predictionResult, setPredictionResult] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    id: 0,
    age: 70,
    sex: 0,
    chest_pain_type: 4,
    bp: 130,
    cholesterol: 322,
    fbs_over_120: 0,
    ekg_results: 2,
    max_hr: 109,
    exercise_angina: 0,
    st_depression: 2.4,
    slope_of_st: 2,
    num_vessels_fluro: 3,
    thallium: 3
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      setPredictionResult(data.result);
      alert(`Prediction Result: ${data.result}`);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Predict</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <label htmlFor='name' className='font-bold block mb-2'>Name:</label>
        <input type='text' id='name' name='name' value={formData.name} onChange={handleInputChange} className='input-field border border-black p-2 mb-4 w-full' />

        <label htmlFor='id' className='font-bold block mb-2'>ID:</label>
        <input type='number' id='id' name='id' value={formData.id} onChange={handleInputChange} className='input-field border border-black p-2 mb-4 w-full' />

        <label htmlFor="age" className="font-bold block mb-2">Age:</label>
        <input type="number" id="age" name="age" value={formData.age} onChange={handleInputChange} className="input-field border border-black p-2 mb-4 w-full" />

        <label htmlFor="sex" className="font-bold block mb-2">Sex:</label>
        <select id="sex" name="sex" value={formData.sex} onChange={handleInputChange} className="input-field border border-black p-2 mb-4 w-full">
          <option value="0">Male</option>
          <option value="1">Female</option>
        </select>

        <label htmlFor="chest_pain_type" className="font-bold block mb-2">Chest pain type:</label>
        <input type="number" id="chest_pain_type" name="chest_pain_type" value={formData.chest_pain_type} onChange={handleInputChange} className="input-field border border-black p-2 mb-4 w-full" />

        <label htmlFor="bp" className="font-bold block mb-2">BP:</label>
        <input type="number" id="bp" name="bp" value={formData.bp} onChange={handleInputChange} className="input-field border border-black p-2 mb-4 w-full" />

        <label htmlFor="cholesterol" className="font-bold block mb-2">Cholesterol:</label>
        <input type="number" id="cholesterol" name="cholesterol" value={formData.cholesterol} onChange={handleInputChange} className="input-field border border-black p-2 mb-4 w-full" />

        <label htmlFor="fbs_over_120" className="font-bold block mb-2">FBS over 120:</label>
        <input type="number" id="fbs_over_120" name="fbs_over_120" value={formData.fbs_over_120} onChange={handleInputChange} className="input-field border border-black p-2 mb-4 w-full" />

        <label htmlFor="ekg_results" className="font-bold block mb-2">EKG results:</label>
        <input type="number" id="ekg_results" name="ekg_results" value={formData.ekg_results} onChange={handleInputChange} className="input-field border border-black p-2 mb-4 w-full" />

        <label htmlFor="max_hr" className="font-bold block mb-2">Max HR:</label>
        <input type="number" id="max_hr" name="max_hr" value={formData.max_hr} onChange={handleInputChange} className="input-field border border-black p-2 mb-4 w-full" />

        <label htmlFor="exercise_angina" className="font-bold block mb-2">Exercise angina:</label>
        <input type="number" id="exercise_angina" name="exercise_angina" value={formData.exercise_angina} onChange={handleInputChange} className="input-field border border-black p-2 mb-4 w-full" />

        <label htmlFor="st_depression" className="font-bold block mb-2">ST depression:</label>
        <input type="number" id="st_depression" name="st_depression" value={formData.st_depression} onChange={handleInputChange} className="input-field border border-black p-2 mb-4 w-full" />

        <label htmlFor="slope_of_st" className="font-bold block mb-2">Slope of ST:</label>
        <input type="number" id="slope_of_st" name="slope_of_st" value={formData.slope_of_st} onChange={handleInputChange} className="input-field border border-black p-2 mb-4 w-full" />

        <label htmlFor="num_vessels_fluro" className="font-bold block mb-2">Number of vessels fluro:</label>
        <input type="number" id="num_vessels_fluro" name="num_vessels_fluro" value={formData.num_vessels_fluro} onChange={handleInputChange} className="input-field border border-black p-2 mb-4 w-full" />

        <label htmlFor="thallium" className="font-bold block mb-2">Thallium:</label>
        <input type="number" id="thallium" name="thallium" value={formData.thallium} onChange={handleInputChange} className="input-field border border-black p-2 mb-4 w-full" />

        <button type="submit" className="btn-primary mt-6 block w-full bg-green-200 border border-green-200 p-3">Predict</button>
      </form>

      {predictionResult && (
        <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 my-4 mx-24 text-center" role="alert">
          <p className="font-bold">Prediction Result:</p>
          <p>{predictionResult}</p>
        </div>
      )}
    </div>
  );
}

export default PredictComponent;
