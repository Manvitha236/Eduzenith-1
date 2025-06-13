import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DashboardPage from './pages/DashboardPage';
import CourseDetailPage from './pages/CourseDetailPage';
import SubjectListPage from './pages/SubjectListPage';
import SubjectDetailPage from './pages/SubjectDetailPage';
import UnitDetailPage from './pages/UnitDetailPage';
import './styles/globals.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/course/:courseId" element={<CourseDetailPage />} />
        <Route path="/course/:courseId/subjects" element={<SubjectListPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/course/:courseId/subject/:subjectName" element={<SubjectDetailPage />} />
        <Route path="/course/:courseId/subject/:subjectName/unit/:unitName" element={<UnitDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;