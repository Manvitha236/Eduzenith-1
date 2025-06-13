import React from 'react';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import { Target, Eye, Award, Mail, Linkedin, Github } from 'lucide-react';

const About = () => {
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

  return (
    <div className="about-page">
      <Header />
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to EduZenith</h1>
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

      <style jsx>{`
        .about-page {
          min-height: 100vh;
        }

        .about-hero {
          padding: var(--space-20) 0;
          background: linear-gradient(135deg, var(--primary-50) 0%, var(--secondary-50) 100%);
        }

        .hero-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-content h1 {
          font-size: var(--text-5xl);
          font-weight: 800;
          color: var(--secondary-900);
          margin-bottom: var(--space-6);
          background: linear-gradient(135deg, var(--primary-600), var(--accent-600));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: var(--text-xl);
          color: var(--secondary-600);
          line-height: var(--leading-relaxed);
          margin: 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--space-12);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-header h2 {
          font-size: var(--text-3xl);
          font-weight: 700;
          color: var(--secondary-900);
          margin-bottom: var(--space-4);
        }

        .section-header p {
          font-size: var(--text-lg);
          color: var(--secondary-600);
          line-height: var(--leading-relaxed);
        }

        /* Values Section */
        .values-section {
          padding: var(--space-20) 0;
          background: white;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-8);
        }

        .value-card {
          text-align: center;
          padding: var(--space-8);
          border-radius: var(--radius-2xl);
          background: var(--neutral-50);
          border: 1px solid var(--secondary-200);
          transition: all var(--transition-normal);
        }

        .value-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          background: white;
        }

        .value-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          border-radius: var(--radius-2xl);
          background: var(--primary-100);
          color: var(--primary-600);
          margin-bottom: var(--space-6);
        }

        .value-card h3 {
          font-size: var(--text-xl);
          font-weight: 600;
          color: var(--secondary-900);
          margin-bottom: var(--space-4);
        }

        .value-card p {
          color: var(--secondary-600);
          line-height: var(--leading-relaxed);
        }

        /* Offerings Section */
        .offerings-section {
          padding: var(--space-20) 0;
          background: var(--secondary-50);
        }

        .offerings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-6);
        }

        .offering-card {
          background: white;
          padding: var(--space-6);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--secondary-200);
          transition: all var(--transition-normal);
        }

        .offering-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .offering-icon {
          font-size: 2.5rem;
          margin-bottom: var(--space-4);
        }

        .offering-card h3 {
          font-size: var(--text-lg);
          font-weight: 600;
          color: var(--secondary-900);
          margin-bottom: var(--space-3);
        }

        .offering-card p {
          color: var(--secondary-600);
          line-height: var(--leading-relaxed);
        }

        /* Team Section */
        .team-section {
          padding: var(--space-20) 0;
          background: white;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: var(--space-8);
        }

        .team-card {
          background: var(--neutral-50);
          border-radius: var(--radius-2xl);
          padding: var(--space-8);
          border: 1px solid var(--secondary-200);
          transition: all var(--transition-normal);
        }

        .team-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          background: white;
        }

        .team-avatar {
          font-size: 4rem;
          text-align: center;
          margin-bottom: var(--space-6);
        }

        .team-info h3 {
          font-size: var(--text-xl);
          font-weight: 600;
          color: var(--secondary-900);
          margin-bottom: var(--space-1);
          text-align: center;
        }

        .team-role {
          font-size: var(--text-base);
          color: var(--primary-600);
          font-weight: 500;
          text-align: center;
          margin-bottom: var(--space-4);
        }

        .team-description {
          color: var(--secondary-600);
          line-height: var(--leading-relaxed);
          margin-bottom: var(--space-6);
        }

        .team-skills {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2);
          margin-bottom: var(--space-6);
          justify-content: center;
        }

        .skill-tag {
          background: var(--primary-100);
          color: var(--primary-700);
          padding: var(--space-1) var(--space-3);
          border-radius: var(--radius-full);
          font-size: var(--text-sm);
          font-weight: 500;
        }

        .team-social {
          display: flex;
          justify-content: center;
          gap: var(--space-3);
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: var(--secondary-200);
          color: var(--secondary-600);
          border-radius: var(--radius-lg);
          text-decoration: none;
          transition: all var(--transition-fast);
        }

        .social-link:hover {
          background: var(--primary-600);
          color: white;
          transform: translateY(-2px);
        }

        /* CTA Section */
        .about-cta {
          padding: var(--space-20) 0;
          background: linear-gradient(135deg, var(--primary-600) 0%, var(--primary-800) 100%);
          color: white;
        }

        .cta-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-size: var(--text-4xl);
          font-weight: 700;
          margin-bottom: var(--space-4);
          color: white;
        }

        .cta-content p {
          font-size: var(--text-lg);
          margin-bottom: var(--space-8);
          opacity: 0.9;
          line-height: var(--leading-relaxed);
        }

        .cta-buttons {
          display: flex;
          gap: var(--space-4);
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-outline {
          background-color: transparent;
          color: white;
          border: 2px solid white;
        }

        .btn-outline:hover {
          background-color: white;
          color: var(--primary-600);
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: var(--text-4xl);
          }

          .values-grid,
          .offerings-grid {
            grid-template-columns: 1fr;
          }

          .team-grid {
            grid-template-columns: 1fr;
          }

          .cta-content h2 {
            font-size: var(--text-3xl);
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn-lg {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default About;