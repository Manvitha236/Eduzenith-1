import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './styles.css';

const subjects = {
  CSE: {
    '1-1': ['Introduction to Programming', 'Mathematics I', 'Physics', 'English'],
    '1-2': ['Data Structures', 'Mathematics II', 'Digital Logic Design', 'Chemistry'],
    // Add other year-semester combinations similarly...
  },
  // Add other courses similarly...
};

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SubjectList = () => {
  const { courseId } = useParams();
  const query = useQuery();
  const year = query.get('year');
  const semester = query.get('semester');
  const key = `${year}-${semester}`;
  const subjectList = subjects[courseId][key] || [];

  return (
    <div>
      <header>
        <div className="header-content">
          <h1>Subjects</h1>
        </div>
      </header>
      <nav>
        <ul id="nav-links">
          <li><a href="/">Home</a></li>
        </ul>
      </nav>
      <main>
        <div className="introduction">
          <h2>Subjects for Year {year}, Semester {semester}</h2>
        </div>
        <div className="branches">
          {subjectList.map((subject, index) => (
            <div key={index} className="card">
              <div className="card-content">
                <h3>{subject}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p>&copy; 2024 EduZenith. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SubjectList;
