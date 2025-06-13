import React from 'react';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import CourseCard from '../components/ui/CourseCard';
import { BookOpen, Award, TrendingUp, ArrowRight, Star, Zap, Target, Globe, Users, GraduationCap, BarChart3, Calendar, FileText, Clock } from 'lucide-react';

const courses = [
  {
    id: 'CSE',
    name: 'Computer Science Engineering',
    description: 'Explore the world of computer science, including programming, data structures, algorithms, and cutting-edge technologies like AI and machine learning.',
  },
  {
    id: 'ECE',
    name: 'Electronics and Communication Engineering',
    description: 'Learn about digital circuits, microprocessors, signal processing, communication systems, and modern wireless technologies.',
  },
  {
    id: 'EEE',
    name: 'Electrical and Electronics Engineering',
    description: 'Understand electrical circuits, control systems, power electronics, renewable energy, and smart grid technologies.',
  },
  {
    id: 'CE',
    name: 'Civil Engineering',
    description: 'Study structural analysis, construction management, geotechnical engineering, transportation systems, and sustainable infrastructure.',
  },
  {
    id: 'ME',
    name: 'Mechanical Engineering',
    description: 'Learn about thermodynamics, fluid mechanics, heat transfer, machine design, and advanced manufacturing technologies.',
  },
];

const features = [
  {
    icon: <BookOpen size={32} />,
    title: 'Comprehensive Resources',
    description: 'Access detailed study materials, lecture notes, and practice problems for all engineering subjects.',
    color: 'primary'
  },
  {
    icon: <Award size={32} />,
    title: 'Quality Education',
    description: 'Get access to high-quality educational content that meets industry standards and academic requirements.',
    color: 'success'
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Career Growth',
    description: 'Build skills that matter in today\'s competitive job market and advance your engineering career.',
    color: 'warning'
  }
];

const stats = [
  { number: '5', label: 'Engineering Branches', suffix: '', icon: <Target size={24} /> },
  { number: '100', label: 'Subjects Covered', suffix: '+', icon: <BookOpen size={24} /> },
  { number: '24', label: 'Available', suffix: '/7', icon: <Globe size={24} /> },
  { number: '1000', label: 'Study Materials', suffix: '+', icon: <GraduationCap size={24} /> }
];

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'CSE Student',
    content: 'EduZenith has been instrumental in my academic journey. The comprehensive resources and well-structured content helped me excel in my studies.',
    rating: 5,
    avatar: '👩‍💻'
  },
  {
    name: 'Rahul Kumar',
    role: 'ECE Graduate',
    content: 'The quality of materials and the organized approach to learning made complex topics easy to understand. Highly recommended!',
    rating: 5,
    avatar: '👨‍🔬'
  },
  {
    name: 'Anita Patel',
    role: 'EEE Student',
    content: 'Amazing platform with excellent study materials. The subject-wise organization makes it easy to find exactly what you need.',
    rating: 5,
    avatar: '👩‍🎓'
  }
];

const highlights = [
  {
    icon: <Zap size={24} />,
    title: 'Interactive Learning',
    description: 'Engage with dynamic content and interactive materials'
  },
  {
    icon: <Globe size={24} />,
    title: 'Accessible Anywhere',
    description: 'Study from anywhere, anytime with our responsive platform'
  },
  {
    icon: <Target size={24} />,
    title: 'Focused Content',
    description: 'Curriculum-aligned materials for better exam preparation'
  }
];

