import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, BookOpen, FileText, Clock, Target } from 'lucide-react';
import { COURSE_INFO } from '../constants/courses';
import { SUBJECT_DETAILS } from '../constants/subjects';

const SubjectDetailPage = () => {
  const { courseId, subjectName } = useParams();
  const units = SUBJECT_DETAILS[subjectName] || [];

  const getSubjectType = (name) => {
    if (name.toLowerCase().includes('lab') || name.toLowerCase().includes('laboratory')) {
      return 'Laboratory';
    }
    return 'Theory';
  };

  const getUnitNumber = (unit) => {
    const match = unit.match(/Unit (\d+):/);
    return match ? match[1] : '1';
  };

  const getUnitTitle = (unit) => {
    return unit.replace(/Unit \d+:\s*/, '');
  };

  return (
    <div className="subject-detail-page">
      {/* Modern Header */}
      <header className="subject-header">
        <div className="header-background">
          <div className="header-overlay"></div>
        </div>
        <div className="container">
          <div className="header-content">
            <Link to={`/course/${courseId}/subjects?year=1&semester=1`} className="back-button">
              <ArrowLeft size={20} />
              <span>Back to Subjects</span>
            </Link>
            
            <div className="subject-info">
              <div className="subject-icon-large">
                {getSubjectType(subjectName) === 'Laboratory' ? '🧪' : '📚'}
              </div>
              <div className="subject-details">
                <div className="subject-type-badge">
                  {getSubjectType(subjectName)}
                </div>
                <h1>{subjectName}</h1>
                <div className="subject-meta">
                  <div className="meta-item">
                    <Target size={16} />
                    <span>{units.length} Units</span>
                  </div>
                  <div className="meta-item">
                    <Clock size={16} />
                    <span>Course: {courseId}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Breadcrumb */}
      <nav className="breadcrumb-nav">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to={`/course/${courseId}`}>{courseId}</Link>
            <span>/</span>
            <span className="current">Units</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          <div className="content-header">
            <div className="content-info">
              <h2>Course Units</h2>
              <p>Explore the comprehensive curriculum structure for {subjectName}</p>
            </div>
            <div className="units-count">
              {units.length} Units Available
            </div>
          </div>

          {units.length > 0 ? (
            <div className="units-grid">
              {units.map((unit, index) => (
                <div key={index} className="unit-card">
                  <div className="unit-header">
                    <div className="unit-number">
                      {getUnitNumber(unit)}
                    </div>
                    <div className="unit-icon">
                      <FileText size={20} />
                    </div>
                  </div>
                  
                  <div className="unit-content">
                    <h3>{getUnitTitle(unit)}</h3>
                    <div className="unit-meta">
                      <span className="unit-type">
                        {getSubjectType(subjectName) === 'Laboratory' ? 'Experiment' : 'Theory Unit'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="unit-footer">
                    <Link 
                      to={`/course/${courseId}/subject/${subjectName}/unit/${unit}`}
                      className="btn btn-primary"
                    >
                      <BookOpen size={16} />
                      View Materials
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">📚</div>
              <h3>No Units Available</h3>
              <p>Units for this subject will be available soon. Please check back later.</p>
            </div>
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

export default SubjectDetailPage;