import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CalculateGrossWages from './components/CalculateGrossWages';
import OrgHierarchy from './components/OrgHierarchy';
import FilterInactive from './components/FilterInactive';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/calculateGrossWages" element={< CalculateGrossWages /> } />
          <Route path="/orgHierarchy" element={< OrgHierarchy /> } />
          <Route path="/filterInactive" element={< FilterInactive /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;