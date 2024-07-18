import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './styles.css';

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [isNavVisible, setIsNavVisible] = useState(false);
  const handleHamburgerClick = () => {
    setIsNavVisible(!isNavVisible);
  };


  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
  };

  const handleViewSubjects = () => {
    navigate(`/course/${courseId}/subjects?year=${year}&semester=${semester}`);
  };

  return (
    <div className="course-detail-page">
      <header className="course-detail-header">
        <div className="header-content">
          <h1>Course Details: {courseId}</h1>
        </div>
      </header>
      <nav>
      <div className="hamburger" id="hamburger" onClick={handleHamburgerClick}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul id="nav-links" className={isNavVisible ? 'show' : ''}>
          <li><a href="/">Home</a></li>
        </ul>
      </nav>
      <main className="course-detail-main">
        <div className="introduction">
          <h2>Select Year and Semester</h2>
          <p>Choose the year and semester to see the subjects for {courseId}.</p>
        </div>
        <div className="dropdown-container">
          <select value={year} onChange={handleYearChange} className="dropdown">
            <option value="">Select Year</option>
            <option value="1">First Year</option>
            <option value="2">Second Year</option>
            <option value="3">Third Year</option>
            <option value="4">Fourth Year</option>
          </select>
          <select value={semester} onChange={handleSemesterChange} className="dropdown">
            <option value="">Select Semester</option>
            <option value="1">First Semester</option>
            <option value="2">Second Semester</option>
          </select>
          <button onClick={handleViewSubjects} className="view-subjects-button">View Subjects</button>
        </div>
      </main>
      <footer className="course-detail-footer">
        <p>&copy; 2024 EduZenith. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CourseDetail;
