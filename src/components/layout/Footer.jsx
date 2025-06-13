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
                <li><Link to="/about">About Us</Link></li>
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
    </footer>
  );
};

export default Footer;