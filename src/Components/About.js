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

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
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
      <h1 class="ah1">About Us</h1>
      <hr class="divider-line"></hr>
      <p>Welcome to <strong>EduZenith</strong>, your ultimate source for innovative and impactful educational content.</p>
      <p>At <strong>EduZenith</strong>, we believe in empowering students, educators, and lifelong learners to achieve their full potential through access to high-quality educational resources . Our mission is to enhance learning experiences and outcomes by providing engaging, accurate, and up-to-date educational content.</p>
      
      <h2 class="ah2">Our Mission</h2>
      <p>Our mission is to democratize education by making high-quality resources accessible to everyone. We strive to break down barriers to education by offering a wide range of materials that cater to diverse learning needs and styles.</p>
      
      <h2 class="ah2">Our Vision</h2>
      <p>We envision a world where everyone has the tools and knowledge they need to succeed. Our goal is to be at the forefront of educational innovation, constantly updating our offerings to include the latest research and learning strategies.</p>
      
      <h2 class="ah2">What We Offer</h2>
      <ul>
        <li><strong>Comprehensive Learning Materials</strong>: From textbooks and video tutorials to interactive simulations and quizzes, our content covers a wide array of subjects and levels.</li>
        <li><strong>Expert Contributions</strong>: Our materials are created and reviewed by experts who are passionate about education and committed to providing valuable and accurate content.</li>
        <li><strong>Community Engagement</strong>: We believe learning is a collaborative process. Our platform encourages interaction among users to share insights, solve problems, and build a supportive learning community.</li>
        <li><strong>Customized Learning Experiences</strong>: With advanced tools and features, users can customize their learning experiences to match their personal learning style and pace.</li>
      </ul>
      
      <h2 class="ah2">Meet Our Team</h2>
      <p>Meet Our Team

Our team consists of experienced educators, talented content creators, and technology experts dedicated to making education both effective and engaging. Here are some of our key team members who have developed this website:</p>

<h3>Alex Prince</h3>
<p>Alex is a highly skilled developer with extensive experience in web development and technology integration. His expertise in building robust and user-friendly websites has been instrumental in the creation of this platform.</p>

<h3>Sony Stark</h3>
<p>Sony is a talented developer with a background in multimedia design and instructional technology. She excels at creating engaging and interactive web content, ensuring a seamless and visually appealing user experience.</p>
<br></br>

<p>Together, Alex and Sony have developed this website, combining their technical skills to create a comprehensive and engaging educational resource.</p>
      
      <h2 class="ah2">Join Us on Our Journey</h2>
      <p>Whether you are a student looking for study aids, a teacher seeking resources for your classroom, or a curious mind eager to learn something new, <strong>EduZenith</strong> is here to support your educational journey. Join us as we explore the possibilities of learning and inspire a new generation of thinkers and leaders.</p>
      
      <p>For inquiries, partnerships, or feedback, please contact us at [contact information].</p>
      </main>
      <footer>
        <p class="fc">&copy; 2024 EduZenith. All rights reserved.</p>
      </footer>
    </div>
);
};
export default About;
