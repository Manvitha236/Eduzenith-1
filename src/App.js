import React, { useEffect } from 'react';
import './App.css';

const courses = [
  {
    id: 'CSE',
    name: 'Computer Science Engineering',
    image: 'https://via.placeholder.com/100?text=CSE',
    description: 'Explore the world of computer science, including programming, data structures, and algorithms.'
  },
  {
    id: 'ECE',
    name: 'Electronics and Communication Engineering',
    image: 'https://via.placeholder.com/100?text=ECE',
    description: 'Learn about digital circuits, microprocessors, signal processing, and communication systems.'
  },
  {
    id: 'EEE',
    name: 'Electrical and Electronics Engineering',
    image: 'https://via.placeholder.com/100?text=EEE',
    description: 'Understand the principles of electrical circuits, control systems, power electronics, and machines.'
  },
  {
    id: 'CE',
    name: 'Civil Engineering',
    image: 'https://via.placeholder.com/100?text=CE',
    description: 'Study structural analysis, construction management, geotechnical engineering, and transportation systems.'
  },
  {
    id: 'ME',
    name: 'Mechanical Engineering',
    image: 'https://via.placeholder.com/100?text=ME',
    description: 'Learn about thermodynamics, fluid mechanics, heat transfer, and machine design.'
  }
];

function App() {
  useEffect(() => {
    const courseContainer = document.getElementById('courseContainer');
    courses.forEach(course => {
      const card = document.createElement('div');
      card.className = 'card';
      card.id = course.id;
      card.innerHTML = `
        <img src="${course.image}" alt="${course.name}">
        <div class="card-content">
          <h3>${course.name}</h3>
          <p>${course.description}</p>
        </div>
      `;
      courseContainer.appendChild(card);
    });

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }, []);

  return (
    <div className="App">
      <header>
        <div className="header-content">
          <h1>Welcome to EduZenith</h1>
          <p>Your gateway to specialized engineering education and resources.</p>
        </div>
      </header>
      <nav>
        <div className="hamburger" id="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul id="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#CSE">CSE</a></li>
          <li><a href="#ECE">ECE</a></li>
          <li><a href="#EEE">EEE</a></li>
          <li><a href="#CE">CE</a></li>
          <li><a href="#ME">ME</a></li>
        </ul>
      </nav>
      <main>
        <div className="introduction">
          <h2>Explore Our Engineering Disciplines</h2>
          <p>Select a branch to view courses, semester, and resource materials tailored to your academic and career interests.</p>
        </div>
        <div id="courseContainer" className="branches"></div>
      </main>
      <footer>
        <p>&copy; 2024 EduZenith. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;