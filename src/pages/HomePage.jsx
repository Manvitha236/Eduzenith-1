import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CourseCard from '../components/ui/CourseCard';
import { BookOpen, Award, TrendingUp, ArrowRight, Star, Zap, Target, Globe, Users, GraduationCap } from 'lucide-react';
import { COURSES } from '../constants/courses';

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

const HomePage = () => {
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
      <section id="courses-section" className="courses-section">
        <div className="container">
          <div className="section-header">
            <h2>Explore Our Engineering Disciplines</h2>
            <p>Select a branch to view courses, semesters, and resource materials tailored to your academic and career interests</p>
          </div>
          <div className="courses-container">
            <div className="courses-grid">
              {COURSES.map((course, index) => (
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
              <a href="#courses-section" className="btn btn-primary btn-lg">
                Explore Courses
                <ArrowRight size={20} />
              </a>
              <a href="/about" className="btn btn-outline btn-lg">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;