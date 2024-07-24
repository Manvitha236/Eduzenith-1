import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './styles.css';
const subjectDetails = {
  'Calculus and Linear Algebra': ['Unit 1: Differential equations of first order and first degree', 'Unit 2: Functions of several variables', 'Unit 3: Applications of Functions of several Variable', 'Unit 4:  Linear Algebra', 'Unit 5: Matrix Algebra (Eigen Values and Eigen Vectors)', 'Unit 6: Numerical solution of transcendental equations, Interpolation'],
  'Basic Electrical and Electronics Engineering': ['Unit 1: DC Circuits', 'Unit 2: AC Circuits', 'Unit 3: DC Machines', 'Unit 4: AC Machines', 'Unit 5: Semiconductor Devices', 'Unit 6: Transistors'],
  'Problem Solving and Programming Through C' : ['Unit 1: Introduction to Computer Programming','Unit 2: Conditional Statements and Loops','Unit 3: Arrays and Strings','Unit 4: Functions','Unit 5: Pointers and Dynamic Memory Allocation','Unit 6: Structure, Union and Files'],
  'Engineering Graphics & Computer Drafting ':['Unit 1: Introduction to Engineering drawing ','Unit 2: Introduction to projections','Unit 3: Projection of planes and solids','Unit 4: Sections of solids and Development of Surfaces','Unit 5: Computer Aided Design','Unit 6: Drawing practice with AutoCAD'],
  'Indian Constitution':['Unit 1: Introduction-Constitution','Unit 2: Union Government and its Administration','Unit 3: Election commission','Unit 4: State Government and its Administration','Unit 5: Local Administration','Unit 6: Union Judiciary'],
  
  'Discrete Mathematics':['Unit 1: Propositional logic','Unit 2: Proof techniques','Unit 3: Sets, relations and functions','Unit 4: Introduction to counting','Unit 5: Introduction to Graph Theory','Unit 6: Graph Theory(Continuation)'],
  'Engineering Physics':['Unit 1: Oscillations','Unit 2: Wave Optics','Unit 3: Polarization and LASERS','Unit 4: Holography, and Optical fibers ','Unit 5: Quantum Mechanics','Unit 6: Semiconductor Physics'],
  'Managerial Economics and Financial Analysis':['Unit 1: Introduction','Unit 2: Production','Unit 3: Market Structure','Unit 4: Capital and Capital Budgeting','Unit 5: Financial Accounting','Unit 6: Financial Statements'],
  'Object Oriented Programming through JAVA': ['Unit 1: Introduction','Unit 2: Strings and Data Structures','Unit 3: Inheritance and Interface','Unit 4: File Handling and Exception Handling','Unit 5: Packages and Multithreading','Unit 6: Event Handling and Swings'],
  'Data Structures':['Unit 1: Linked Lists','Unit 2: Stacks and Queues','Unit 3: Sortings, Searching and Hashing','Unit 4: Trees','Unit 5: Trees and Operations','Unit 6: Graphs'],
  'Environmental Science': ['Unit 1: The Multidisciplinary Nature of Environmental Studies and Natural Resources ','Unit 2: Ecosystems','Unit 3:  Biodiversity and It’s Conservation','Unit 4: Environmental Pollution','Unit 5: Social Issues and the Environment','Unit 6: Human Population and the Environment'],
  // ['Unit 1: ','Unit 2: ','Unit 3: ','Unit 4: ','Unit 5: ','Unit 6: ']

  'Probability and Statistics': ['Unit 1: Probability and theorems in Probability ','Unit 2: Probability Distributions','Unit 3: Moment Generating functions','Unit 4: Order Statistics and Central Limit theorem','Unit 5: Sampling Theory','Unit 6: Large Sample Tests'],
  'Formal Languages and Automata Theory': ['Unit 1: Introduction to Automata','Unit 2: Finite Automata ','Unit 3: Regular Languages ','Unit 4: Grammars ','Unit 5: Push Down Automata','Unit 6: Turing Machine & Computability Theory'],
  'Digital Logic Design':['Unit 1: Number systems and Boolean Algebra','Unit 2:Introduction to Combinational Circuits','Unit 3: Combinational Circuits','Unit 4:Introduciton to Sequential Circuits','Unit 5: Sequential Circuits','Unit 6: Synchronous and Asynchronus Counters'],
  'Design & Analysis of Algorithms': ['Unit 1: Introduction','Unit 2: Divide and conquer','Unit 3: Greedy method','Unit 4: Dynamic Programming','Unit 5: Backtracking, Branch and Bound','Unit 6: String Matching, NP-Hard and NP-Complete problems'],
  'Database Management Systems': ['Unit 1: Introduction to database systems and Entity-Relationship data model','Unit 2: Relational algebra and Relational calculus','Unit 3: SQL','Unit 4: Normalization','Unit 5: File Organisation','Unit 6: Transactions']
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