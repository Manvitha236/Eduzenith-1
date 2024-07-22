import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
// import About from './Components/About';
const courses = [
  {
    id: 'CSE',
    name: 'Computer Science Engineering',
    image: 'https://via.placeholder.com/100?text=CSE',
    description: 'Explore the world of computer science, including programming, data structures, and algorithms.',
  },
  {
    id: 'ECE',
    name: 'Electronics and Communication Engineering',
    image: 'https://via.placeholder.com/100?text=ECE',
    description: 'Learn about digital circuits, microprocessors, signal processing, and communication systems.',
  },
  {
    id: 'EEE',
    name: 'Electrical and Electronics Engineering',
    image: 'https://via.placeholder.com/100?text=EEE',
    description: 'Understand the principles of electrical circuits, control systems, power electronics, and machines.',
  },
  {
    id: 'CE',
    name: 'Civil Engineering',
    image: 'https://via.placeholder.com/100?text=CE',
    description: 'Study structural analysis, construction management, geotechnical engineering, and transportation systems.',
  },
  {
    id: 'ME',
    name: 'Mechanical Engineering',
    image: 'https://via.placeholder.com/100?text=ME',
    description: 'Learn about thermodynamics, fluid mechanics, heat transfer, and machine design.',
  },
];

const Home = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleHamburgerClick = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className="App">
      <header>
        <div className="header-content">
          <h1>Welcome to EduZenith</h1>
          <p>Your gateway to specialized engineering education and resources.</p>
        </div>
      </header>
      <nav>
        <div className="hamburger" id="hamburger" onClick={handleHamburgerClick}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul id="nav-links" className={isNavVisible ? 'show' : ''}>
          <li><Link to="/">Home</Link></li>
          {courses.map((course) => (
            <li key={course.id}>
              <Link to={`/course/${course.id}`}>{course.id}</Link>
            </li>
          ))}
          <li><Link to='/About'>About</Link></li>
        </ul>
      </nav>
      <main>
        <div className="introduction">
          <h2>Explore Our Engineering Disciplines</h2>
          <p>Select a branch to view courses, semester, and resource materials tailored to your academic and career interests.</p>
        </div>
        <div id="courseContainer" className="branches">
          {courses.map((course) => (
            <div key={course.id} className={course.id === 'ME' ? 'center-card-container' : ''}>
              <Link to={`/course/${course.id}`} className="card-link">
                <div className="card">
                  <img src={course.image} alt={course.name} />
                  <div className="card-content">
                    <h3>{course.name}</h3>
                    <p>{course.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p class="fc">&copy; 2024 EduZenith. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
