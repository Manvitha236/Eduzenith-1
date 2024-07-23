import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';
// import {Alert} from 'react-alert'
// import CourseDetail from './CourseDetail';
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
      theory: ['Engineering Physics', 'Mathematical Methods', 'Basic Electrical and Electronics Engineering', 'Engineering Mechanics', 'Engineering Geology', 'Environmental Science'],
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
      theory: ['Differential Equations and Multivariable calculus', 'Engineering Physics', 'Signals and Systems', 'Introduction to Latest Technical Advancements', 'Programming & Data Structures'],
      labs: [' Engineering Physics Lab','Electrical Technology Lab','Introduction to Latest Technical Advancements','Programming & Data Structures Lab']
    },
    '1-2': {
      theory: ['Mathematical Methods', 'Object Oriented Programming', 'Electronic Devices and Circuits', 'Network Theory', 'Engineering Graphics and Design'],
      labs: ['Object Oriented Programming Lab','Computational Lab','English-Language Communication skills Lab-1','Electronic Devices and Circuits Lab']
    },
    '2-1': {
      theory: ['Probability & Random Variables', 'Analog Electronic Circuits', 'Digital Logic Design', 'Digital Signal Processing', 'Control Systems'],
      labs: ['Internet of Things Lab','Analog Electronic Circuits Lab','Digital Logic Design Lab','Digital Signal Processing Lab']
    },
    '2-2': {
      theory: ['Communication Systems-1', 'Digital System Design', 'Linear Integrated Circuits', 'Electromagnetic Waves & Guided Media'],
      labs: ['Communication Systems-1 Lab','Digital System Design Lab','Linear Integrated Circuits Lab']
    },
    '3-1': {
      theory: ['Computer Networks', 'Computer Organization & Architecture', 'Communication Systems- 2'],
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
  const subjectsForSemester = subjects[courseId][key] || { theory: [], labs: [] };
  const { theory, labs } = subjectsForSemester;
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleHamburgerClick = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div>
      <header>
        <div className="header-content">
          <h1>{courseId} Subjects</h1>
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
          <li><Link to={`/course/${courseId}`}>{courseId}</Link></li>
        </ul>
      </nav>
      <main>
        <div className="introduction">
          <h2>Subjects for Year {year}, Semester {semester}</h2>
        </div>
        <h3>Theory Subjects</h3>

        <div className="branches">
          
          
          {theory.map((subject, index) => (
            <div key={index} className="card">
              <div className="card-content">
              <Link to={`/course/${courseId}/subject/${subject}`}>
                  <h4>{subject}</h4>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <h3>Lab Subjects</h3>
        <div className="branches">
          
          {labs.map((lab, index) => (
            <div key={index} className="card">
              <div className="card-content">
              <Link to={`/course/${courseId}/subject/${lab}`}>
                  <h4>{lab}</h4>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p class="fc">&copy; 2024 EduZenith. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SubjectList;