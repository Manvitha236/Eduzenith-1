import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, FileText, ExternalLink, BookOpen, Clock, Target } from 'lucide-react';
import './styles.css';

const unitPdfs = {
  'Unit 1: Differential equations of first order and first degree': ['https://storage.googleapis.com/eduzenith/cla/cla%20unit%201.pdf'],
  'Unit 2: Functions of several variables': ['https://storage.googleapis.com/eduzenith/cla/cla%20unit2.pdf'],
  'Unit 3: Applications of Functions of several Variable': ['https://storage.googleapis.com/eduzenith/cla/cla%20unit3.pdf'],
  'Unit 4: Linear Algebra':['https://storage.googleapis.com/eduzenith/cla/cla%20unit4.pdf'], 
  'Unit 5: Matrix Algebra (Eigen Values and Eigen Vectors)':['https://storage.googleapis.com/eduzenith/cla/cla%20unit5.pdf'],
  'Unit 6: Numerical solution of transcendental equations, Interpolation':['https://storage.googleapis.com/eduzenith/cla/cla%20unit6.pdf'],
  'Unit 1: DC Circuits':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: AC Circuits':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: DC Machines':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'], 
  'Unit 4: AC Machines':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'], 
  'Unit 5: Semiconductor Devices':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'], 
  'Unit 6: Transistors':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Introduction to Computer Programming':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Conditional Statements and Loops':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Arrays and Strings':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Functions':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Pointers and Dynamic Memory Allocation':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Structure, Union and Files':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Introduction to Engineering drawing ':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Introduction to projections':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Projection of planes and solids':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Sections of solids and Development of Surfaces':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Computer Aided Design':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Drawing practice with AutoCAD':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Introduction-Constitution':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Union Government and its Administration':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Election commission':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: State Government and its Administration':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Local Administration':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Union Judiciary':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Propositional logic':[],
  'Unit 2: Proof techniques':[],
  'Unit 3: Sets, relations and functions':[],
  'Unit 4: Introduction to counting':[],
  'Unit 5: Introduction to Graph Theory':[],
  'Unit 6: Graph Theory(Continuation)':[],
  'Unit 1: Oscillations':[],
  'Unit 2: Wave Optics':[],
  'Unit 3: Polarization and LASERS':[],
  'Unit 4: Holography, and Optical fibers':[],
  'Unit 5: Quantum Mechanics':[],
  'Unit 6: Semiconductor Physics':[],
  'Unit 1: Introduction to Managerial Economics and Financial Analysis':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Production':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Market Structure':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Capital and Capital Budgeting':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Financial Accounting':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Financial Statements':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Introduction to java':[],
  'Unit 2: Strings and Data Structures':[],
  'Unit 3: Inheritance and Interface':[],
  'Unit 4: File Handling and Exception Handling':[],
  'Unit 5: Packages and Multithreading':[],
  'Unit 6: Event Handling and Swings':[],
  'Unit 1: Linked Lists':[],
  'Unit 2: Stacks and Queues':[],
  'Unit 3: Sortings, Searching and Hashing':[],
  'Unit 4: Trees':[],
  'Unit 5: Trees and Operations':[],
  'Unit 6: Graphs':[],
  'Unit 1: The Multidisciplinary Nature of Environmental Studies and Natural Resources ':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Ecosystems':['https://storage.googleapis.com/eduzenith/UNIT%20-2%20ES.pdf','https://storage.googleapis.com/eduzenith/Unit%20-%204%20ES.pdf'],
  'Unit 3: Biodiversity and It's Conservation':['https://storage.googleapis.com/eduzenith/unit%20-3%20ES.pdf'],
  'Unit 4: Environmental Pollution':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Social Issues and the Environment':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Human Population and the Environment':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Probability and theorems in Probability ':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Probability Distributions':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Moment Generating functions':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Order Statistics and Central Limit theorem':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Sampling Theory':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Large Sample Tests':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Introduction to Automata':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Finite Automata ':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Regular Languages ':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Grammars ':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Push Down Automata':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Turing Machine & Computability Theory':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Number systems and Boolean Algebra':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Introduction to Combinational Circuits':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Combinational Circuits':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Introduciton to Sequential Circuits':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Sequential Circuits':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Synchronous and Asynchronus Counters':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Introduction to Algorithms':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Divide and conquer':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Greedy method':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Dynamic Programming':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Backtracking, Branch and Bound':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: String Matching, NP-Hard and NP-Complete problems':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Introduction to database systems and Entity-Relationship data model':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Relational algebra and Relational calculus':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: SQL':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Normalization':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: File Organisation':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Transactions':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Introduction to Operation Research':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Linear Programming':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Extension of Linear Programming':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Transportation and Assignment':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Queueing':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  "Unit 6: Costs and it's models":['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Basic Functional blocks of a computer and Data Representation':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Arithmetic and Logical Unit':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Control Unit':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Memory system design':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Input -output subsystems':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Pipelining and Parallel Processing':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Python Basics for Data Science':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Working with Data in Python':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Data Processing':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Data Analysis':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Data Visualization':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Machine Learning using Python':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Introduction to Compilers':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Syntax Analysis -I':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Syntax Analysis -II ':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Semantic Analysis':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Intermediate Code Generation and Code Optimization':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Code generation':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Introduction to Web World and JavaScript':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: PHP basics':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Database Connectivity and Authentication':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Front-End Web UI Frameworks and Tools and jQuery':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Bootstrap':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: NodeJs':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Introduction  to Operating System':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Process Management':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Process Synchronization':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Deadlocks':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Memory Management':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: File Systems And Secondary Storage Management':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Introduction  to Computer Networks':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: The Data Link Layer':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: The Network Layer':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: The Transport Layer:':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: The Application Layer':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Network Security':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Introduction to Software Enginnering':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Software Project management':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Software design':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Coding':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Testing':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Software Reliability And Quality Management':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Basics of Linear Algebra':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Matrix Decomposition Algorithms':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Dimensions Reduction Algorithms':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Calculus':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Optimization':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Probability':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Introduction to AI Problems':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Heuristic Search Techniques':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Knowledge Representation':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Different Knowledge Representation Schemes':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Natural Language Processing':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Expert System Architecture':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Introduction to Machine Learning':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Neural Networks and Genetic Algorithms':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Bayesian learning':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Computational Learning':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Instance based learning':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Advanced learning':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Data Mining and Data Processing':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Data Warehouse and OLAP Technology':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Association Rules in Large Databases':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Classification':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Cluster Analysis':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Outlier analysis':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Number system and Sequence & Series':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Arithmetic and Algebra':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Geometry , Probability & Statistics':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Logical Reasoning and Analytical Reasoning':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Data Interpretation ':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Verbal Ability':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Differential Equations of First order and First degree':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Linear differential equations of higher order':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Sequences and Series':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Functions of several variables':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Applications of Functions of several Variable':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Beta and Gamma Function':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Introduction to Engineering Physics':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Electrostatics -1':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Electrostatics -2':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Magnetostatics ':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: : Time varying fields ':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6:: Semiconductor physics':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Introduction to Engineering Drawing':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Orthographic projections':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Projection of Solids':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Section of solid':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Introduction to AutoCAD':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Computer Graphics':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Basics of Electrical Technology':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Network Theorems':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Transient response of R, L, C circuits':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Three phase network':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Introduction to DC motors':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: DC-DC Convertors':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Introduction to C':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Arrays':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3:Functions':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Structure & Union':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Pointers':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Data Structures':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Introduction to  Signals and Systems':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Continuous time LTI Systems':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Fourier series':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Continuous time Fourier Transform':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5:Laplace Transform ':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Sampling':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Introduction to Probability':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Random Variables':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Distributions':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4:Functions of Random variables ':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Inequality and Generating functions':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Order statistics':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Number Systems and Boolean Algebra':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2:Combinational Circuits':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Sequential Circuits':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Counters and Registers':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Encoder,Decoder,Multiplexer,Demultiplexer':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Memory Structure and Timing':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Block diagrams and SFG':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Mathematical modeling of Circuits':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Time response Analysis':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4:Root locus and RH Criteria':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Frequency Domain Representation':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: State variables and State model,':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Random Process':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Power Spectral Density':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Review of signals and systems':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Amplitude and Angle Modulation':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Quantization and DPCM, DM':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6:Noise ':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: 8086 microprocessor':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: MIPS architecture':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Introduction to Processor':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Pipelining':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Memory Hierarchy':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Memory and Operating System':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Linear Algebra':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Eigen values and Eigen vectors':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Multiple integrals':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Vector calculus':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Root finding Methods and Interpolation':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Numerical integration and numerical solution of IVP':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: : Review of C and Programming in C++':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: : OOP in C++':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Inheritance and Polymorphism':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Type Casting & Exceptions':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Classes Templates & STL':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: File handling and Multithreading':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Introduction to Electronics':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Diodes':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: PN Diode Applications':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: MOSFETs':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: BJT Characteristics':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Transistor Biasing and Stabilization-BJT':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Basic concepts of Networks':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Transient analysis of First order Circuits':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Transient analysis of Second order Circuits':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Circuit Analysis Using Laplace Transform':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Two Port Network parameters':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: State Space Models For Electrical Networks':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: MOSFET Biasing and Its Small Signal Analysis':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Multi-Stage Amplifiers & Differential Amplifiers of MOSFET':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Current mirrors in MOSFETs':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: CMOScircuits':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: BJT- Configurations and Multi stage amplifiers':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: BJT- Differential amplifiers and Current mirrors':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Introduction to Digital Signal Processing':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Discrete Time Fourier Transform (DTFT)':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Discrete Fourier Transform (DFT) and Fast Fourier Transform (FFT)':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Z transforms':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Filter Concepts':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Realization Of Digital Filters':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: HDL for Digital System Designs':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: HDL for Digital System Designs':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Finite State Machines':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: HDL for Finite State Machines':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Digital Systems modeling':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: HDL Modeling of USB Protocol Analyzer':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Feedback Amplifiers':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Operational Amplifiers':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Wave shaping circuits & Oscillators':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: DC-DC Converters':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: PLL':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Data Converters':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Introduction to Electromagnetic waves and Guided media':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: Wave Propagation':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Wave propagation at interfaces':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Transmission Lines: Parameters':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Waveguides-I':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Waveguides-II':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 1: Data communication Components':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 2: LAN':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 3: Data Link Layer and Medium Access Sub Layer':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 4: Network Layer':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 5: Transport Layer':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  'Unit 6: Application Layer':['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf']
};

