import React, { useState } from 'react';
import axios from 'axios';

const AddDataComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        id: 0,
        age: 0,
        sex: '',
        chest_pain_type: 0,
        cholesterol: 0,
        bp: 0,
        fbs_over_120: 0,
        ekg_results: 0,
        max_hr: 0,
        exercise_angina: 0,
        st_depression: 0,
        slope_of_st: 0,
        num_vessels_fluro: 0,
        thallium: 0,
        prediction: '',
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
            // IF gender is male update it as 0 and for female 1
            if(formData['sex'] === 'Male')
                formData['sex'] = 1
            else
                formData['sex'] = 0


            await axios.post('http://localhost:5000/add', formData);
            alert('Data added successfully');
            // Redirect to history page
            window.location.href = '/history';
        } catch (error) {
            console.error('Error adding data:', error);
            alert('Error adding data');
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Add Data</h2>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label htmlFor="name" className="font-bold block mb-2">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="input-field border border-black p-2 w-full" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="id" className="font-bold block mb-2">ID:</label>
                    <input type="number" id="id" name="id" value={formData.id} onChange={handleChange} className="input-field border border-black p-2 w-full" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="age" className="font-bold block mb-2">Age:</label>
                    <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} className="input-field border border-black p-2 w-full" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="sex" className="font-bold block mb-2">Sex:</label>
                    <select id="sex" name="sex" value={formData.sex} onChange={handleChange} className="input-field border border-black p-2 w-full" required>
                        <option value="">Select Sex</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="bp" className="font-bold block mb-2">Blood Pressure:</label>
                    <input type="number" id="bp" name="bp" value={formData.bp} onChange={handleChange} className="input-field border border-black p-2 w-full" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="chest_pain_type" className="font-bold block mb-2">Chest Pain Type:</label>
                    <input type="number" id="chest_pain_type" name="chest_pain_type" value={formData.chest_pain_type} onChange={handleChange} className="input-field border border-black p-2 w-full" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="cholesterol" className="font-bold block mb-2">Cholesterol:</label>
                    <input type="number" id="cholesterol" name="cholesterol" value={formData.cholesterol} onChange={handleChange} className="input-field border border-black p-2 w-full" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="fbs_over_120" className="font-bold block mb-2">FBS Over 120:</label>
                    <input type="number" id="fbs_over_120" name="fbs_over_120" value={formData.fbs_over_120} onChange={handleChange} className="input-field border border-black p-2 w-full" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="ekg_results" className="font-bold block mb-2">EKG Results:</label>
                    <input type="number" id="ekg_results" name="ekg_results" value={formData.ekg_results} onChange={handleChange} className="input-field border border-black p-2 w-full" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="max_hr" className="font-bold block mb-2">Max HR:</label>
                    <input type="number" id="max_hr" name="max_hr" value={formData.max_hr} onChange={handleChange} className="input-field border border-black p-2 w-full" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="exercise_angina" className="font-bold block mb-2">Exercise Angina:</label>
                    <input type="number" id="exercise_angina" name="exercise_angina" value={formData.exercise_angina} onChange={handleChange} className="input-field border border-black p-2 w-full" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="st_depression" className="font-bold block mb-2">ST Depression:</label>
                    <input type="number" id="st_depression" name="st_depression" value={formData.st_depression} onChange={handleChange} className="input-field border border-black p-2 w-full" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="slope_of_st" className="font-bold block mb-2">Slope of ST:</label>
                    <input type="number" id="slope_of_st" name="slope_of_st" value={formData.slope_of_st} onChange={handleChange} className="input-field border border-black p-2 w-full" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="num_vessels_fluro" className="font-bold block mb-2">Number of Vessels Fluro:</label>
                    <input type="number" id="num_vessels_fluro" name="num_vessels_fluro" value={formData.num_vessels_fluro} onChange={handleChange} className="input-field border border-black p-2 w-full" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="thallium" className="font-bold block mb-2">Thallium:</label>
                    <input type="number" id="thallium" name="thallium" value={formData.thallium} onChange={handleChange} className="input-field border border-black p-2 w-full" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="prediction" className="font-bold block mb-2">Prediction:</label>
                    <select id="prediction" name="prediction" value={formData.prediction} onChange={handleChange} className="input-field border border-black p-2 w-full" required>
                        <option value="">Select Prediction</option>
                        <option value="No Heart Disease">No Heart Disease</option>
                        <option value="Heart Disease">Heart Disease</option>
                    </select>
                </div>
                <button type="submit" className="btn-primary mt-6 block w-full border border-green-200 p-3 bg-green-200">Add Data</button>
            </form>
        </div>
    );
};

export default AddDataComponent;
