import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';
import { ArrowLeft, BookOpen, FlaskConical, GraduationCap, Users } from 'lucide-react';
import './styles.css';

const subjects = {
  CSE: {
    '1-1': {
      theory: ['Calculus and Linear Algebra', 'Basic Electrical and Electronics Engineering', 'Problem Solving and Programming Through C', 'Engineering Graphics & Computer Drafting', 'Indian Constitution'],
      labs: ['English-Language Communication Skills Lab-I','BEEE Lab','PSPC Lab']
    },
    '1-2': {
      theory: ['Data Structures', 'Discrete Mathematics', 'Engineering Physics', 'Managerial Economics and Finance Analysis', 'Object Oriented Programming through Java', 'Environmental Science'],
      labs: ['Engineering Physics Lab','OOPS Lab','Data Structures Lab']
    },
    '2-1': {
      theory: ['Probability and Statistics', 'Digital Logic Design', 'Design & Analysis of Algorithms', 'Database Management Systems', 'Formal Languages & Automata Theory'],
      labs: ['Design & Analysis of Algorithms Lab','Digital Logic Design Lab','Database Management Systems Lab']
    },
    '2-2': {
      theory: ['Introduction to Operation Research', 'Computer Organization & Architecture', 'Data Science with Python', 'Web Technologies', 'Compiler Design'],
      labs: ['Computer Organization & Architecture Lab','Data Science with Python Lab','Web Technologies Lab']
    },
    '3-1': {
      theory: ['Operating System', 'Computer Networks', 'Software Engineering', 'Mathematical Foundations for Data Science', 'Data Mining'],
      labs: ['Operating System Lab','Computer Networks Lab','Software Engineering Lab','English-Language Communication Skills Lab-II']
    },
    '3-2': {
      theory: ['Cryptography and Networks Security', 'Artificial Intelligence'],
      labs: ['English-Language Communication Skills Lab-III']
    },
    '4-1': {
      theory: ['Machine Learning'],
      labs: []
    }
  },
  CE: {
    '1-1': {
      theory: ['Engineering Chemistry', 'Differential Equations and Multivariable Calculus', 'Programming and Data Structures', 'Engineering Graphics and Computer Drafting', 'Aptitude and Reasoning'],
      labs: ['Engineering Chemistry Lab','English Language Communication Skills Lab-I','Programming and Data Structures Lab']
    },
    '1-2': {
      theory: ['Engineering Physics', 'Mathematical Methods', 'Basic electrical and electronics engineering', 'Engineering Mechanics', 'Engineering Geology', 'Environmental Science'],
      labs: ['Engineering Physics Lab','Workshop']
    },
    '2-1': {
      theory: ['Management Economics and Financial Analysis', 'Building Materials and Construction', 'Concrete Technology', 'Mechanics of Fluids', 'Mechanics of Materials-I', 'Indian Constitution', 'Surveying-I'],
      labs: ['Mechanics of Materials Lab','Surveying Lab']
    },
    '2-2': {
      theory: ['Hydraulics Engineering', 'Mechanics of Materials-II', 'Soil Mechanics', 'Structural Analysis', 'Surveying-II', 'Water Resources Engineering'],
      labs: ['Concrete Technology Lab','Hydraulics Engineering Lab']
    },
    '3-1': {
      theory: ['Advanced Structural Analysis', 'Design of Reinforced concrete Structures', 'Environmental Engineering-I', 'Estimation and Costing', 'Transportation Engineering-I'],
      labs: ['English Language Communication Skills Lab-II','Soil Mechanics Lab','Transportation Engineering Lab']
    },
    '3-2': {
      theory: ['Design of Steel Structures', 'Environmental Engineering-II', 'Foundation Engineering', 'Transportation Engineering-II'],
      labs: ['English Language Communication Skills Lab-III','Environmental Engineering Lab']
    }
  },
  EEE: {
    '1-1': {
      theory: ['Differential Equations and Multivariable calculus', 'Engineering Physics', 'Engineering Graphics & Computer Drafting', 'Electrical Technology', 'Introduction to Latest Technical Advancements', 'Programming & Data Structures'],
      labs: ['Engineering Physics Lab','Electrical Technology Lab','Programming & Data Structures Lab']
    },
    '1-2': {
      theory: ['Mathematical Methods', 'Digital Logic Design', 'Electronics Devices and Circuits', 'Network Theory', 'Introduction to AI/ML'],
      labs: ['Digital Logic Design Lab','English Language Communication Skills Lab-I','Electronics Devices and Circuits Lab']
    },
    '2-1': {
      theory: ['Probability & Random Variables', 'Analog Electronic Circuits', 'Object Oriented Programming', 'Signals & Systems', 'Electrical Machines'],
      labs: ['Internet of Things Lab','Analog Electronic Circuits Lab','Object Oriented Programming Lab','Electrical Machines Lab']
    },
    '2-2': {
      theory: ['Power Systems-I', 'Machine Learning', 'Control Systems', 'Linear Integrated Circuits', 'Power Electronics'],
      labs: ['Linear Integrated Circuits Lab','Control Systems Lab','Power Electronics Lab']
    },
    '3-1': {
      theory: ['Digital Signal Processing', 'Power Systems-II', 'Electrical Vehicles', 'Embedded Systems', 'Product Design & Innovation'],
      labs: ['English Language communication skills Lab-II','Embedded Systems Lab','Electrical Vehicles Lab','Power Systems Lab']
    },
    '3-2': {
      theory: [],
      labs: ['English Language Communication skills lab-III', 'Indian Constitution']
    },
    '4-1': {
      theory: ['Environmental Science'],
      labs: []
    }
  },
  ECE: {
    '1-1': {
      theory: ['Differential Equations and Multivariable calculus', 'Engineering physics', 'Signals and Systems', 'Introduction to Latest Technical Advancements', 'Programming & Data Structures'],
      labs: [' Engineering Physics Lab','Electrical Technology Lab','Introduction to Latest Technical Advancements','Programming & Data Structures Lab']
    },
    '1-2': {
      theory: ['Mathematical Methods', 'Object Oriented Programming', 'Electronic Devices and Circuits', 'Network Theory', 'Engineering Graphics and Design'],
      labs: ['Object Oriented Programming Lab','Computational Lab','English-Language Communication skills Lab-1','Electronic Devices and Circuits Lab']
    },
    '2-1': {
      theory: ['Probability & Random Variables', 'Analog Electronic Circuits', 'Digital logic design', 'Digital Signal Processing', 'Control Systems'],
      labs: ['Internet of Things Lab','Analog Electronic Circuits Lab','Digital Logic Design Lab','Digital Signal Processing Lab']
    },
    '2-2': {
      theory: ['Communication Systems-1', 'Digital System Design', 'Linear Integrated Circuits', 'Electromagnetic Waves & Guided Media'],
      labs: ['Communication Systems-1 Lab','Digital System Design Lab','Linear Integrated Circuits Lab']
    },
    '3-1': {
      theory: ['Computer networks', 'Computer Organization & Architecture', 'Communication Systems- 2'],
      labs: ['English-Language Communication skills Lab-II',' Communication Systems Lab-II','Microprocessors,Microcontrollers & Computer Networks Lab','Radio Frequency & Microwave Engg Lab']
    },
    '3-2': {
      theory: ['Product Design & Innovation'],
      labs: ['English-Language Communication skills Lab-III']
    },
    '4-1': {
      theory: ['Environmental Science'],
      labs: []
    }
  },
  ME: {
    '1-1': {
      theory: ['Differential Equations and Multivariable Calculus', 'Engineering Physics', 'Basic Electrical and Electronics Engineering', 'Engineering Chemistry'],
      labs: ['English Language Communication Skills Lab-I']
    },
    '1-2': {
      theory: ['Mathematical Methods', 'Engineering Mechanics', 'Material Science & Metallurgy', 'Programming and Data Structures', 'Engineering Graphics and Computer Drafting', 'Environmental Science'],
      labs: []
    },
    '2-1': {
      theory: ['Transform Calculus', 'Kinematics of Machinery', 'Thermodynamics', 'Mechanics of Solids', 'Manufacturing Processes'],
      labs: []
    },
    '2-2': {
      theory: ['Design of Machine Elements', 'Dynamics of Machinery', 'Fluid Mechanics & Hydraulic Machinery', 'Metal Cutting and Machine Tools', 'Probability and Statistics', 'Indian Constitution'],
      labs: []
    },
    '3-1': {
      theory: ['Heat Transfer', 'Design of Transmission Elements', 'Applied Thermodynamics', 'Metrology and Mechanical Measurements'],
      labs: ['English Language Communication Skills Lab-II']
    },
    '3-2': {
      theory: ['Operations Research', 'Finite Element Method', 'Managerial Economics and Financial Analysis'],
      labs: ['English Language Communication Skills Lab-III']
    }
  }
};