const UnitDetail = () => {
  const { courseId, subjectName, unitName } = useParams();
  const pdfs = unitPdfs[unitName] || [];

  const getUnitNumber = (unit) => {
    const match = unit.match(/Unit (\d+):/);
    return match ? match[1] : '1';
  };

  const getUnitTitle = (unit) => {
    return unit.replace(/Unit \d+:\s*/, '');
  };

  const getFileName = (url) => {
    if (url.includes('storage.googleapis.com')) {
      const parts = url.split('/');
      const fileName = parts[parts.length - 1];
      return decodeURIComponent(fileName);
    }
    return url;
  };

  const isValidPdf = (pdf) => {
    return pdf && !pdf.includes('pdf1.pdf') && !pdf.includes('pdf2.pdf') && 
           !pdf.includes('pdf3.pdf') && !pdf.includes('pdf4.pdf');
  };

  const validPdfs = pdfs.filter(isValidPdf);

  return (
    <div className="unit-detail-page">
      {/* Modern Header */}
      <header className="unit-header">
        <div className="header-background">
          <div className="header-overlay"></div>
        </div>
        <div className="container">
          <div className="header-content">
            <Link to={`/course/${courseId}/subject/${subjectName}`} className="back-button">
              <ArrowLeft size={20} />
              <span>Back to Units</span>
            </Link>
            
            <div className="unit-info">
              <div className="unit-icon-large">
                📄
              </div>
              <div className="unit-details">
                <div className="unit-number-badge">
                  Unit {getUnitNumber(unitName)}
                </div>
                <h1>{getUnitTitle(unitName)}</h1>
                <div className="unit-meta">
                  <div className="meta-item">
                    <BookOpen size={16} />
                    <span>Subject: {subjectName}</span>
                  </div>
                  <div className="meta-item">
                    <Target size={16} />
                    <span>Course: {courseId}</span>
                  </div>
                  <div className="meta-item">
                    <Clock size={16} />
                    <span>{validPdfs.length} Resources</span>
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
            <Link to={`/course/${courseId}/subject/${subjectName}`}>Units</Link>
            <span>/</span>
            <span className="current">Resources</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          <div className="content-header">
            <div className="content-info">
              <h2>Study Materials</h2>
              <p>Download and access comprehensive study materials for this unit</p>
            </div>
            {validPdfs.length > 0 && (
              <div className="resources-count">
                {validPdfs.length} Resource{validPdfs.length !== 1 ? 's' : ''} Available
              </div>
            )}
          </div>

          {validPdfs.length > 0 ? (
            <div className="resources-grid">
              {validPdfs.map((pdf, index) => (
                <div key={index} className="resource-card">
                  <div className="resource-header">
                    <div className="resource-icon">
                      <FileText size={24} />
                    </div>
                    <div className="resource-type">PDF Document</div>
                  </div>
                  
                  <div className="resource-content">
                    <h3>{getFileName(pdf)}</h3>
                    <div className="resource-meta">
                      <span className="resource-format">PDF Format</span>
                      <span className="resource-size">Study Material</span>
                    </div>
                  </div>
                  
                  <div className="resource-actions">
                    <a 
                      href={pdf} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <ExternalLink size={16} />
                      View Online
                    </a>
                    <a 
                      href={pdf} 
                      download
                      className="btn btn-secondary"
                    >
                      <Download size={16} />
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">📚</div>
              <h3>No Resources Available</h3>
              <p>Study materials for this unit will be available soon. Please check back later or contact your instructor for more information.</p>
              <div className="empty-actions">
                <Link 
                  to={`/course/${courseId}/subject/${subjectName}`}
                  className="btn btn-primary"
                >
                  <ArrowLeft size={16} />
                  Back to Units
                </Link>
              </div>
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
        .unit-detail-page {
          min-height: 100vh;
          background: var(--neutral-50);
        }

        /* Unit Header */
        .unit-header {
          position: relative;
          background: linear-gradient(135deg, var(--primary-600) 0%, var(--primary-800) 100%);
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

        .unit-info {
          display: flex;
          align-items: center;
          gap: var(--space-6);
        }

        .unit-icon-large {
          font-size: 4rem;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
        }

        .unit-number-badge {
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

        .unit-details h1 {
          font-size: var(--text-4xl);
          font-weight: 800;
          margin-bottom: var(--space-4);
          color: white;
          line-height: var(--leading-tight);
        }

        .unit-meta {
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
          background: white;
          border-bottom: 1px solid var(--secondary-200);
          padding: var(--space-4) 0;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--text-sm);
        }

        .breadcrumb a {
          color: var(--secondary-600);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .breadcrumb a:hover {
          color: var(--primary-600);
        }

        .breadcrumb span {
          color: var(--secondary-400);
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
          background: white;
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--secondary-200);
        }

        .content-info h2 {
          font-size: var(--text-2xl);
          font-weight: 700;
          color: var(--secondary-900);
          margin-bottom: var(--space-1);
        }

        .content-info p {
          color: var(--secondary-600);
          margin: 0;
        }

        .resources-count {
          padding: var(--space-3) var(--space-6);
          background: var(--success-100);
          color: var(--success-700);
          border-radius: var(--radius-full);
          font-size: var(--text-sm);
          font-weight: 600;
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: var(--space-6);
        }

        .resource-card {
          background: white;
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--secondary-200);
          transition: all var(--transition-normal);
          overflow: hidden;
          position: relative;
        }

        .resource-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--success-500), var(--primary-500));
          transform: scaleX(0);
          transition: transform var(--transition-normal);
        }

        .resource-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }

        .resource-card:hover::before {
          transform: scaleX(1);
        }

        .resource-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--space-6);
          background: var(--neutral-50);
          border-bottom: 1px solid var(--secondary-200);
        }

        .resource-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: var(--success-100);
          color: var(--success-600);
          border-radius: var(--radius-xl);
        }

        .resource-type {
          font-size: var(--text-xs);
          font-weight: 600;
          color: var(--secondary-500);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .resource-content {
          padding: var(--space-6);
        }

        .resource-content h3 {
          font-size: var(--text-lg);
          font-weight: 600;
          color: var(--secondary-900);
          line-height: var(--leading-tight);
          margin-bottom: var(--space-3);
          word-break: break-word;
        }

        .resource-meta {
          display: flex;
          gap: var(--space-3);
          margin-bottom: var(--space-4);
        }

        .resource-format,
        .resource-size {
          font-size: var(--text-xs);
          padding: var(--space-1) var(--space-2);
          background: var(--secondary-100);
          color: var(--secondary-600);
          border-radius: var(--radius-md);
          font-weight: 500;
        }

        .resource-actions {
          display: flex;
          gap: var(--space-3);
          padding: var(--space-6);
          border-top: 1px solid var(--secondary-200);
          background: var(--neutral-50);
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-3) var(--space-4);
          font-size: var(--text-sm);
          font-weight: 500;
          border: none;
          border-radius: var(--radius-lg);
          text-decoration: none;
          cursor: pointer;
          transition: all var(--transition-fast);
          flex: 1;
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

        .btn-secondary {
          background: var(--secondary-100);
          color: var(--secondary-700);
          border: 1px solid var(--secondary-200);
        }

        .btn-secondary:hover {
          background: var(--secondary-200);
          border-color: var(--secondary-300);
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: var(--space-20) var(--space-8);
          background: white;
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--secondary-200);
        }

        .empty-icon {
          font-size: 4rem;
          margin-bottom: var(--space-6);
          opacity: 0.5;
        }

        .empty-state h3 {
          font-size: var(--text-xl);
          color: var(--secondary-900);
          margin-bottom: var(--space-3);
        }

        .empty-state p {
          color: var(--secondary-600);
          margin-bottom: var(--space-8);
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .empty-actions {
          display: flex;
          justify-content: center;
        }

        /* Footer */
        .modern-footer {
          background: var(--secondary-900);
          color: white;
          padding: var(--space-8) 0;
          text-align: center;
          margin-top: var(--space-20);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .unit-info {
            flex-direction: column;
            text-align: center;
            gap: var(--space-4);
          }

          .unit-details h1 {
            font-size: var(--text-3xl);
          }

          .unit-meta {
            justify-content: center;
          }

          .content-header {
            flex-direction: column;
            text-align: center;
            gap: var(--space-4);
          }

          .resources-grid {
            grid-template-columns: 1fr;
          }

          .resource-actions {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          .unit-icon-large {
            font-size: 3rem;
          }

          .unit-details h1 {
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

export default UnitDetail;