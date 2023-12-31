import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CalculateGrossWages from './components/CalculateGrossWages';
import OrgHierarchy from './components/OrgHierarchy';
import FilterInactive from './components/FilterInactive';
import PaymentToPayStatement from './components/PaymentToPayStatement';
import CompareJSON from './components/CompareJSON';
import ClassCode from './components/ClassCode';
import Percentage401k from './components/Percentage401k';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/calculateGrossWages" element={< CalculateGrossWages /> } />
          <Route path="/orgHierarchy" element={< OrgHierarchy /> } />
          <Route path="/filterInactive" element={< FilterInactive /> } />
          <Route path="/paymentToPayStatement" element={< PaymentToPayStatement /> } />
          <Route path="/compareJSON" element={< CompareJSON /> } />
          <Route path="/classCode" element={< ClassCode /> } />
          <Route path="/percentage401k" element={< Percentage401k /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;