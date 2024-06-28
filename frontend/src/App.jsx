import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PredictComponent from './components/PredictComponent/PredictComponent';
import HistoryComponent from './components/HistoryComponent/HistoryComponent';
import AddDataComponent from './components/AddDataComponent/AddDataComponent';

const App = () => {
  return (
    <>
      <h1>Heart Disease Prediction</h1>
      
      <Router>
        <Routes>
          <Route path="/predict" element={<PredictComponent />} />
          <Route path="/history" element={<HistoryComponent />} />
          <Route path="/add" element={<AddDataComponent />} />
        </Routes>

        <nav>
          <ul>
            <li>
              <Link to="/predict">Predict</Link>
            </li>
            <li>
              <Link to="/history">History</Link>
            </li>
            <li>
              <Link to="/add">Add Data</Link>
            </li>
          </ul>
        </nav>
      </Router>
    </>
  );
};

export default App;