const courseInfo = {
  CSE: { name: 'Computer Science Engineering', icon: '💻', color: 'primary' },
  ECE: { name: 'Electronics and Communication Engineering', icon: '📡', color: 'accent' },
  EEE: { name: 'Electrical and Electronics Engineering', icon: '⚡', color: 'warning' },
  CE: { name: 'Civil Engineering', icon: '🏗️', color: 'success' },
  ME: { name: 'Mechanical Engineering', icon: '⚙️', color: 'secondary' }
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
  const subjectsForSemester = subjects[courseId][key] || { theory: [], labs: [] };
  const { theory, labs } = subjectsForSemester;
  const [isNavVisible, setIsNavVisible] = useState(false);
  
  const course = courseInfo[courseId] || courseInfo.CSE;

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

      <style jsx>{`
        .subject-list-page {
          min-height: 100vh;
          background: var(--bg-primary);
          color: var(--text-primary);
        }

        /* Modern Header */
        .modern-header {
          position: relative;
          background: var(--gradient-hero);
          color: white;
          padding: var(--space-12) 0 var(--space-8);
          overflow: hidden;
        }

        .header-background {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
          background-size: 100px 100px;
        }

        .header-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.1);
        }

        .header-content {
          position: relative;
          z-index: 2;
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-size: var(--text-sm);
          margin-bottom: var(--space-6);
          padding: var(--space-2) var(--space-4);
          border-radius: var(--radius-lg);
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all var(--transition-fast);
        }

        .back-button:hover {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }

        .course-info {
          display: flex;
          align-items: center;
          gap: var(--space-6);
        }

        .course-icon-large {
          font-size: 4rem;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
        }

        .course-details h1 {
          font-size: var(--text-4xl);
          font-weight: 800;
          margin-bottom: var(--space-4);
          color: white;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .semester-info {
          display: flex;
          gap: var(--space-4);
          flex-wrap: wrap;
        }

        .info-badge {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-4);
          background: rgba(255, 255, 255, 0.15);
          border-radius: var(--radius-full);
          font-size: var(--text-sm);
          font-weight: 500;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* Modern Navigation */
        .modern-nav {
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-primary);
          box-shadow: var(--shadow-sm);
          position: sticky;
          top: 0;
          z-index: var(--z-sticky);
        }

        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--space-4) 0;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--text-xl);
          font-weight: 700;
          color: var(--primary-600);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: var(--space-6);
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          padding: var(--space-2) var(--space-3);
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }

        .nav-links a:hover {
          color: var(--primary-600);
          background: var(--primary-50);
        }

        .current-page {
          color: var(--primary-600);
          font-weight: 600;
          padding: var(--space-2) var(--space-3);
          background: var(--primary-50);
          border-radius: var(--radius-md);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          padding: var(--space-2);
        }

        .hamburger div {
          width: 25px;
          height: 3px;
          background-color: var(--text-primary);
          margin: 3px 0;
          transition: 0.3s;
          border-radius: var(--radius-sm);
        }

        /* Main Content */
        .main-content {
          padding: var(--space-12) 0;
        }

        .subjects-section {
          margin-bottom: var(--space-16);
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: var(--space-4);
          margin-bottom: var(--space-8);
          padding: var(--space-6);
          background: var(--bg-card);
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-color);
          border: 1px solid var(--border-primary);
        }

        .section-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          background: var(--primary-100);
          color: var(--primary-600);
          border-radius: var(--radius-xl);
          flex-shrink: 0;
        }

        .section-info {
          flex: 1;
        }

        .section-info h2 {
          font-size: var(--text-2xl);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--space-1);
        }

        .section-info p {
          color: var(--text-secondary);
          margin: 0;
        }

        .subject-count {
          padding: var(--space-2) var(--space-4);
          background: var(--primary-100);
          color: var(--primary-700);
          border-radius: var(--radius-full);
          font-size: var(--text-sm);
          font-weight: 600;
        }

        .subjects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--space-6);
        }

        .subject-card {
          background: var(--bg-card);
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-color);
          border: 1px solid var(--border-primary);
          transition: all var(--transition-normal);
          overflow: hidden;
          position: relative;
        }

        .subject-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--primary-500);
          transform: scaleX(0);
          transition: transform var(--transition-normal);
        }

        .subject-card.lab::before {
          background: var(--accent-500);
        }

        .subject-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
        }

        .subject-card:hover::before {
          transform: scaleX(1);
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--space-4) var(--space-6);
          background: var(--bg-tertiary);
          border-bottom: 1px solid var(--border-primary);
        }

        .subject-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: var(--primary-100);
          color: var(--primary-600);
          border-radius: var(--radius-lg);
        }

        .subject-card.lab .subject-icon {
          background: var(--accent-100);
          color: var(--accent-600);
        }

        .subject-type {
          font-size: var(--text-xs);
          font-weight: 600;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .card-content {
          padding: var(--space-6);
        }

        .card-content h3 {
          font-size: var(--text-lg);
          font-weight: 600;
          color: var(--text-primary);
          line-height: var(--leading-tight);
          margin-bottom: var(--space-4);
        }

        .card-footer {
          margin-top: var(--space-6);
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-3) var(--space-6);
          font-size: var(--text-sm);
          font-weight: 500;
          border: none;
          border-radius: var(--radius-lg);
          text-decoration: none;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .btn-primary {
          background: var(--primary-600);
          color: white;
        }

        .btn-primary:hover {
          background: var(--primary-700);
          transform: translateY(-1px);
        }

        .btn-accent {
          background: var(--accent-600);
          color: white;
        }

        .btn-accent:hover {
          background: var(--accent-700);
          transform: translateY(-1px);
        }

        /* Footer */
        .modern-footer {
          background: var(--bg-card);
          color: var(--text-primary);
          padding: var(--space-8) 0;
          text-align: center;
          margin-top: var(--space-20);
          border-top: 1px solid var(--border-primary);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }

          .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--bg-card);
            flex-direction: column;
            padding: var(--space-4);
            box-shadow: var(--shadow-lg);
            border-top: 1px solid var(--border-primary);
          }

          .nav-links.show {
            display: flex;
          }

          .course-info {
            flex-direction: column;
            text-align: center;
            gap: var(--space-4);
          }

          .course-details h1 {
            font-size: var(--text-3xl);
          }

          .semester-info {
            justify-content: center;
          }

          .section-header {
            flex-direction: column;
            text-align: center;
            gap: var(--space-3);
          }

          .subjects-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .course-icon-large {
            font-size: 3rem;
          }

          .course-details h1 {
            font-size: var(--text-2xl);
          }

          .info-badge {
            font-size: var(--text-xs);
          }
        }
      `}</style>
    </div>
  );
};

export default SubjectList;