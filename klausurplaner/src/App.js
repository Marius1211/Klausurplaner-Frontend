import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddKlausur from './AddKlausur';
import Calendar from './Calendar';
import ClassOverview from './ClassOverview';
import ComingExams from './ComingExams';
import Login from './Login';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/comingexams" element={<ComingExams />} />
          <Route path="/classoverview" element={<ClassOverview />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/addklausur" element={<AddKlausur />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
