import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import CourseDetail from './Components/CourseDetail';
import SubjectList from './Components/SubjectList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:courseId" element={<CourseDetail />} />
        <Route path="/course/:courseId/subjects" element={<SubjectList />} />
      </Routes>
    </Router>
  );
};

export default App;
