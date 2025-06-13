import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import { BookOpen, Calendar, Users, Clock, ArrowRight, GraduationCap } from 'lucide-react';

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');

  const courseInfo = {
    CSE: {
      name: 'Computer Science Engineering',
      description: 'Dive deep into the world of computing, programming, and software development. Learn cutting-edge technologies including AI, machine learning, data structures, algorithms, and modern web development.',
      icon: '💻',
      color: 'primary',
      highlights: ['Programming Languages', 'Data Structures & Algorithms', 'Machine Learning', 'Web Development', 'Database Systems'],
      duration: '4 Years',
      totalSubjects: '25+',
      careerPaths: ['Software Engineer', 'Data Scientist', 'AI/ML Engineer', 'Full Stack Developer']
    },
    ECE: {
      name: 'Electronics and Communication Engineering',
      description: 'Explore the fascinating world of electronics, communication systems, and signal processing. Master digital circuits, microprocessors, wireless technologies, and modern communication protocols.',
      icon: '📡',
      color: 'accent',
      highlights: ['Digital Circuits', 'Signal Processing', 'Communication Systems', 'Microprocessors', 'Wireless Technology'],
      duration: '4 Years',
      totalSubjects: '22+',
      careerPaths: ['Electronics Engineer', 'Communication Engineer', 'RF Engineer', 'Embedded Systems Developer']
    },
    EEE: {
      name: 'Electrical and Electronics Engineering',
      description: 'Master the principles of electrical systems, power electronics, control systems, and renewable energy technologies. Build expertise in both electrical and electronic systems.',
      icon: '⚡',
      color: 'warning',
      highlights: ['Power Systems', 'Control Systems', 'Power Electronics', 'Renewable Energy', 'Electric Machines'],
      duration: '4 Years',
      totalSubjects: '20+',
      careerPaths: ['Electrical Engineer', 'Power Systems Engineer', 'Control Systems Engineer', 'Renewable Energy Specialist']
    },
    CE: {
      name: 'Civil Engineering',
      description: 'Learn to design, build, and maintain the infrastructure that shapes our world. Study structural analysis, construction management, transportation systems, and sustainable development.',
      icon: '🏗️',
      color: 'success',
      highlights: ['Structural Analysis', 'Construction Management', 'Transportation Engineering', 'Geotechnical Engineering', 'Environmental Engineering'],
      duration: '4 Years',
      totalSubjects: '18+',
      careerPaths: ['Structural Engineer', 'Construction Manager', 'Transportation Engineer', 'Environmental Engineer']
    },
    ME: {
      name: 'Mechanical Engineering',
      description: 'Explore the principles of mechanics, thermodynamics, and manufacturing. Design and analyze mechanical systems, from tiny components to large industrial machinery.',
      icon: '⚙️',
      color: 'secondary',
      highlights: ['Thermodynamics', 'Fluid Mechanics', 'Machine Design', 'Manufacturing Processes', 'Heat Transfer'],
      duration: '4 Years',
      totalSubjects: '19+',
      careerPaths: ['Mechanical Engineer', 'Design Engineer', 'Manufacturing Engineer', 'Automotive Engineer']
    }
  };

  const course = courseInfo[courseId] || courseInfo.CSE;

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

      <style jsx>{`
        .course-detail-page {
          min-height: 100vh;
        }

        .course-hero {
          padding: var(--space-20) 0;
          background: linear-gradient(135deg, var(--${course.color}-600) 0%, var(--${course.color}-800) 100%);
          color: white;
          text-align: center;
        }

        .course-hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .course-icon-large {
          font-size: 5rem;
          margin-bottom: var(--space-6);
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
        }

        .course-hero h1 {
          font-size: var(--text-5xl);
          font-weight: 800;
          margin-bottom: var(--space-6);
          color: white;
        }

        .course-description {
          font-size: var(--text-xl);
          line-height: var(--leading-relaxed);
          margin-bottom: var(--space-8);
          opacity: 0.95;
        }

        .course-stats {
          display: flex;
          justify-content: center;
          gap: var(--space-8);
          flex-wrap: wrap;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--text-base);
          font-weight: 500;
        }

        .course-highlights {
          padding: var(--space-20) 0;
          background: white;
        }

        .course-highlights h2 {
          text-align: center;
          font-size: var(--text-3xl);
          font-weight: 700;
          color: var(--secondary-900);
          margin-bottom: var(--space-12);
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--space-4);
          max-width: 800px;
          margin: 0 auto;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-4);
          background: var(--${course.color}-50);
          border-radius: var(--radius-lg);
          border: 1px solid var(--${course.color}-200);
        }

        .highlight-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          background: var(--${course.color}-600);
          color: white;
          border-radius: var(--radius-full);
          font-size: var(--text-sm);
          font-weight: 600;
        }

        .selection-section {
          padding: var(--space-20) 0;
          background: var(--secondary-50);
        }

        .selection-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .selection-header {
          text-align: center;
          margin-bottom: var(--space-12);
        }

        .selection-header h2 {
          font-size: var(--text-3xl);
          font-weight: 700;
          color: var(--secondary-900);
          margin-bottom: var(--space-4);
        }

        .selection-header p {
          font-size: var(--text-lg);
          color: var(--secondary-600);
        }

        .selection-group {
          margin-bottom: var(--space-12);
        }

        .selection-group h3 {
          font-size: var(--text-2xl);
          font-weight: 600;
          color: var(--secondary-900);
          margin-bottom: var(--space-6);
          text-align: center;
        }

        .options-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-4);
        }

        .semester-grid {
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }

        .option-card {
          background: white;
          border: 2px solid var(--secondary-200);
          border-radius: var(--radius-xl);
          padding: var(--space-6);
          cursor: pointer;
          transition: all var(--transition-normal);
          text-align: center;
        }

        .option-card:hover {
          border-color: var(--${course.color}-300);
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .option-card.selected {
          border-color: var(--${course.color}-600);
          background: var(--${course.color}-50);
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .option-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-3);
          margin-bottom: var(--space-3);
        }

        .option-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: var(--${course.color}-600);
          color: white;
          border-radius: var(--radius-full);
          font-weight: 600;
          font-size: var(--text-sm);
        }

        .option-card h4 {
          font-size: var(--text-lg);
          font-weight: 600;
          color: var(--secondary-900);
          margin: 0;
        }

        .option-card p {
          color: var(--secondary-600);
          font-size: var(--text-sm);
          margin: 0;
        }

        .action-section {
          text-align: center;
          margin-top: var(--space-8);
          animation: slideUp 0.5s ease-out;
        }

        .career-section {
          padding: var(--space-20) 0;
          background: white;
        }

        .career-section h2 {
          text-align: center;
          font-size: var(--text-3xl);
          font-weight: 700;
          color: var(--secondary-900);
          margin-bottom: var(--space-12);
        }

        .career-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-6);
          max-width: 800px;
          margin: 0 auto;
        }

        .career-card {
          background: var(--neutral-50);
          border: 1px solid var(--secondary-200);
          border-radius: var(--radius-xl);
          padding: var(--space-6);
          text-align: center;
          transition: all var(--transition-normal);
        }

        .career-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
          background: white;
        }

        .career-icon {
          font-size: 2rem;
          margin-bottom: var(--space-3);
        }

        .career-card h4 {
          font-size: var(--text-base);
          font-weight: 600;
          color: var(--secondary-900);
          margin: 0;
        }

        @media (max-width: 768px) {
          .course-hero h1 {
            font-size: var(--text-4xl);
          }

          .course-stats {
            gap: var(--space-4);
          }

          .options-grid {
            grid-template-columns: 1fr;
          }

          .semester-grid {
            grid-template-columns: 1fr;
          }

          .highlights-grid {
            grid-template-columns: 1fr;
          }

          .career-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .career-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default CourseDetail;