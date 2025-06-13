import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, GraduationCap, BarChart3, Home, Info } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import { COURSES } from '../../constants/courses';

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsNavVisible(false);
  }, [location]);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      {/* Hero Header - Only show on Home page */}
      {isHomePage && (
        <header className="hero-header">
          <div className="hero-background">
            <div className="hero-overlay"></div>
            <div className="hero-pattern"></div>
          </div>
          <div className="container">
            <div className="hero-content">
              <div className="hero-icon">
                <GraduationCap size={48} />
              </div>
              <h1 className="hero-title">
                <span className="welcome-text">Welcome to</span> <span className="hero-brand">EduZenith</span>
              </h1>
              <p className="hero-subtitle">
                Your gateway to specialized engineering education and resources
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <BookOpen size={20} />
                  <span>5 Branches</span>
                </div>
                <div className="stat-item">
                  <GraduationCap size={20} />
                  <span>100+ Subjects</span>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}

      {/* Navigation */}
      <nav className={`main-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <Link to="/" className="nav-brand">
              <BookOpen size={24} />
              <span>EduZenith</span>
            </Link>

            <div className="nav-actions">
              <button 
                className="nav-toggle"
                onClick={toggleNav}
                aria-label="Toggle navigation"
              >
                {isNavVisible ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            <div className={`nav-menu ${isNavVisible ? 'active' : ''}`}>
              <Link to="/" className="nav-link">
                <Home size={16} />
                Home
              </Link>

              <Link to="/dashboard" className="nav-link">
                <BarChart3 size={16} />
                Dashboard
              </Link>
              
              <div className="nav-dropdown">
                <span className="nav-link dropdown-trigger">
                  <GraduationCap size={16} />
                  Courses
                </span>
                <div className="dropdown-menu">
                  {COURSES.map((course) => (
                    <Link 
                      key={course.id}
                      to={`/course/${course.id}`} 
                      className="dropdown-item"
                    >
                      <span className="course-icon">{course.icon}</span>
                      <div>
                        <div className="course-id">{course.id}</div>
                        <div className="course-name">{course.name}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/about" className="nav-link">
                <Info size={16} />
                About
              </Link>

              <div className="theme-toggle-wrapper">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;