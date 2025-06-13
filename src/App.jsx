import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DashboardPage from './pages/DashboardPage';
import CourseDetailPage from './pages/CourseDetailPage';
import SubjectListPage from './pages/SubjectListPage';
import SubjectDetailPage from './pages/SubjectDetailPage';
import UnitDetailPage from './pages/UnitDetailPage';

// Styles
import './styles/globals.css';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/course/:courseId" element={<CourseDetailPage />} />
          <Route path="/course/:courseId/subjects" element={<SubjectListPage />} />
          <Route path="/course/:courseId/subject/:subjectName" element={<SubjectDetailPage />} />
          <Route path="/course/:courseId/subject/:subjectName/unit/:unitName" element={<UnitDetailPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;