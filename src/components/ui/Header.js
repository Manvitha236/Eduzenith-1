import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, GraduationCap, BarChart3, Home, Info } from 'lucide-react';

const courses = [
  { id: 'CSE', name: 'Computer Science Engineering', icon: '💻' },
  { id: 'ECE', name: 'Electronics and Communication Engineering', icon: '📡' },
  { id: 'EEE', name: 'Electrical and Electronics Engineering', icon: '⚡' },
  { id: 'CE', name: 'Civil Engineering', icon: '🏗️' },
  { id: 'ME', name: 'Mechanical Engineering', icon: '⚙️' },
];

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
      {/* Hero Header */}
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
              Welcome to <span className="hero-brand">EduZenith</span>
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

      {/* Navigation */}
      <nav className={`main-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <Link to="/" className="nav-brand">
              <BookOpen size={24} />
              <span>EduZenith</span>
            </Link>

            <button 
              className="nav-toggle"
              onClick={toggleNav}
              aria-label="Toggle navigation"
            >
              {isNavVisible ? <X size={24} /> : <Menu size={24} />}
            </button>

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
                  {courses.map((course) => (
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

              <Link to="/About" className="nav-link">
                <Info size={16} />
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .hero-header {
          position: relative;
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(135deg, var(--primary-600) 0%, var(--primary-800) 50%, var(--secondary-900) 100%);
        }

        .hero-background {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(30, 64, 175, 0.8) 100%);
        }

        .hero-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
          background-size: 100px 100px;
          animation: float 20s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: white;
          max-width: 800px;
          animation: slideUp 0.8s ease-out;
        }

        .hero-icon {
          margin-bottom: var(--space-6);
          opacity: 0.9;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          margin-bottom: var(--space-4);
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          line-height: 1.1;
        }

        .hero-brand {
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(1.125rem, 2.5vw, 1.5rem);
          margin-bottom: var(--space-8);
          opacity: 0.9;
          font-weight: 400;
          line-height: 1.6;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: var(--space-8);
          flex-wrap: wrap;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--text-sm);
          font-weight: 500;
          opacity: 0.9;
        }

        .main-nav {
          position: sticky;
          top: 0;
          z-index: var(--z-sticky);
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--secondary-200);
          transition: all var(--transition-normal);
        }

        .main-nav.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: var(--shadow-lg);
        }

        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--space-4) 0;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--text-xl);
          font-weight: 700;
          color: var(--primary-600);
          text-decoration: none;
        }

        .nav-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--secondary-700);
          padding: var(--space-2);
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }

        .nav-toggle:hover {
          background-color: var(--secondary-100);
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: var(--space-6);
        }

        .nav-link {
          font-weight: 500;
          color: var(--secondary-700);
          text-decoration: none;
          padding: var(--space-2) var(--space-3);
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
          position: relative;
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .nav-link:hover {
          color: var(--primary-600);
          background-color: var(--primary-50);
        }

        .nav-dropdown {
          position: relative;
        }

        .dropdown-trigger {
          cursor: pointer;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 320px;
          background: white;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
          border: 1px solid var(--secondary-200);
          padding: var(--space-2);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all var(--transition-normal);
          z-index: var(--z-dropdown);
        }

        .nav-dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-3);
          border-radius: var(--radius-lg);
          text-decoration: none;
          color: var(--secondary-700);
          transition: all var(--transition-fast);
        }

        .dropdown-item:hover {
          background-color: var(--primary-50);
          color: var(--primary-700);
        }

        .course-icon {
          font-size: var(--text-xl);
        }

        .course-id {
          font-weight: 600;
          font-size: var(--text-sm);
        }

        .course-name {
          font-size: var(--text-xs);
          color: var(--secondary-500);
        }

        @media (max-width: 768px) {
          .hero-header {
            min-height: 50vh;
          }

          .hero-stats {
            gap: var(--space-4);
          }

          .nav-toggle {
            display: block;
          }

          .nav-menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border-top: 1px solid var(--secondary-200);
            box-shadow: var(--shadow-lg);
            flex-direction: column;
            align-items: stretch;
            gap: 0;
            padding: var(--space-4);
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all var(--transition-normal);
          }

          .nav-menu.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          .nav-link {
            padding: var(--space-3);
            border-radius: var(--radius-lg);
          }

          .nav-dropdown {
            width: 100%;
          }

          .dropdown-menu {
            position: static;
            opacity: 1;
            visibility: visible;
            transform: none;
            box-shadow: none;
            border: 1px solid var(--secondary-200);
            margin-top: var(--space-2);
          }
        }
      `}</style>
    </>
  );
};

export default Header;