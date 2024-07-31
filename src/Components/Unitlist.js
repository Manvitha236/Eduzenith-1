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
  'Managerial Economics and Financial Analysis':['Unit 1: Introduction to Managerial Economics and Financial Analysis','Unit 2: Production','Unit 3: Market Structure','Unit 4: Capital and Capital Budgeting','Unit 5: Financial Accounting','Unit 6: Financial Statements'],
  'Object Oriented Programming through JAVA': ['Unit 1: Introduction to java','Unit 2: Strings and Data Structures','Unit 3: Inheritance and Interface','Unit 4: File Handling and Exception Handling','Unit 5: Packages and Multithreading','Unit 6: Event Handling and Swings'],
  'Data Structures':['Unit 1: Linked Lists','Unit 2: Stacks and Queues','Unit 3: Sortings, Searching and Hashing','Unit 4: Trees','Unit 5: Trees and Operations','Unit 6: Graphs'],
  'Environmental Science': ['Unit 1: The Multidisciplinary Nature of Environmental Studies and Natural Resources ','Unit 2: Ecosystems','Unit 3:  Biodiversity and It’s Conservation','Unit 4: Environmental Pollution','Unit 5: Social Issues and the Environment','Unit 6: Human Population and the Environment'],
  

  'Probability and Statistics': ['Unit 1: Probability and theorems in Probability ','Unit 2: Probability Distributions','Unit 3: Moment Generating functions','Unit 4: Order Statistics and Central Limit theorem','Unit 5: Sampling Theory','Unit 6: Large Sample Tests'],
  'Formal Languages and Automata Theory': ['Unit 1: Introduction to Automata','Unit 2: Finite Automata ','Unit 3: Regular Languages ','Unit 4: Grammars ','Unit 5: Push Down Automata','Unit 6: Turing Machine & Computability Theory'],
  'Digital Logic Design':['Unit 1: Number systems and Boolean Algebra','Unit 2:Introduction to Combinational Circuits','Unit 3: Combinational Circuits','Unit 4:Introduciton to Sequential Circuits','Unit 5: Sequential Circuits','Unit 6: Synchronous and Asynchronus Counters'],
  'Design & Analysis of Algorithms': ['Unit 1: Introduction to Algorithms','Unit 2: Divide and conquer','Unit 3: Greedy method','Unit 4: Dynamic Programming','Unit 5: Backtracking, Branch and Bound','Unit 6: String Matching, NP-Hard and NP-Complete problems'],
  'Database Management Systems': ['Unit 1: Introduction to database systems and Entity-Relationship data model','Unit 2: Relational algebra and Relational calculus','Unit 3: SQL','Unit 4: Normalization','Unit 5: File Organisation','Unit 6: Transactions'],

  'Introduction to Operation Research': ['Unit 1: Introduction to Operation Research','Unit 2: Linear Programming','Unit 3: Extension of Linear Programming','Unit 4: Transportation and Assignment','Unit 5: Queueing',"Unit 6: Costs and it's models"],
  'Computer Organisation And Architecture':['Unit 1: Basic Functional blocks of a computer and Data Representation','Unit 2: Arithmetic and Logical Unit','Unit 3: Control Unit','Unit 4: Memory system design','Unit 5: Input -output subsystems','Unit 6: Pipelining and Parallel Processing'],
  'Data Science with Python':['Unit 1: Python Basics for Data Science','Unit 2: Working with Data in Python ','Unit 3: Data Processing','Unit 4: Data Analysis','Unit 5:  Data Visualization','Unit 6: Machine Learning using Python'],
  'Compiler Design':['Unit 1: Introduction to Compilers','Unit 2: Syntax Analysis -I','Unit 3: Syntax Analysis -II ','Unit 4: Semantic Analysis','Unit 5: Intermediate Code Generation and Code Optimization','Unit 6: Code generation'],
  'Web Technologies':['Unit 1: Introduction to Web World and JavaScript','Unit 2: PHP basics','Unit 3: Database Connectivity and Authentication','Unit 4: Front-End Web UI Frameworks and Tools and jQuery','Unit 5: Bootstrap','Unit 6: NodeJs'],


  'Operating System':['Unit 1: Introduction to Operating System','Unit 2: Process Management','Unit 3: Process Synchronization','Unit 4: Deadlocks','Unit 5: Memory Management','Unit 6: File Systems And Secondary Storage Management'],
  'Computer Networks':['Unit 1: Introduction to Computer Networks','Unit 2: The Data Link Layer','Unit 3: The Network Layer','Unit 4: The Transport Layer:','Unit 5: The Application Layer','Unit 6: Network Security'],
  'Software Engineering':['Unit 1: Introduction to Software Enginnering','Unit 2: Software Project management','Unit 3: Software design','Unit 4: Coding','Unit 5: Testing','Unit 6: Software Reliability And Quality Management'],
  'Mathematical Foundations for Data Science':['Unit 1: Basics of Linear Algebra','Unit 2: Matrix Decomposition Algorithms','Unit 3: Dimensions Reduction Algorithms','Unit 4: Calculus','Unit 5: Optimization','Unit 6: Probability'],
// ['Unit 1: ','Unit 2: ','Unit 3: ','Unit 4: ','Unit 5: ','Unit 6: ']

  // 'Cryptography and Network Security':['Unit 1: ','Unit 2: ','Unit 3: ','Unit 4: ','Unit 5: ','Unit 6: '],

  'Artificial Intelligence':['Unit 1: Introduction to AI Problems','Unit 2: Heuristic Search Techniques','Unit 3: Knowledge Representation','Unit 4: Different Knowledge Representation Schemes','Unit 5: Natural Language Processing','Unit 6: Expert System Architecture'],

  'Machine learning':['Unit 1: Introduction to Machine Learning','Unit 2: Neural Networks and Genetic Algorithms','Unit 3: Bayesian learning','Unit 4: Computational Learning','Unit 5: Instance based learning','Unit 6: Advanced learning'],

  'Data Mining':['Unit 1: Data Mining and Data Processing','Unit 2: Data Warehouse and OLAP Technology','Unit 3: Association Rules in Large Databases','Unit 4: Classification','Unit 5: Cluster Analysis','Unit 6: Outlier analysis'],

  'Career Development Course':['Unit 1: Number system and Sequence & Series','Unit 2: Arithmetic and Algebra','Unit 3: Geometry , Probability & Statistics','Unit 4: Logical Reasoning and Analytical Reasoning','Unit 5:Data Interpretation ','Unit 6: Verbal Ability']


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