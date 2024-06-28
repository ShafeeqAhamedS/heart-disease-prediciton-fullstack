import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Axios for making HTTP requests

const HistoryComponent = () => {
    const [historyData, setHistoryData] = useState([]);

    useEffect(() => {
        fetchHistory();
    }, []);

    const fetchHistory = async () => {
        try {
            const response = await axios.get('http://localhost:5000/history'); // Adjust URL as per your Flask app's endpoint
            setHistoryData(response.data);
            console.log('History data:', response.data);
        } catch (error) {
            console.error('Error fetching history:', error);
        }
    };

    return (
        <div className="history">
            <h2>History</h2>
            <div className="history-cards">
                {historyData.map((item, index) => (
                    <div key={index} className="history-card">
                        <h3>Prediction ID: {item._id.$oid}</h3>
                        <p>Age: {item.age}</p>
                        <p>Sex: {item.sex}</p>
                        <p>Cholesterol: {item.cholesterol}</p>
                        <p>Prediction: {item.prediction}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HistoryComponent;
