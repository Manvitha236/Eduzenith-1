import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, BookOpen, FileText, Clock, Target } from 'lucide-react';
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
  'Environmental Science': ['Unit 1: The Multidisciplinary Nature of Environmental Studies and Natural Resources ','Unit 2: Ecosystems','Unit 3:  Biodiversity and Its Conservation','Unit 4: Environmental Pollution','Unit 5: Social Issues and the Environment','Unit 6: Human Population and the Environment'],

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

  'Artificial Intelligence':['Unit 1: Introduction to AI Problems','Unit 2: Heuristic Search Techniques','Unit 3: Knowledge Representation','Unit 4: Different Knowledge Representation Schemes','Unit 5: Natural Language Processing','Unit 6: Expert System Architecture'],

  'Machine learning':['Unit 1: Introduction to Machine Learning','Unit 2: Neural Networks and Genetic Algorithms','Unit 3: Bayesian learning','Unit 4: Computational Learning','Unit 5: Instance based learning','Unit 6: Advanced learning'],

  'Data Mining':['Unit 1: Data Mining and Data Processing','Unit 2: Data Warehouse and OLAP Technology','Unit 3: Association Rules in Large Databases','Unit 4: Classification','Unit 5: Cluster Analysis','Unit 6: Outlier analysis'],

  'Career Development Course':['Unit 1: Number system and Sequence & Series','Unit 2: Arithmetic and Algebra','Unit 3: Geometry , Probability & Statistics','Unit 4: Logical Reasoning and Analytical Reasoning','Unit 5:Data Interpretation ','Unit 6: Verbal Ability'],

  'Differential Equations and Multivariable calculus':['Unit 1: Differential Equations of First order and First degree','Unit 2: Linear differential equations of higher order','Unit 3: Sequences and Series','Unit 4: Functions of several variables','Unit 5: Applications of Functions of several Variable','Unit 6: Beta and Gamma Function'],
  'Engineering physics':['Unit 1: Introduction to Engineering Physics','Unit 2: Electrostatics -1','Unit 3: Electrostatics -2','Unit 4: Magnetostatics ','Unit 5: : Time varying fields ','Unit 6:: Semiconductor physics'],
  'Engineering Graphic and Design':['Unit 1: Introduction to Engineering Drawing','Unit 2: Orthographic projections','Unit 3: Projection of Solids','Unit 4: Section of solid','Unit 5: Introduction to AutoCAD','Unit 6: Computer Graphics'],
  'Electrical Technology':['Unit 1: Basics of Electrical Technology','Unit 2: Network Theorems','Unit 3: Transient response of R, L, C circuits','Unit 4: Three phase network','Unit 5: Introduction to DC motors','Unit 6: DC-DC Convertors'],
  'Programming and Data Structures':['Unit 1: Introduction to C','Unit 2: Arrays','Unit 3:Functions','Unit 4: Structure & Union','Unit 5: Pointers','Unit 6: Data Structures'],
  
  'Signals and Systems ': ['Unit 1: Introduction to  Signals and Systems','Unit 2: Continuous time LTI Systems','Unit 3: Fourier series','Unit 4: Continuous time Fourier Transform','Unit 5:Laplace Transform ','Unit 6: Sampling'],
  'Probability and Random variables':['Unit 1: Introduction to Probability','Unit 2: Random Variables','Unit 3: Distributions','Unit 4:Functions of Random variables ','Unit 5: Inequality and Generating functions','Unit 6: Order statistics'],
  'Digital logic design':['Unit 1: Number Systems and Boolean Algebra','Unit 2:Combinational Circuits','Unit 3: Sequential Circuits','Unit 4: Counters and Registers','Unit 5: Encoder,Decoder,Multiplexer,Demultiplexer','Unit 6: Memory Structure and Timing'],
  'Control Systems ':['Unit 1: Block diagrams and SFG','Unit 2: Mathematical modeling of Circuits','Unit 3: Time response Analysis','Unit 4:Root locus and RH Criteria','Unit 5: Frequency Domain Representation','Unit 6: State variables and State model,'],
  'Communication Systems-1':['Unit 1: Random Process','Unit 2: Power Spectral Density','Unit 3: Review of signals and systems','Unit 4: Amplitude and Angle Modulation','Unit 5: Quantization and DPCM, DM','Unit 6:Noise '],
  
  'Computer Organization and Architecture':['Unit 1: 8086 microprocessor','Unit 2: MIPS architecture','Unit 3: Introduction to Processor','Unit 4: Pipelining','Unit 5: Memory Hierarchy','Unit 6: Memory and Operating System'],
  'Mathematical Methods':['Unit 1: Linear Algebra','Unit 2: Eigen values and Eigen vectors','Unit 3: Multiple integrals','Unit 4: Vector calculus','Unit 5: Root finding Methods and Interpolation','Unit 6: Numerical integration and numerical solution of IVP'],
  'Object Oriented Programming':['Unit 1: : Review of C and Programming in C++','Unit 2: : OOP in C++','Unit 3: Inheritance and Polymorphism','Unit 4: Type Casting & Exceptions','Unit 5: Classes Templates & STL','Unit 6: File handling and Multithreading'],
  'Basic Electronics':['Unit 1: Introduction to Electronics','Unit 2: Diodes','Unit 3: PN Diode Applications','Unit 4: MOSFETs','Unit 5: BJT Characteristics','Unit 6: Transistor Biasing and Stabilization-BJT'],
  'Network Theory':['Unit 1: Basic concepts of Networks','Unit 2: Transient analysis of First order Circuits','Unit 3: Transient analysis of Second order Circuits','Unit 4: Circuit Analysis Using Laplace Transform','Unit 5: Two Port Network parameters','Unit 6: State Space Models For Electrical Networks'],

  'Analog Electronic Circuits':['Unit 1: MOSFET Biasing and Its Small Signal Analysis','Unit 2: Multi-Stage Amplifiers & Differential Amplifiers of MOSFET','Unit 3: Current mirrors in MOSFETs','Unit 4: CMOScircuits','Unit 5: BJT- Configurations and Multi stage amplifiers','Unit 6: BJT- Differential amplifiers and Current mirrors'],
  'Digital Signal Processing':['Unit 1: Introduction to Digital Signal Processing','Unit 2: Discrete Time Fourier Transform (DTFT)','Unit 3: Discrete Fourier Transform (DFT) and Fast Fourier Transform (FFT)','Unit 4: Z transforms','Unit 5: Filter Concepts','Unit 6: Realization Of Digital Filters'],
  'Digital System Design':['Unit 1: HDL for Digital System Designs','Unit 2: HDL for Digital System Designs','Unit 3: Finite State Machines','Unit 4: HDL for Finite State Machines','Unit 5: Digital Systems modeling','Unit 6: HDL Modeling of USB Protocol Analyzer'],
  'Linear Integrated Circuits':['Unit 1: Feedback Amplifiers','Unit 2: Operational Amplifiers','Unit 3: Wave shaping circuits & Oscillators','Unit 4: DC-DC Converters','Unit 5: PLL','Unit 6: Data Converters'],
  
  'Electromagnetic waves and Guided media':['Unit 1: Introduction to Electromagnetic waves and Guided media','Unit 2: Wave Propagation','Unit 3: Wave propagation at interfaces','Unit 4: Transmission Lines: Parameters','Unit 5: Waveguides-I','Unit 6: Waveguides-II'],
  'Computer networks':['Unit 1: Data communication Components','Unit 2: LAN','Unit 3: Data Link Layer and Medium Access Sub Layer','Unit 4: Network Layer','Unit 5: Transport Layer','Unit 6: Application Layer']
};

