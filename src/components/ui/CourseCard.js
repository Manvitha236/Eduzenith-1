import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, Clock, Star } from 'lucide-react';

const CourseCard = ({ course, index }) => {
  const courseIcons = {
    CSE: '💻',
    ECE: '📡',
    EEE: '⚡',
    CE: '🏗️',
    ME: '⚙️'
  };

  const courseStats = {
    CSE: { students: '2.5k+', subjects: 25, duration: '4 years', rating: 4.8 },
    ECE: { students: '2.1k+', subjects: 22, duration: '4 years', rating: 4.7 },
    EEE: { students: '1.8k+', subjects: 20, duration: '4 years', rating: 4.6 },
    CE: { students: '1.5k+', subjects: 18, duration: '4 years', rating: 4.5 },
    ME: { students: '1.7k+', subjects: 19, duration: '4 years', rating: 4.7 }
  };

  const courseColors = {
    CSE: 'primary',
    ECE: 'accent',
    EEE: 'warning',
    CE: 'success',
    ME: 'secondary'
  };

  const stats = courseStats[course.id] || { students: '1k+', subjects: 20, duration: '4 years', rating: 4.5 };
  const color = courseColors[course.id] || 'primary';

  return (
    <div className={`course-card course-${course.id.toLowerCase()}`}>
      <Link to={`/course/${course.id}`} className="course-link">
        <div className="course-card-inner">
          <div className="course-header">
            <div className="course-icon">
              {courseIcons[course.id] || '📚'}
            </div>
            <div className="course-rating">
              <Star size={14} fill="currentColor" />
              <span>{stats.rating}</span>
            </div>
          </div>
          
          <div className="course-content">
            <div className="course-badge">
              {course.id}
            </div>
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
            <div className="arrow-container">
              <ArrowRight size={20} className="arrow-icon" />
            </div>
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
          background: var(--${color}-500);
          transform: scaleX(0);
          transition: transform var(--transition-normal);
        }

        .course-card:hover .course-card-inner {
          transform: translateY(-8px);
          box-shadow: var(--shadow-2xl);
          border-color: var(--${color}-200);
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
          font-size: 3rem;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
          transition: transform var(--transition-normal);
        }

        .course-card:hover .course-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .course-rating {
          display: flex;
          align-items: center;
          gap: var(--space-1);
          padding: var(--space-1) var(--space-2);
          background: var(--warning-100);
          color: var(--warning-700);
          border-radius: var(--radius-full);
          font-size: var(--text-xs);
          font-weight: 600;
        }

        .course-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .course-badge {
          display: inline-block;
          background: linear-gradient(135deg, var(--${color}-500), var(--${color}-600));
          color: white;
          padding: var(--space-1) var(--space-3);
          border-radius: var(--radius-full);
          font-size: var(--text-xs);
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          width: fit-content;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .course-title {
          font-size: var(--text-xl);
          font-weight: 700;
          color: var(--secondary-900);
          line-height: var(--leading-tight);
          margin: 0;
        }

        .course-description {
          color: var(--secondary-600);
          line-height: var(--leading-relaxed);
          flex: 1;
          margin: 0;
          font-size: var(--text-sm);
        }

        .course-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-2);
          margin-top: var(--space-2);
          padding: var(--space-3);
          background: var(--neutral-50);
          border-radius: var(--radius-lg);
          border: 1px solid var(--secondary-100);
        }

        .stat {
          display: flex;
          align-items: center;
          gap: var(--space-1);
          color: var(--secondary-600);
          font-size: var(--text-xs);
          font-weight: 500;
          justify-content: center;
          text-align: center;
        }

        .course-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: var(--space-6);
          padding: var(--space-4) 0;
          border-top: 1px solid var(--secondary-100);
        }

        .explore-text {
          font-weight: 600;
          color: var(--${color}-600);
          font-size: var(--text-sm);
        }

        .arrow-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: var(--${color}-100);
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
        }

        .arrow-icon {
          color: var(--${color}-600);
          transition: transform var(--transition-fast);
        }

        .course-card:hover .arrow-container {
          background: var(--${color}-600);
          transform: scale(1.1);
        }

        .course-card:hover .arrow-icon {
          color: white;
          transform: translateX(2px);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .course-card-inner {
            padding: var(--space-5);
          }

          .course-stats {
            grid-template-columns: 1fr;
            gap: var(--space-2);
          }

          .stat {
            justify-content: flex-start;
            font-size: var(--text-xs);
          }

          .course-icon {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .course-header {
            flex-direction: column;
            gap: var(--space-2);
            align-items: center;
          }

          .course-stats {
            padding: var(--space-2);
          }
        }
      `}</style>
    </div>
  );
};

export default CourseCard;