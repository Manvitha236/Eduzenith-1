import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Target, Eye, Award, Mail, Linkedin, Github, Sparkles, Users, Heart, Zap, Globe, BookOpen, Star, ArrowRight } from 'lucide-react';

const values = [
  {
    icon: <Target size={40} />,
    title: 'Our Mission',
    description: 'To democratize education by making high-quality resources accessible to everyone. We strive to break down barriers to education by offering a wide range of materials that cater to diverse learning needs and styles.',
    color: 'primary',
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    icon: <Eye size={40} />,
    title: 'Our Vision',
    description: 'We envision a world where everyone has the tools and knowledge they need to succeed. Our goal is to be at the forefront of educational innovation, constantly updating our offerings to include the latest research and learning strategies.',
    color: 'success',
    gradient: 'from-green-500 to-teal-600'
  },
  {
    icon: <Award size={40} />,
    title: 'Our Values',
    description: 'Excellence, Innovation, Accessibility, and Community. We believe in providing the highest quality educational content while fostering a supportive learning environment for all students.',
    color: 'warning',
    gradient: 'from-orange-500 to-red-600'
  }
];

const offerings = [
  {
    title: 'Comprehensive Learning Materials',
    description: 'From textbooks and video tutorials to interactive simulations and quizzes, our content covers a wide array of subjects and levels.',
    icon: <BookOpen size={32} />,
    color: 'primary',
    stats: '1000+ Resources'
  },
  {
    title: 'Expert Contributions',
    description: 'Our materials are created and reviewed by experts who are passionate about education and committed to providing valuable and accurate content.',
    icon: <Users size={32} />,
    color: 'success',
    stats: '50+ Experts'
  },
  {
    title: 'Customized Learning Experiences',
    description: 'With advanced tools and features, users can customize their learning experiences to match their personal learning style and pace.',
    icon: <Zap size={32} />,
    color: 'accent',
    stats: 'Personalized'
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
    },
    achievements: ['5+ Years Experience', 'Full Stack Expert', 'Open Source Contributor']
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
    },
    achievements: ['UI/UX Specialist', 'Design Systems Expert', 'Animation Pro']
  }
];

const stats = [
  { number: '10K+', label: 'Students Helped', icon: <Users size={24} /> },
  { number: '5', label: 'Engineering Branches', icon: <BookOpen size={24} /> },
  { number: '100+', label: 'Study Materials', icon: <Star size={24} /> },
  { number: '24/7', label: 'Support Available', icon: <Globe size={24} /> }
];

const features = [
  {
    icon: <Sparkles size={24} />,
    title: 'Innovation First',
    description: 'Cutting-edge educational technology'
  },
  {
    icon: <Heart size={24} />,
    title: 'Student Focused',
    description: 'Everything we do is for student success'
  },
  {
    icon: <Globe size={24} />,
    title: 'Global Reach',
    description: 'Accessible from anywhere in the world'
  },
  {
    icon: <Zap size={24} />,
    title: 'Fast & Reliable',
    description: 'Lightning-fast performance guaranteed'
  }
];

const AboutPage = () => {
  return (
    <div className="about-page">
      <Header />
      
      {/* Hero Section with Animated Background */}
      <section className="about-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="floating-elements">
            <div className="floating-element element-1">📚</div>
            <div className="floating-element element-2">🎓</div>
            <div className="floating-element element-3">💡</div>
            <div className="floating-element element-4">🚀</div>
            <div className="floating-element element-5">⭐</div>
            <div className="floating-element element-6">🔬</div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>About EduZenith</span>
            </div>
            <h1 className="hero-title">
              Empowering the Next Generation of 
              <span className="gradient-text"> Engineers</span>
            </h1>
            <p className="hero-subtitle">
              We're on a mission to revolutionize engineering education through innovative technology, 
              comprehensive resources, and a passionate commitment to student success.
            </p>
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="hero-stat">
                  <div className="stat-icon">
                    {stat.icon}
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="features-strip">
        <div className="container">
          <div className="features-wrapper">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <div className="feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section with Enhanced Design */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Target size={16} />
              <span>Our Foundation</span>
            </div>
            <h2>What Drives Us Forward</h2>
            <p>The core principles that guide everything we do at EduZenith</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className={`value-card ${value.color}`}>
                <div className="card-background">
                  <div className={`gradient-bg ${value.gradient}`}></div>
                </div>
                <div className="card-content">
                  <div className="value-icon">
                    {value.icon}
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                  <div className="card-shine"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="offerings-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <BookOpen size={16} />
              <span>Our Services</span>
            </div>
            <h2>What We Offer</h2>
            <p>Comprehensive educational solutions designed to enhance your learning experience</p>
          </div>
          <div className="offerings-grid">
            {offerings.map((offering, index) => (
              <div key={index} className={`offering-card ${offering.color}`}>
                <div className="offering-header">
                  <div className="offering-icon">
                    {offering.icon}
                  </div>
                  <div className="offering-stats">
                    {offering.stats}
                  </div>
                </div>
                <div className="offering-content">
                  <h3>{offering.title}</h3>
                  <p>{offering.description}</p>
                </div>
                <div className="offering-footer">
                  <ArrowRight size={20} className="arrow-icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Enhanced Cards */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Users size={16} />
              <span>Our Team</span>
            </div>
            <h2>Meet the Visionaries</h2>
            <p>The talented individuals behind EduZenith who are dedicated to making education effective and engaging</p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-card-inner">
                  <div className="team-header">
                    <div className="team-avatar">
                      <span className="avatar-emoji">{member.avatar}</span>
                      <div className="avatar-ring"></div>
                    </div>
                    <div className="team-basic-info">
                      <h3>{member.name}</h3>
                      <p className="team-role">{member.role}</p>
                    </div>
                  </div>
                  
                  <div className="team-content">
                    <p className="team-description">{member.description}</p>
                    
                    <div className="team-achievements">
                      <h4>Achievements</h4>
                      <div className="achievements-list">
                        {member.achievements.map((achievement, achIndex) => (
                          <span key={achIndex} className="achievement-tag">
                            <Star size={12} />
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="team-skills">
                      <h4>Expertise</h4>
                      <div className="skills-list">
                        {member.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="team-footer">
                    <div className="team-social">
                      <a href={member.social.email} className="social-link email">
                        <Mail size={18} />
                      </a>
                      <a href={member.social.linkedin} className="social-link linkedin">
                        <Linkedin size={18} />
                      </a>
                      <a href={member.social.github} className="social-link github">
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Enhanced Design */}
      <section className="about-cta">
        <div className="cta-background">
          <div className="cta-overlay"></div>
          <div className="cta-pattern"></div>
        </div>
        <div className="container">
          <div className="cta-content">
            <div className="cta-badge">
              <Heart size={16} />
              <span>Join Our Mission</span>
            </div>
            <h2>Ready to Transform Your Learning Journey?</h2>
            <p>
              Whether you are a student looking for study aids, a teacher seeking resources for your classroom, 
              or a curious mind eager to learn something new, EduZenith is here to support your educational journey.
            </p>
            <div className="cta-buttons">
              <a href="/" className="btn btn-primary btn-lg cta-btn-primary">
                <Sparkles size={20} />
                Explore Courses
              </a>
              <a href="mailto:info@eduzenith.com" className="btn btn-outline btn-lg cta-btn-secondary">
                <Mail size={20} />
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