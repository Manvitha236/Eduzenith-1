import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';
import { ArrowLeft, BookOpen, FlaskConical, GraduationCap, Users } from 'lucide-react';
import { COURSE_INFO } from '../constants/courses';
import { SUBJECTS } from '../constants/subjects';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SubjectListPage = () => {
  const { courseId } = useParams();
  const query = useQuery();
  const year = query.get('year');
  const semester = query.get('semester');
  const key = `${year}-${semester}`;
  const subjectsForSemester = SUBJECTS[courseId][key] || { theory: [], labs: [] };
  const { theory, labs } = subjectsForSemester;
  const [isNavVisible, setIsNavVisible] = useState(false);
  
  const course = COURSE_INFO[courseId] || COURSE_INFO.CSE;

  const handleHamburgerClick = () => {
    setIsNavVisible(!isNavVisible);
  };

  const getSemesterName = (sem) => {
    return sem === '1' ? 'First Semester' : 'Second Semester';
  };

  const getYearName = (yr) => {
    const yearNames = { '1': 'First', '2': 'Second', '3': 'Third', '4': 'Fourth' };
    return yearNames[yr] || yr;
  };

  return (
    <div className="subject-list-page">
      {/* Modern Header */}
      <header className="modern-header">
        <div className="header-background">
          <div className="header-overlay"></div>
        </div>
        <div className="container">
          <div className="header-content">
            <Link to={`/course/${courseId}`} className="back-button">
              <ArrowLeft size={20} />
              <span>Back to Course</span>
            </Link>
            
            <div className="course-info">
              <div className="course-icon-large">
                {course.icon}
              </div>
              <div className="course-details">
                <h1>{course.name}</h1>
                <div className="semester-info">
                  <div className="info-badge">
                    <GraduationCap size={16} />
                    <span>{getYearName(year)} Year</span>
                  </div>
                  <div className="info-badge">
                    <BookOpen size={16} />
                    <span>{getSemesterName(semester)}</span>
                  </div>
                  <div className="info-badge">
                    <Users size={16} />
                    <span>{theory.length + labs.length} Subjects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="modern-nav">
        <div className="container">
          <div className="nav-content">
            <div className="nav-brand">
              <BookOpen size={24} />
              <span>EduZenith</span>
            </div>
            
            <div className="hamburger" onClick={handleHamburgerClick}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            
            <ul className={`nav-links ${isNavVisible ? 'show' : ''}`}>
              <li><Link to="/">Home</Link></li>
              <li><Link to={`/course/${courseId}`}>{courseId}</Link></li>
              <li><span className="current-page">Subjects</span></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* Theory Subjects Section */}
          {theory.length > 0 && (
            <section className="subjects-section">
              <div className="section-header">
                <div className="section-icon">
                  <BookOpen size={24} />
                </div>
                <div className="section-info">
                  <h2>Theory Subjects</h2>
                  <p>Core theoretical courses for {getYearName(year)} Year, {getSemesterName(semester)}</p>
                </div>
                <div className="subject-count">
                  {theory.length} Subjects
                </div>
              </div>
              
              <div className="subjects-grid">
                {theory.map((subject, index) => (
                  <div key={index} className="subject-card theory">
                    <div className="card-header">
                      <div className="subject-icon">
                        <BookOpen size={20} />
                      </div>
                      <div className="subject-type">Theory</div>
                    </div>
                    <div className="card-content">
                      <h3>{subject}</h3>
                      <div className="card-footer">
                        <Link to={`/course/${courseId}/subject/${subject}`} className="btn btn-primary">
                          View Units
                          <ArrowLeft size={16} style={{ transform: 'rotate(180deg)' }} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Lab Subjects Section */}
          {labs.length > 0 && (
            <section className="subjects-section">
              <div className="section-header">
                <div className="section-icon">
                  <FlaskConical size={24} />
                </div>
                <div className="section-info">
                  <h2>Laboratory Subjects</h2>
                  <p>Practical and laboratory courses for hands-on learning</p>
                </div>
                <div className="subject-count">
                  {labs.length} Labs
                </div>
              </div>
              
              <div className="subjects-grid">
                {labs.map((lab, index) => (
                  <div key={index} className="subject-card lab">
                    <div className="card-header">
                      <div className="subject-icon">
                        <FlaskConical size={20} />
                      </div>
                      <div className="subject-type">Laboratory</div>
                    </div>
                    <div className="card-content">
                      <h3>{lab}</h3>
                      <div className="card-footer">
                        <Link to={`/course/${courseId}/subject/${lab}`} className="btn btn-accent">
                          View Experiments
                          <ArrowLeft size={16} style={{ transform: 'rotate(180deg)' }} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="modern-footer">
        <div className="container">
          <p>&copy; 2024 EduZenith. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SubjectListPage;