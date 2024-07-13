import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardComponent from './CardComponent';

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
                {
                    historyData.map((item, index) => (
                        <CardComponent item={item} index={index} />
                    ))
                }
                {/* If historyData is empty display some message */}
                {historyData.length === 0 && (
                    <p className="text-center col-span-3">No history data available</p>
                )}
            </div>
        </div>
    );
};

export default HistoryComponent;
