import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import CourseDetail from './Components/CourseDetail';
import SubjectList from './Components/SubjectList';
import SubjectDetail from './Components/Unitlist';
import About from './Components/About';
import PDFViewer from './Components/PDFViewer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:courseId" element={<CourseDetail />} />
        <Route path="/course/:courseId/subjects" element={<SubjectList />} />
        <Route path="/About" element={<About />} />
        <Route path="/course/:courseId/subject/:subjectName" element={<SubjectDetail />} />
        <Route path="/course/:courseId/subject/:subjectName/units" element={<PDFViewer file='d:\CSE (1).pdf' />} />
      </Routes>
    </Router>
  );
};

export default App;
