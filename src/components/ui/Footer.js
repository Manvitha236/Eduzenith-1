import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="footer-section">
              <div className="footer-brand">
                <BookOpen size={32} />
                <span>EduZenith</span>
              </div>
              <p className="footer-description">
                Empowering engineering students with comprehensive educational resources 
                and innovative learning experiences across multiple disciplines.
              </p>
              <div className="social-links">
                <a href="https://github.com/eduzenith" className="social-link" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/company/eduzenith" className="social-link" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com/eduzenith" className="social-link" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About Us</Link></li>
                <li><Link to="/course/CSE">Computer Science</Link></li>
                <li><Link to="/course/ECE">Electronics & Communication</Link></li>
                <li><Link to="/course/EEE">Electrical & Electronics</Link></li>
              </ul>
            </div>

            {/* Engineering Branches */}
            <div className="footer-section">
              <h3 className="footer-title">Engineering Branches</h3>
              <ul className="footer-links">
                <li><Link to="/course/CSE">CSE</Link></li>
                <li><Link to="/course/ECE">ECE</Link></li>
                <li><Link to="/course/EEE">EEE</Link></li>
                <li><Link to="/course/CE">Civil Engineering</Link></li>
                <li><Link to="/course/ME">Mechanical Engineering</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h3 className="footer-title">Contact Info</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <Mail size={16} />
                  <span>info@eduzenith.com</span>
                </div>
                <div className="contact-item">
                  <Phone size={16} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <MapPin size={16} />
                  <span>Education Hub, Tech City</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} EduZenith. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .main-footer {
          background: linear-gradient(135deg, var(--secondary-900) 0%, var(--secondary-800) 100%);
          color: white;
          margin-top: var(--space-20);
        }

        .footer-content {
          padding: var(--space-16) 0 var(--space-8);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--space-8);
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          font-size: var(--text-2xl);
          font-weight: 700;
          color: var(--primary-400);
          margin-bottom: var(--space-2);
        }

        .footer-description {
          color: var(--secondary-300);
          line-height: var(--leading-relaxed);
          margin-bottom: var(--space-4);
        }

        .social-links {
          display: flex;
          gap: var(--space-3);
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: var(--secondary-700);
          color: var(--secondary-300);
          border-radius: var(--radius-lg);
          text-decoration: none;
          transition: all var(--transition-fast);
        }

        .social-link:hover {
          background-color: var(--primary-600);
          color: white;
          transform: translateY(-2px);
        }

        .footer-title {
          font-size: var(--text-lg);
          font-weight: 600;
          color: white;
          margin-bottom: var(--space-4);
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .footer-links a {
          color: var(--secondary-300);
          text-decoration: none;
          transition: color var(--transition-fast);
          padding: var(--space-1) 0;
        }

        .footer-links a:hover {
          color: var(--primary-400);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          color: var(--secondary-300);
        }

        .footer-bottom {
          border-top: 1px solid var(--secondary-700);
          padding: var(--space-6) 0;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: var(--space-4);
        }

        .footer-bottom-content p {
          color: var(--secondary-400);
          margin: 0;
        }

        .footer-bottom-links {
          display: flex;
          gap: var(--space-6);
        }

        .footer-bottom-links a {
          color: var(--secondary-400);
          text-decoration: none;
          font-size: var(--text-sm);
          transition: color var(--transition-fast);
        }

        .footer-bottom-links a:hover {
          color: var(--primary-400);
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: var(--space-6);
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }

          .footer-bottom-links {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;