const dashboardItems = [
  {
    icon: <BarChart3 size={24} />,
    title: 'Progress Analytics',
    description: 'Track your learning progress across all subjects',
    color: 'primary',
    value: '85%',
    label: 'Completion Rate'
  },
  {
    icon: <Calendar size={24} />,
    title: 'Study Schedule',
    description: 'Personalized study plans and reminders',
    color: 'success',
    value: '12',
    label: 'Active Sessions'
  },
  {
    icon: <FileText size={24} />,
    title: 'Recent Materials',
    description: 'Quick access to your latest study resources',
    color: 'warning',
    value: '24',
    label: 'New Resources'
  },
  {
    icon: <Clock size={24} />,
    title: 'Study Time',
    description: 'Monitor your daily and weekly study hours',
    color: 'accent',
    value: '4.5h',
    label: 'Today'
  }
];

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      
      {/* Hero Highlights */}
      <section className="hero-highlights">
        <div className="container">
          <div className="highlights-wrapper">
            {highlights.map((highlight, index) => (
              <div key={index} className="highlight-item">
                <div className="highlight-icon">
                  {highlight.icon}
                </div>
                <div className="highlight-content">
                  <h4>{highlight.title}</h4>
                  <p>{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="dashboard-section">
        <div className="container">
          <div className="section-header">
            <h2>Your Learning Dashboard</h2>
            <p>Get insights into your academic progress and stay on track with your goals</p>
          </div>
          <div className="dashboard-grid">
            {dashboardItems.map((item, index) => (
              <div key={index} className={`dashboard-card ${item.color}`}>
                <div className="dashboard-header">
                  <div className="dashboard-icon">
                    {item.icon}
                  </div>
                  <div className="dashboard-value">
                    <span className="value">{item.value}</span>
                    <span className="value-label">{item.label}</span>
                  </div>
                </div>
                <div className="dashboard-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="dashboard-footer">
                  <span className="view-details">View Details</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose EduZenith?</h2>
            <p>Discover what makes us the preferred choice for engineering education</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className={`feature-card ${feature.color}`}>
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  {stat.icon}
                </div>
                <div className="stat-content">
                  <div className="stat-number">
                    {stat.number}<span className="stat-suffix">{stat.suffix}</span>
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-section">
        <div className="container">
          <div className="section-header">
            <h2>Explore Our Engineering Disciplines</h2>
            <p>Select a branch to view courses, semesters, and resource materials tailored to your academic and career interests</p>
          </div>
          <div className="courses-container">
            <div className="courses-grid">
              {courses.map((course, index) => (
                <CourseCard key={course.id} course={course} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Students Say</h2>
            <p>Hear from students who have benefited from our educational resources</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    {testimonial.avatar}
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Learning Journey?</h2>
            <p>Join thousands of students who have already benefited from our comprehensive educational resources</p>
            <div className="cta-buttons">
              <a href="#courses" className="btn btn-primary btn-lg">
                Explore Courses
                <ArrowRight size={20} />
              </a>
              <a href="/About" className="btn btn-outline btn-lg">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .home-page {
          min-height: 100vh;
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

        /* Hero Highlights */
        .hero-highlights {
          padding: var(--space-12) 0;
          background: linear-gradient(135deg, var(--primary-50) 0%, var(--accent-50) 100%);
          border-bottom: 1px solid var(--secondary-200);
        }

        .highlights-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-6);
          max-width: 900px;
          margin: 0 auto;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: var(--space-4);
          padding: var(--space-4);
          background: white;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--secondary-200);
          transition: all var(--transition-normal);
        }

        .highlight-item:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .highlight-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: var(--primary-100);
          color: var(--primary-600);
          border-radius: var(--radius-xl);
          flex-shrink: 0;
        }

        .highlight-content h4 {
          font-size: var(--text-base);
          font-weight: 600;
          color: var(--secondary-900);
          margin-bottom: var(--space-1);
        }

        .highlight-content p {
          font-size: var(--text-sm);
          color: var(--secondary-600);
          margin: 0;
          line-height: var(--leading-relaxed);
        }

        /* Dashboard Section */
        .dashboard-section {
          padding: var(--space-20) 0;
          background: white;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-6);
        }

        .dashboard-card {
          background: white;
          border-radius: var(--radius-2xl);
          padding: var(--space-6);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--secondary-200);
          transition: all var(--transition-normal);
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .dashboard-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--primary-500);
          transform: scaleX(0);
          transition: transform var(--transition-normal);
        }

        .dashboard-card.success::before { background: var(--success-500); }
        .dashboard-card.warning::before { background: var(--warning-500); }
        .dashboard-card.accent::before { background: var(--accent-500); }

        .dashboard-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }

        .dashboard-card:hover::before {
          transform: scaleX(1);
        }

        .dashboard-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--space-4);
        }

        .dashboard-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: var(--primary-100);
          color: var(--primary-600);
          border-radius: var(--radius-xl);
        }

        .dashboard-card.success .dashboard-icon {
          background: var(--success-100);
          color: var(--success-600);
        }

        .dashboard-card.warning .dashboard-icon {
          background: var(--warning-100);
          color: var(--warning-600);
        }

        .dashboard-card.accent .dashboard-icon {
          background: var(--accent-100);
          color: var(--accent-600);
        }

        .dashboard-value {
          text-align: right;
        }

        .value {
          display: block;
          font-size: var(--text-2xl);
          font-weight: 800;
          color: var(--secondary-900);
          line-height: 1;
        }

        .value-label {
          font-size: var(--text-xs);
          color: var(--secondary-500);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .dashboard-content h3 {
          font-size: var(--text-lg);
          font-weight: 600;
          color: var(--secondary-900);
          margin-bottom: var(--space-2);
        }

        .dashboard-content p {
          color: var(--secondary-600);
          font-size: var(--text-sm);
          line-height: var(--leading-relaxed);
          margin: 0;
        }

        .dashboard-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: var(--space-4);
          padding-top: var(--space-4);
          border-top: 1px solid var(--secondary-100);
        }

        .view-details {
          font-size: var(--text-sm);
          font-weight: 500;
          color: var(--primary-600);
        }

        /* Features Section */
        .features-section {
          padding: var(--space-20) 0;
          background: var(--secondary-50);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-8);
        }

        .feature-card {
          background: white;
          padding: var(--space-8);
          border-radius: var(--radius-2xl);
          text-align: center;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--secondary-200);
          transition: all var(--transition-normal);
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--primary-500);
          transform: scaleX(0);
          transition: transform var(--transition-normal);
        }

        .feature-card.success::before { background: var(--success-500); }
        .feature-card.warning::before { background: var(--warning-500); }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }

        .feature-card:hover::before {
          transform: scaleX(1);
        }

        .feature-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          border-radius: var(--radius-2xl);
          margin-bottom: var(--space-6);
          background: var(--primary-100);
          color: var(--primary-600);
        }

        .feature-card.success .feature-icon {
          background: var(--success-100);
          color: var(--success-600);
        }

        .feature-card.warning .feature-icon {
          background: var(--warning-100);
          color: var(--warning-600);
        }

        .feature-card h3 {
          font-size: var(--text-xl);
          font-weight: 600;
          color: var(--secondary-900);
          margin-bottom: var(--space-3);
        }

        .feature-card p {
          color: var(--secondary-600);
          line-height: var(--leading-relaxed);
        }

        /* Stats Section */
        .stats-section {
          padding: var(--space-16) 0;
          background: var(--primary-600);
          color: white;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-8);
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: var(--space-4);
          padding: var(--space-6);
          background: rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-xl);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all var(--transition-normal);
        }

        .stat-card:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.15);
        }

        .stat-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: var(--radius-lg);
          flex-shrink: 0;
        }

        .stat-content {
          flex: 1;
        }

        .stat-number {
          font-size: var(--text-3xl);
          font-weight: 800;
          margin-bottom: var(--space-1);
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }

        .stat-suffix {
          font-size: var(--text-3xl);
          font-weight: 800;
        }

        .stat-label {
          font-size: var(--text-sm);
          font-weight: 500;
          opacity: 0.9;
        }

        /* Courses Section */
        .courses-section {
          padding: var(--space-20) 0;
          background: white;
        }

        .courses-container {
          position: relative;
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--space-8);
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Testimonials Section */
        .testimonials-section {
          padding: var(--space-20) 0;
          background: var(--secondary-50);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: var(--space-8);
        }

        .testimonial-card {
          background: white;
          padding: var(--space-8);
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--secondary-200);
          transition: all var(--transition-normal);
        }

        .testimonial-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--space-4);
        }

        .testimonial-avatar {
          font-size: 2rem;
        }

        .testimonial-rating {
          display: flex;
          gap: var(--space-1);
          color: var(--warning-500);
        }

        .testimonial-content {
          font-style: italic;
          color: var(--secondary-700);
          line-height: var(--leading-relaxed);
          margin-bottom: var(--space-6);
        }

        .testimonial-author {
          border-top: 1px solid var(--secondary-200);
          padding-top: var(--space-4);
        }

        .author-name {
          font-weight: 600;
          color: var(--secondary-900);
        }

        .author-role {
          font-size: var(--text-sm);
          color: var(--secondary-500);
        }

        /* CTA Section */
        .cta-section {
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

        @media (max-width: 1024px) {
          .courses-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .section-header h2 {
            font-size: var(--text-2xl);
          }

          .highlights-wrapper {
            grid-template-columns: 1fr;
          }

          .highlight-item {
            flex-direction: column;
            text-align: center;
            gap: var(--space-3);
          }

          .dashboard-grid,
          .features-grid,
          .courses-grid,
          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-4);
          }

          .stat-card {
            flex-direction: column;
            text-align: center;
            gap: var(--space-3);
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

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .highlight-content h4 {
            font-size: var(--text-sm);
          }

          .highlight-content p {
            font-size: var(--text-xs);
          }

          .dashboard-card {
            padding: var(--space-4);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;