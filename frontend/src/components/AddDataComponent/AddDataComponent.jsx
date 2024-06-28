import React, { useState } from 'react';
import axios from 'axios';

const AddDataComponent = () => {
    const [formData, setFormData] = useState({
        age: '',
        sex: '',
        cholesterol: '',
        prediction: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/add', formData);
            alert('Data added successfully');
            setFormData({
                age: '',
                sex: '',
                cholesterol: '',
                prediction: ''
            });
        } catch (error) {
            console.error('Error adding data:', error);
            alert('Error adding data');
        }
    };

    return (
        <div className="add-data">
            <h2>Add Data</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Age:
                    <input type="number" name="age" value={formData.age} onChange={handleChange} required />
                </label>
                <label>
                    Sex:
                    <select name="sex" value={formData.sex} onChange={handleChange} required>
                        <option value="">Select Sex</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
                <label>
                    Cholesterol:
                    <input type="number" name="cholesterol" value={formData.cholesterol} onChange={handleChange} required />
                </label>
                <label>
                    Prediction:
                    <select name="prediction" value={formData.prediction} onChange={handleChange} required>
                        <option value="">Select Prediction</option>
                        <option value="0">No Heart Disease</option>
                        <option value="1">Heart Disease</option>
                    </select>
                </label>
                <button type="submit">Add Data</button>
            </form>
        </div>
    );
};

export default AddDataComponent;
