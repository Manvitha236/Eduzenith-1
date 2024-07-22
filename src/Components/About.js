import React, { useState } from 'react';
import './AboutStyling.css';  // Make sure the path is correct

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <>
      <nav className="navbar">
        <span className="logo" style={{display: isOpen ? "none" : "block"}}>Home</span>
        <div className="nav-links" style={{display: isOpen ? "block" : "none"}}>
          <a href="/">Home</a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
      </nav>
    </>

      <h1>About Us</h1>
      <p>Welcome to <strong>Your Website Name</strong>, your ultimate source for innovative and impactful educational content.</p>
      <p>At <strong>Your Website Name</strong>, we believe in empowering students, educators, and lifelong learners to achieve their full potential through access to high-quality educational resources. Founded in <strong>[Year]</strong> by <strong>[Founder's Name]</strong>, our mission is to enhance learning experiences and outcomes by providing engaging, accurate, and up-to-date educational content.</p>
      
      <h2>Our Mission</h2>
      <p>Our mission is to democratize education by making high-quality resources accessible to everyone. We strive to break down barriers to education by offering a wide range of materials that cater to diverse learning needs and styles.</p>
      
      <h2>Our Vision</h2>
      <p>We envision a world where everyone has the tools and knowledge they need to succeed. Our goal is to be at the forefront of educational innovation, constantly updating our offerings to include the latest research and learning strategies.</p>
      
      <h2>What We Offer</h2>
      <ul>
        <li><strong>Comprehensive Learning Materials</strong>: From textbooks and video tutorials to interactive simulations and quizzes, our content covers a wide array of subjects and levels.</li>
        <li><strong>Expert Contributions</strong>: Our materials are created and reviewed by experts who are passionate about education and committed to providing valuable and accurate content.</li>
        <li><strong>Community Engagement</strong>: We believe learning is a collaborative process. Our platform encourages interaction among users to share insights, solve problems, and build a supportive learning community.</li>
        <li><strong>Customized Learning Experiences</strong>: With advanced tools and features, users can customize their learning experiences to match their personal learning style and pace.</li>
      </ul>
      
      <h2>Meet Our Team</h2>
      <p>Our team consists of experienced educators, talented content creators, and technology experts dedicated to making education both effective and engaging. [Include a brief introduction to key team members, if applicable.]</p>
      
      <h2>Join Us on Our Journey</h2>
      <p>Whether you are a student looking for study aids, a teacher seeking resources for your classroom, or a curious mind eager to learn something new, <strong>Your Website Name</strong> is here to support your educational journey. Join us as we explore the possibilities of learning and inspire a new generation of thinkers and leaders.</p>
      
      <p>For inquiries, partnerships, or feedback, please contact us at [contact information].</p>
    </div>
  );
};

export default About;