const SubjectDetail = () => {
  const { courseId, subjectName } = useParams();
  const units = subjectDetails[subjectName] || [];

  const getSubjectType = (name) => {
    if (name.toLowerCase().includes('lab') || name.toLowerCase().includes('laboratory')) {
      return 'Laboratory';
    }
    return 'Theory';
  };

  const getUnitNumber = (unit) => {
    const match = unit.match(/Unit (\d+):/);
    return match ? match[1] : '1';
  };

  const getUnitTitle = (unit) => {
    return unit.replace(/Unit \d+:\s*/, '');
  };

  return (
    <div className="subject-detail-page">
      {/* Modern Header */}
      <header className="subject-header">
        <div className="header-background">
          <div className="header-overlay"></div>
        </div>
        <div className="container">
          <div className="header-content">
            <Link to={`/course/${courseId}/subjects?year=1&semester=1`} className="back-button">
              <ArrowLeft size={20} />
              <span>Back to Subjects</span>
            </Link>
            
            <div className="subject-info">
              <div className="subject-icon-large">
                {getSubjectType(subjectName) === 'Laboratory' ? '🧪' : '📚'}
              </div>
              <div className="subject-details">
                <div className="subject-type-badge">
                  {getSubjectType(subjectName)}
                </div>
                <h1>{subjectName}</h1>
                <div className="subject-meta">
                  <div className="meta-item">
                    <Target size={16} />
                    <span>{units.length} Units</span>
                  </div>
                  <div className="meta-item">
                    <Clock size={16} />
                    <span>Course: {courseId}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Breadcrumb */}
      <nav className="breadcrumb-nav">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to={`/course/${courseId}`}>{courseId}</Link>
            <span>/</span>
            <span className="current">Units</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          <div className="content-header">
            <div className="content-info">
              <h2>Course Units</h2>
              <p>Explore the comprehensive curriculum structure for {subjectName}</p>
            </div>
            <div className="units-count">
              {units.length} Units Available
            </div>
          </div>

          {units.length > 0 ? (
            <div className="units-grid">
              {units.map((unit, index) => (
                <div key={index} className="unit-card">
                  <div className="unit-header">
                    <div className="unit-number">
                      {getUnitNumber(unit)}
                    </div>
                    <div className="unit-icon">
                      <FileText size={20} />
                    </div>
                  </div>
                  
                  <div className="unit-content">
                    <h3>{getUnitTitle(unit)}</h3>
                    <div className="unit-meta">
                      <span className="unit-type">
                        {getSubjectType(subjectName) === 'Laboratory' ? 'Experiment' : 'Theory Unit'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="unit-footer">
                    <Link 
                      to={`/course/${courseId}/subject/${subjectName}/unit/${unit}`}
                      className="btn btn-primary"
                    >
                      <BookOpen size={16} />
                      View Materials
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">📚</div>
              <h3>No Units Available</h3>
              <p>Units for this subject will be available soon. Please check back later.</p>
            </div>
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
        .subject-detail-page {
          min-height: 100vh;
          background: var(--bg-primary);
          color: var(--text-primary);
        }

        /* Subject Header */
        .subject-header {
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

        .subject-info {
          display: flex;
          align-items: center;
          gap: var(--space-6);
        }

        .subject-icon-large {
          font-size: 4rem;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
        }

        .subject-type-badge {
          display: inline-block;
          padding: var(--space-1) var(--space-3);
          background: rgba(255, 255, 255, 0.2);
          border-radius: var(--radius-full);
          font-size: var(--text-xs);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: var(--space-2);
        }

        .subject-details h1 {
          font-size: var(--text-4xl);
          font-weight: 800;
          margin-bottom: var(--space-4);
          color: white;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          line-height: var(--leading-tight);
        }

        .subject-meta {
          display: flex;
          gap: var(--space-4);
          flex-wrap: wrap;
        }

        .meta-item {
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

        /* Breadcrumb Navigation */
        .breadcrumb-nav {
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-primary);
          padding: var(--space-4) 0;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--text-sm);
        }

        .breadcrumb a {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .breadcrumb a:hover {
          color: var(--primary-600);
        }

        .breadcrumb span {
          color: var(--text-tertiary);
        }

        .breadcrumb .current {
          color: var(--primary-600);
          font-weight: 500;
        }

        /* Main Content */
        .main-content {
          padding: var(--space-12) 0;
        }

        .content-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--space-8);
          padding: var(--space-6);
          background: var(--bg-card);
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-color);
          border: 1px solid var(--border-primary);
        }

        .content-info h2 {
          font-size: var(--text-2xl);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--space-1);
        }

        .content-info p {
          color: var(--text-secondary);
          margin: 0;
        }

        .units-count {
          padding: var(--space-3) var(--space-6);
          background: var(--primary-100);
          color: var(--primary-700);
          border-radius: var(--radius-full);
          font-size: var(--text-sm);
          font-weight: 600;
        }

        .units-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--space-6);
        }

        .unit-card {
          background: var(--bg-card);
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-color);
          border: 1px solid var(--border-primary);
          transition: all var(--transition-normal);
          overflow: hidden;
          position: relative;
        }

        .unit-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--primary-500), var(--accent-500));
          transform: scaleX(0);
          transition: transform var(--transition-normal);
        }

        .unit-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
        }

        .unit-card:hover::before {
          transform: scaleX(1);
        }

        .unit-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--space-6);
          background: var(--bg-tertiary);
          border-bottom: 1px solid var(--border-primary);
        }

        .unit-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: var(--primary-600);
          color: white;
          border-radius: var(--radius-xl);
          font-size: var(--text-lg);
          font-weight: 700;
        }

        .unit-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: var(--bg-hover);
          color: var(--text-secondary);
          border-radius: var(--radius-lg);
        }

        .unit-content {
          padding: var(--space-6);
        }

        .unit-content h3 {
          font-size: var(--text-lg);
          font-weight: 600;
          color: var(--text-primary);
          line-height: var(--leading-tight);
          margin-bottom: var(--space-3);
        }

        .unit-meta {
          margin-bottom: var(--space-4);
        }

        .unit-type {
          display: inline-block;
          padding: var(--space-1) var(--space-3);
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          border-radius: var(--radius-full);
          font-size: var(--text-xs);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .unit-footer {
          padding: var(--space-6);
          border-top: 1px solid var(--border-primary);
          background: var(--bg-tertiary);
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
          width: 100%;
          justify-content: center;
        }

        .btn-primary {
          background: var(--primary-600);
          color: white;
        }

        .btn-primary:hover {
          background: var(--primary-700);
          transform: translateY(-1px);
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: var(--space-20) var(--space-8);
          background: var(--bg-card);
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-color);
          border: 1px solid var(--border-primary);
        }

        .empty-icon {
          font-size: 4rem;
          margin-bottom: var(--space-6);
          opacity: 0.6;
        }

        .empty-state h3 {
          font-size: var(--text-xl);
          color: var(--text-primary);
          margin-bottom: var(--space-3);
        }

        .empty-state p {
          color: var(--text-secondary);
          margin: 0;
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
          .subject-info {
            flex-direction: column;
            text-align: center;
            gap: var(--space-4);
          }

          .subject-details h1 {
            font-size: var(--text-3xl);
          }

          .subject-meta {
            justify-content: center;
          }

          .content-header {
            flex-direction: column;
            text-align: center;
            gap: var(--space-4);
          }

          .units-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .subject-icon-large {
            font-size: 3rem;
          }

          .subject-details h1 {
            font-size: var(--text-2xl);
          }

          .meta-item {
            font-size: var(--text-xs);
          }
        }
      `}</style>
    </div>
  );
};

export default SubjectDetail;