import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Target, Eye, Award, Mail, Linkedin, Github } from 'lucide-react';

const values = [
  {
    icon: <Target size={32} />,
    title: 'Our Mission',
    description: 'To democratize education by making high-quality resources accessible to everyone. We strive to break down barriers to education by offering a wide range of materials that cater to diverse learning needs and styles.'
  },
  {
    icon: <Eye size={32} />,
    title: 'Our Vision',
    description: 'We envision a world where everyone has the tools and knowledge they need to succeed. Our goal is to be at the forefront of educational innovation, constantly updating our offerings to include the latest research and learning strategies.'
  },
  {
    icon: <Award size={32} />,
    title: 'Our Values',
    description: 'Excellence, Innovation, Accessibility, and Community. We believe in providing the highest quality educational content while fostering a supportive learning environment for all students.'
  }
];

const offerings = [
  {
    title: 'Comprehensive Learning Materials',
    description: 'From textbooks and video tutorials to interactive simulations and quizzes, our content covers a wide array of subjects and levels.',
    icon: '📚'
  },
  {
    title: 'Expert Contributions',
    description: 'Our materials are created and reviewed by experts who are passionate about education and committed to providing valuable and accurate content.',
    icon: '👨‍🏫'
  },
  {
    title: 'Customized Learning Experiences',
    description: 'With advanced tools and features, users can customize their learning experiences to match their personal learning style and pace.',
    icon: '🎯'
  }
];

const team = [
  {
    name: 'Alex Prince',
    role: 'Lead Developer',
    description: 'Alex is a highly skilled developer with extensive experience in web development and technology integration. His expertise in building robust and user-friendly websites has been instrumental in the creation of this platform.',
    skills: ['React', 'Node.js', 'Database Design', 'UI/UX'],
    avatar: '👨‍💻',
    social: {
      linkedin: '#',
      github: '#',
      email: 'alex@eduzenith.com'
    }
  },
  {
    name: 'Venkata Manvitha',
    role: 'Frontend Developer & Designer',
    description: 'Manvitha is a talented developer with a background in multimedia design and instructional technology. She excels at creating engaging and interactive web content, ensuring a seamless and visually appealing user experience.',
    skills: ['React', 'CSS/SCSS', 'Design Systems', 'Animation'],
    avatar: '👩‍💻',
    social: {
      linkedin: '#',
      github: '#',
      email: 'manvitha@eduzenith.com'
    }
  }
];

const AboutPage = () => {
  return (
    <div className="about-page">
      <Header />
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>About EduZenith</h1>
            <p className="hero-subtitle">
              Your ultimate source for innovative and impactful educational content. 
              We believe in empowering students, educators, and lifelong learners to achieve their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="offerings-section">
        <div className="container">
          <div className="section-header">
            <h2>What We Offer</h2>
            <p>Comprehensive educational solutions designed to enhance your learning experience</p>
          </div>
          <div className="offerings-grid">
            {offerings.map((offering, index) => (
              <div key={index} className="offering-card">
                <div className="offering-icon">{offering.icon}</div>
                <h3>{offering.title}</h3>
                <p>{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>The talented individuals behind EduZenith who are dedicated to making education effective and engaging</p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">
                  {member.avatar}
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                  <div className="team-skills">
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                  <div className="team-social">
                    <a href={member.social.email} className="social-link">
                      <Mail size={18} />
                    </a>
                    <a href={member.social.linkedin} className="social-link">
                      <Linkedin size={18} />
                    </a>
                    <a href={member.social.github} className="social-link">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Join Us on Our Journey</h2>
            <p>
              Whether you are a student looking for study aids, a teacher seeking resources for your classroom, 
              or a curious mind eager to learn something new, EduZenith is here to support your educational journey.
            </p>
            <div className="cta-buttons">
              <a href="/" className="btn btn-primary btn-lg">
                Explore Courses
              </a>
              <a href="mailto:info@eduzenith.com" className="btn btn-outline btn-lg">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;