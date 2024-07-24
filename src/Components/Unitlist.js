import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './styles.css';

const subjectDetails = {
  'Calculus and Linear Algebra': ['Basics of Calculus', 'Linear Algebra', 'Differential Equations', 'Vector Calculus', 'Applications', 'Advanced Topics'],
  'Basic Electrical and Electronics Engineering': ['Electric Circuits', 'Magnetic Circuits', 'Electrical Machines', 'Semiconductor Devices', 'Digital Electronics', 'Applications'],
  'English-Language Communication Skills Lab-I': ['Experiment 1', 'Experiment 2', 'Experiment 3', 'Experiment 4', 'Experiment 5', 'Experiment 6'],
  'BEEE Lab': ['Experiment 1', 'Experiment 2', 'Experiment 3', 'Experiment 4', 'Experiment 5', 'Experiment 6'],
  // Add other subjects and labs similarly...
};

const SubjectDetail = () => {
  const { courseId, subjectName } = useParams();
  const units = subjectDetails[subjectName] || [];

  return (
    <div>
      <header>
        <div className="header-content">
          <h1>{subjectName}</h1>
        </div>
      </header>
      <main>
        <div className="introduction">
          <h2>{courseId} - Units/Experiments</h2>
        </div>
        <h3>Units/Experiments</h3>
        <div className="units">
          {units.map((unit, index) => (
            <div key={index} className="card">
              <div className="card-content">
                <Link to={`/course/${courseId}/subject/${subjectName}/unit/${unit}`}>
                  <h4>{unit}</h4>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p className="fc">&copy; 2024 EduZenith. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SubjectDetail;