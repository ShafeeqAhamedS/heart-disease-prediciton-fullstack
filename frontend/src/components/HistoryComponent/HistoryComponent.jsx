import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HistoryComponent = () => {
    const [historyData, setHistoryData] = useState([]);

    useEffect(() => {
        fetchHistory();
    }, []);

    const fetchHistory = async () => {
        try {
            const response = await axios.get('http://localhost:5000/history');
            setHistoryData(response.data);
            console.log('History data:', response.data);
        } catch (error) {
            console.error('Error fetching history:', error);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4 text-center">History</h2>
            <div className="grid gap-4 md:grid-cols-3">
                {historyData.map((item, index) => (
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
                ))}

                {/* If historyData is empty display some message */}
                {historyData.length === 0 && (
                    <p className="text-center col-span-3">No history data available</p>
                )}
            </div>
        </div>
    );
};

export default HistoryComponent;
