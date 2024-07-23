import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';

const subjectDetails = {
  'Calculus and Linear Algebra': ['Unit 1: Basics of Calculus', 'Unit 2: Linear Algebra', 'Unit 3: Differential Equations', 'Unit 4: Vector Calculus', 'Unit 5: Applications', 'Unit 6: Advanced Topics'],
  'Basic Electrical and Electronics Engineering': ['Unit 1: Electric Circuits', 'Unit 2: Magnetic Circuits', 'Unit 3: Electrical Machines', 'Unit 4: Semiconductor Devices', 'Unit 5: Digital Electronics', 'Unit 6: Applications'],
  // Add other subjects similarly...
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
          <h2>{courseId} - Units</h2>
        </div>
        <h3>Units</h3>
        <div className="units">
          {units.map((unit, index) => (
            <div key={index} className="card">
              <div className="card-content">
                <h4>{unit}</h4>
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