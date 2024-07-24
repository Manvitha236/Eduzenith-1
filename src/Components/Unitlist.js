import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';
const subjectDetails = {
  'Calculus and Linear Algebra': ['Unit 1: Differential equations of first order and first degree', 'Unit 2: Functions of several variables', 'Unit 3: Applications of Functions of several Variable', 'Unit 4:  Linear Algebra', 'Unit 5: Matrix Algebra (Eigen Values and Eigen Vectors)', 'Unit 6: Numerical solution of transcendental equations, Interpolation'],
  'Basic Electrical and Electronics Engineering': ['Unit 1: DC Circuits', 'Unit 2: AC Circuits', 'Unit 3: DC Machines', 'Unit 4: AC Machines', 'Unit 5: Semiconductor Devices', 'Unit 6: Transistors'],
  'Problem Solving and Programming Through C' : ['Unit 1: Introduction to Computer Programming','Unit 2: Conditional Statements and Loops','Unit 3: Arrays and Strings','Unit 4: Functions','Unit 5: Pointers and Dynamic Memory Allocation','Unit 6: Structure, Union and Files'],
  'Engineering Graphics & Computer Drafting ':['Unit 1: Introduction to Engineering drawing ','Unit 2: Introduction to projections','Unit 3: Projection of planes and solids','Unit 4: Sections of solids and Development of Surfaces','Unit 5: Computer Aided Design','Unit 6: Drawing practice with AutoCAD'],
  'Indian Constitution':['Unit 1: Introduction-Constitution','Unit 2: Union Government and its Administration','Unit 3: Election commission','Unit 4: State Government and its Administration','Unit 5: Local Administration','Unit 6: Union Judiciary'],
  // ['Unit 1: ','Unit 2: ','Unit 3: ','Unit 4: ','Unit 5: ','Unit 6: ']
  'Discrete Mathematics':['Unit 1: Propositional logic','Unit 2: Proof techniques','Unit 3: Sets, relations and functions','Unit 4: Introduction to counting','Unit 5: Introduction to Graph Theory','Unit 6: Graph Theory(Continuation)'],
  'Engineering Physics':['Unit 1: ','Unit 2: ','Unit 3: ','Unit 4: ','Unit 5: ','Unit 6: ']
  
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