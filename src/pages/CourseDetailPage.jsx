import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { BookOpen, Clock, ArrowRight, GraduationCap } from 'lucide-react';
import { COURSE_INFO } from '../constants/courses';

const years = [
  { value: '1', label: 'First Year', description: 'Foundation courses and basic engineering principles' },
  { value: '2', label: 'Second Year', description: 'Core engineering subjects and specialization introduction' },
  { value: '3', label: 'Third Year', description: 'Advanced topics and practical applications' },
  { value: '4', label: 'Fourth Year', description: 'Specialization and project work' }
];

const semesters = [
  { value: '1', label: 'First Semester', description: 'Odd semester courses' },
  { value: '2', label: 'Second Semester', description: 'Even semester courses' }
];

const CourseDetailPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');

  const course = COURSE_INFO[courseId] || COURSE_INFO.CSE;

  const handleYearChange = (selectedYear) => {
    setYear(selectedYear);
    setSemester(''); // Reset semester when year changes
  };

  const handleSemesterChange = (selectedSemester) => {
    setSemester(selectedSemester);
  };

  const handleViewSubjects = () => {
    if (year && semester) {
      navigate(`/course/${courseId}/subjects?year=${year}&semester=${semester}`);
    } else {
      alert('Please select both year and semester to continue.');
    }
  };

  return (
    <div className="course-detail-page">
      <Header />
      
      {/* Course Hero Section */}
      <section className="course-hero">
        <div className="container">
          <div className="course-hero-content">
            <div className="course-icon-large">
              {course.icon}
            </div>
            <h1>{course.name}</h1>
            <p className="course-description">{course.description}</p>
            
            <div className="course-stats">
              <div className="stat-item">
                <Clock size={20} />
                <span>{course.duration}</span>
              </div>
              <div className="stat-item">
                <BookOpen size={20} />
                <span>{course.totalSubjects} Subjects</span>
              </div>
              <div className="stat-item">
                <GraduationCap size={20} />
                <span>Bachelor's Degree</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="course-highlights">
        <div className="container">
          <h2>What You'll Learn</h2>
          <div className="highlights-grid">
            {course.highlights.map((highlight, index) => (
              <div key={index} className="highlight-item">
                <div className="highlight-icon">✓</div>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Section */}
      <section className="selection-section">
        <div className="container">
          <div className="selection-content">
            <div className="selection-header">
              <h2>Select Your Academic Path</h2>
              <p>Choose your year and semester to access relevant course materials and subjects</p>
            </div>

            {/* Year Selection */}
            <div className="selection-group">
              <h3>Select Academic Year</h3>
              <div className="options-grid">
                {years.map((yearOption) => (
                  <div
                    key={yearOption.value}
                    className={`option-card ${year === yearOption.value ? 'selected' : ''}`}
                    onClick={() => handleYearChange(yearOption.value)}
                  >
                    <div className="option-header">
                      <span className="option-number">{yearOption.value}</span>
                      <h4>{yearOption.label}</h4>
                    </div>
                    <p>{yearOption.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Semester Selection */}
            {year && (
              <div className="selection-group">
                <h3>Select Semester</h3>
                <div className="options-grid semester-grid">
                  {semesters.map((semesterOption) => (
                    <div
                      key={semesterOption.value}
                      className={`option-card ${semester === semesterOption.value ? 'selected' : ''}`}
                      onClick={() => handleSemesterChange(semesterOption.value)}
                    >
                      <div className="option-header">
                        <span className="option-number">{semesterOption.value}</span>
                        <h4>{semesterOption.label}</h4>
                      </div>
                      <p>{semesterOption.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Button */}
            {year && semester && (
              <div className="action-section">
                <button onClick={handleViewSubjects} className="btn btn-primary btn-lg">
                  View Subjects
                  <ArrowRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="career-section">
        <div className="container">
          <h2>Career Opportunities</h2>
          <div className="career-grid">
            {course.careerPaths.map((career, index) => (
              <div key={index} className="career-card">
                <div className="career-icon">🎯</div>
                <h4>{career}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetailPage;