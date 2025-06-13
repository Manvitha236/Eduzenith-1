import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, Clock, Star } from 'lucide-react';
import { COURSE_STATS, COURSE_COLORS } from '../../constants/courses';

const CourseCard = ({ course, index }) => {
  const stats = COURSE_STATS[course.id] || { students: '1k+', subjects: 20, duration: '4 years', rating: 4.5 };
  const color = COURSE_COLORS[course.id] || 'primary';

  return (
    <div className={`course-card course-${course.id.toLowerCase()}`}>
      <Link to={`/course/${course.id}`} className="course-link">
        <div className="course-card-inner">
          <div className="course-header">
            <div className="course-icon">
              {course.icon}
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
    </div>
  );
};

export default CourseCard;