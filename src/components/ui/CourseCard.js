import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, Clock } from 'lucide-react';

const CourseCard = ({ course, index }) => {
  const courseIcons = {
    CSE: '💻',
    ECE: '📡',
    EEE: '⚡',
    CE: '🏗️',
    ME: '⚙️'
  };

  const courseStats = {
    CSE: { students: '2.5k+', subjects: 25, duration: '4 years' },
    ECE: { students: '2.1k+', subjects: 22, duration: '4 years' },
    EEE: { students: '1.8k+', subjects: 20, duration: '4 years' },
    CE: { students: '1.5k+', subjects: 18, duration: '4 years' },
    ME: { students: '1.7k+', subjects: 19, duration: '4 years' }
  };

  const stats = courseStats[course.id] || { students: '1k+', subjects: 20, duration: '4 years' };

  return (
    <div className={`course-card ${index === 4 ? 'featured' : ''}`}>
      <Link to={`/course/${course.id}`} className="course-link">
        <div className="course-card-inner">
          <div className="course-header">
            <div className="course-icon">
              {courseIcons[course.id] || '📚'}
            </div>
            <div className="course-badge">
              {course.id}
            </div>
          </div>
          
          <div className="course-content">
            <h3 className="course-title">{course.name}</h3>
            <p className="course-description">{course.description}</p>
            
            <div className="course-stats">
              <div className="stat">
                <Users size={16} />
                <span>{stats.students}</span>
              </div>
              <div className="stat">
                <BookOpen size={16} />
                <span>{stats.subjects} subjects</span>
              </div>
              <div className="stat">
                <Clock size={16} />
                <span>{stats.duration}</span>
              </div>
            </div>
          </div>
          
          <div className="course-footer">
            <span className="explore-text">Explore Course</span>
            <ArrowRight size={20} className="arrow-icon" />
          </div>
        </div>
      </Link>

      <style jsx>{`
        .course-card {
          height: 100%;
          transition: all var(--transition-normal);
          animation: slideUp 0.6s ease-out;
          animation-delay: ${index * 0.1}s;
          animation-fill-mode: both;
        }

        .course-card.featured {
          grid-column: 1 / -1;
          max-width: 600px;
          margin: 0 auto;
        }

        .course-link {
          display: block;
          height: 100%;
          text-decoration: none;
          color: inherit;
        }

        .course-card-inner {
          height: 100%;
          background: white;
          border-radius: var(--radius-2xl);
          padding: var(--space-6);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--secondary-200);
          transition: all var(--transition-normal);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .course-card-inner::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--primary-500), var(--accent-500));
          transform: scaleX(0);
          transition: transform var(--transition-normal);
        }

        .course-card:hover .course-card-inner {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
          border-color: var(--primary-200);
        }

        .course-card:hover .course-card-inner::before {
          transform: scaleX(1);
        }

        .course-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--space-4);
        }

        .course-icon {
          font-size: 2.5rem;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }

        .course-badge {
          background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
          color: white;
          padding: var(--space-1) var(--space-3);
          border-radius: var(--radius-full);
          font-size: var(--text-sm);
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .course-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .course-title {
          font-size: var(--text-xl);
          font-weight: 600;
          color: var(--secondary-900);
          line-height: var(--leading-tight);
          margin: 0;
        }

        .course-description {
          color: var(--secondary-600);
          line-height: var(--leading-relaxed);
          flex: 1;
          margin: 0;
        }

        .course-stats {
          display: flex;
          gap: var(--space-4);
          margin-top: var(--space-2);
          flex-wrap: wrap;
        }

        .stat {
          display: flex;
          align-items: center;
          gap: var(--space-1);
          color: var(--secondary-500);
          font-size: var(--text-sm);
        }

        .course-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: var(--space-6);
          padding-top: var(--space-4);
          border-top: 1px solid var(--secondary-100);
        }

        .explore-text {
          font-weight: 500;
          color: var(--primary-600);
          font-size: var(--text-sm);
        }

        .arrow-icon {
          color: var(--primary-600);
          transition: transform var(--transition-fast);
        }

        .course-card:hover .arrow-icon {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .course-card-inner {
            padding: var(--space-5);
          }

          .course-stats {
            gap: var(--space-3);
          }

          .stat {
            font-size: var(--text-xs);
          }
        }
      `}</style>
    </div>
  );
};

export default CourseCard;