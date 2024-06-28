import React, { useState } from 'react';
import './PredictComponent.css';

function PredictComponent() {
  const [predictionResult, setPredictionResult] = useState('');
  const [formData, setFormData] = useState({
    age: 70,
    sex: 1,
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
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="App">
      <h1>Heart Disease Prediction</h1>
      <form onSubmit={handleSubmit}>
        <label>Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleInputChange} /><br />

        <label>Sex:</label>
        <input type="number" name="sex" value={formData.sex} onChange={handleInputChange} /><br />

        <label>Chest pain type:</label>
        <input type="number" name="chest_pain_type" value={formData.chest_pain_type} onChange={handleInputChange} /><br />

        <label>BP:</label>
        <input type="number" name="bp" value={formData.bp} onChange={handleInputChange} /><br />

        <label>Cholesterol:</label>
        <input type="number" name="cholesterol" value={formData.cholesterol} onChange={handleInputChange} /><br />

        <label>FBS over 120:</label>
        <input type="number" name="fbs_over_120" value={formData.fbs_over_120} onChange={handleInputChange} /><br />

        <label>EKG results:</label>
        <input type="number" name="ekg_results" value={formData.ekg_results} onChange={handleInputChange} /><br />

        <label>Max HR:</label>
        <input type="number" name="max_hr" value={formData.max_hr} onChange={handleInputChange} /><br />

        <label>Exercise angina:</label>
        <input type="number" name="exercise_angina" value={formData.exercise_angina} onChange={handleInputChange} /><br />

        <label>ST depression:</label>
        <input type="number" step="0.1" name="st_depression" value={formData.st_depression} onChange={handleInputChange} /><br />

        <label>Slope of ST:</label>
        <input type="number" name="slope_of_st" value={formData.slope_of_st} onChange={handleInputChange} /><br />

        <label>Number of vessels fluro:</label>
        <input type="number" name="num_vessels_fluro" value={formData.num_vessels_fluro} onChange={handleInputChange} /><br />

        <label>Thallium:</label>
        <input type="number" name="thallium" value={formData.thallium} onChange={handleInputChange} /><br />

        <button type="submit">Predict</button>
      </form>

      {predictionResult && (
        <div className="result">
          <h2>Prediction Result:</h2>
          <p>{predictionResult}</p>
        </div>
      )}
    </div>
  );
}

export default PredictComponent;
