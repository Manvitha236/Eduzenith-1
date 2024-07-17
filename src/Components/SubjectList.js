import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './styles.css';

const subjects = {
  CSE: {
    '1-1': ['Calculus and Linear Algebra', 'Basic Electrical and Electronics Engineering', 'Problem Solving and Programming Through C ', 'Engineering Graphics & Computer Drafting ','English-Language communication Skills Lab-I','Indian Constitution'],
    '1-2': ['Data Structures', 'Discrete Mathematics', 'Engineering Physics', 'Managerial Economics and Finance Analysis','Object Oriented Programming through Java','Environmental Science'],
    '2-1': ['Probability and Statistics','Digital Logic Design','Design & Analysis of Algorithms','Database Management Systems','Formal Languages & Automata Theory'],
    '2-2':['Introduction to Operation Research','Computer Organization & Architecture ','Data Science with Python','Web Technologies','Compiler Design'],
    '3-1':['Operating System','Computer Networks ','Software Engineering ','Mathematical Foundations for Data Science ','English-Language communication Skills Lab- II','Data Mining'],
    '3-2': ['Cryptography and Networks Security','Artificial Intelligence','English-Language communication Skills Lab-I -III'],
    '4-1':['Machine Learning']
  },
  CE:{
    '1-1':['Engineering Chemistry','Differential Equations and Multivariable Calculus','Programming and Data Structures','Engineering Graphics and Computer Drafting','Aptitude and Reasoning'],
    '1-2':['Engineering Physics','Mathematical Methods','Basic Electrical and Electronics Engineering','Engineering Mechanics','Engineering Geology ','Environmental Science'],
    '2-1':['Management Economics and Financial Analysis','Building Materials and Construction','Concrete Technology','Mechanics of Fluids','Mechanics of Materials-I','Indian Constitution','Surveying-I'],
    '2-2':['Hydraulics Engineering ','Mechanics of Materials-II','Soil Mechanics','Structural Analysis','Surveying-II ','Water Resources Engineering'],
    '3-1':['Advanced Structural Analysis','Design of Reinforced concrete Structures','Environmental Engineering-I','Estimation and Costing','Transportation Engineering-I','English Language Communication Skills Lab-II'],
    '3-2':['Design of Steel Structures','Environmental Engineering-II','Foundation Engineering','Transportation Engineering-II','English Language Communication Skills Lab-1']
  },
  EEE:{
    '1-1':['Differential Equations and Multivariable calculus','Engineering Physics','Engineering Graphics & Computer Drafting','Electrical Technology','Introduction to Latest Technical Advancements','Programming & Data Structures '],
    '1-2':['Mathematical Methods','Digital Logic Design ','Electronics Devices and Circuits','Network Theory','Introduction to AI/ML '],
    '2-1':['Probability & Random Variables','Analog Electronic Circuits','Object Oriented Programming','Signals & Systems', 'Electrical Machines'],
    '2-2':['Power Systems-I','Machine Learning','Control Systems ','Linear Integrated Circuits ','Power Electronics '],
    '3-1':['Digital Signal Processing','Power Systems-II ','Electrical Vehicles','Embedded Systems','Product Design & Innovation','English Language communication skills Lab-2'],
    '3-2':['English Language Communication skills lab-3 ','Indian Constitution'],
    '4-1':['Environmental Science']
  },
  ECE:{
    '1-1':['Differential Equations and Multivariable calculus','Engineering Physics','Signals and Systems','Introduction to Latest Technical Advancements','Programming & Data Structures'],
    '1-2':['Mathematical Methods','Object Oriented Programming','Electronic Devices and Circuits','Network Theory','Engineering Graphics and Design'],
    '2-1':['Probability & Random Variables','Analog Electronic Circuits','Digital Logic Design','Digital Signal Processing','Control Systems'],
    '2-2':['Communication Systems-1','Digital System Design','Linear Integrated Circuits','Electromagnetic Waves & Guided Media'],
    '3-1':['Computer Networks','Computer Organization & Architecture','Communication Systems- 2','English-Language Communication skills Lab-2'],
    '3-2':['Product Design & Innovation','English-Language Communication skills Lab-3'],
    '4-1':['Environmental Science']
    },
  ME:{
    '1-1':['Differential Equations and Multivariable Calculus','English Language Communication Skills Lab-I','Engineering Physics','Basic Electrical and Electronics Engineering','Engineering Chemistry'],
    '1-2':['Mathematical Methods','Engineering Mechanics','Material Science & Metallurgy','Programming and Data Structures','Engineering Graphics and Computer Drafting ','Environmental Science'],
    '2-1':['Transform Calculus ','Kinematics of Machinery ','Thermodynamics','Mechanics of Solids','Manufacturing Processes'],
    '2-2':['Design of Machine Elements','Dynamics of Machinery ','Fluid Mechanics & Hydraulic Machinery','Metal Cutting and Machine Tools','Probability and Statistics','Indian Constitution'],
    '3-1':['Heat Transfer','Design of Transmission Elements','Applied Thermodynamics','Metrology and Mechanical Measurements','English Language Communication Skills Lab-II'],
    '3-2':['Operations Research','Finite Element Method','Managerial Economics and Financial Analysis','English Language Communication Skills Lab-III']
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
