import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PredictComponent from './components/PredictComponent/PredictComponent';
import HistoryComponent from './components/HistoryComponent/HistoryComponent';
import AddDataComponent from './components/AddDataComponent/AddDataComponent';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Heart Disease Prediction</h1>

        <Router>
          <nav className="flex justify-center flex justify-evenly mt-8 mx-10">
            <Link to="/predict" className="btn-primary bg-blue-200 p-3 rounded-md text-lg font-semibold">Predict</Link>
            <Link to="/history" className="btn-primary bg-blue-200 p-3 rounded-md text-lg font-semibold">History</Link>
            <Link to="/add" className="btn-primary bg-blue-200 p-3 rounded-md text-lg font-semibold">Add Data</Link>
          </nav>
          <Routes>
            <Route path="/predict" element={<PredictComponent />} />
            <Route path="/history" element={<HistoryComponent />} />
            <Route path="/add" element={<AddDataComponent />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
