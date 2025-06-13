import React, { useState } from 'react';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import { 
  BarChart3, 
  Calendar, 
  FileText, 
  Clock, 
  TrendingUp, 
  BookOpen, 
  Target, 
  Award,
  Users,
  Play,
  Download,
  Star,
  ChevronRight,
  Activity,
  Brain,
  Zap
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const dashboardStats = [
    {
      icon: <BarChart3 size={24} />,
      title: 'Progress Analytics',
      description: 'Track your learning progress across all subjects',
      color: 'primary',
      value: '85%',
      label: 'Completion Rate',
      trend: '+12%',
      trendUp: true
    },
    {
      icon: <Calendar size={24} />,
      title: 'Study Schedule',
      description: 'Personalized study plans and reminders',
      color: 'success',
      value: '12',
      label: 'Active Sessions',
      trend: '+3',
      trendUp: true
    },
    {
      icon: <FileText size={24} />,
      title: 'Recent Materials',
      description: 'Quick access to your latest study resources',
      color: 'warning',
      value: '24',
      label: 'New Resources',
      trend: '+8',
      trendUp: true
    },
    {
      icon: <Clock size={24} />,
      title: 'Study Time',
      description: 'Monitor your daily and weekly study hours',
      color: 'accent',
      value: '4.5h',
      label: 'Today',
      trend: '+0.5h',
      trendUp: true
    }
  ];

  const recentActivities = [
    {
      type: 'study',
      subject: 'Data Structures',
      action: 'Completed Unit 3: Trees',
      time: '2 hours ago',
      icon: <BookOpen size={16} />,
      color: 'success'
    },
    {
      type: 'download',
      subject: 'Computer Networks',
      action: 'Downloaded Unit 2 PDF',
      time: '4 hours ago',
      icon: <Download size={16} />,
      color: 'primary'
    },
    {
      type: 'achievement',
      subject: 'General',
      action: 'Earned "Consistent Learner" badge',
      time: '1 day ago',
      icon: <Award size={16} />,
      color: 'warning'
    },
    {
      type: 'study',
      subject: 'Operating Systems',
      action: 'Started Unit 4: Deadlocks',
      time: '2 days ago',
      icon: <Play size={16} />,
      color: 'accent'
    }
  ];

  const upcomingTasks = [
    {
      title: 'Complete Database Management Systems Assignment',
      subject: 'DBMS',
      dueDate: 'Tomorrow',
      priority: 'high',
      progress: 60
    },
    {
      title: 'Review Computer Networks Unit 5',
      subject: 'CN',
      dueDate: '3 days',
      priority: 'medium',
      progress: 30
    },
    {
      title: 'Prepare for Operating Systems Quiz',
      subject: 'OS',
      dueDate: '1 week',
      priority: 'low',
      progress: 10
    }
  ];

  const learningInsights = [
    {
      icon: <Brain size={20} />,
      title: 'Learning Streak',
      value: '15 days',
      description: 'Keep it up! You\'re on fire!',
      color: 'success'
    },
    {
      icon: <Target size={20} />,
      title: 'Weekly Goal',
      value: '8/10 hours',
      description: '2 hours left to reach your goal',
      color: 'primary'
    },
    {
      icon: <Zap size={20} />,
      title: 'Most Active Subject',
      value: 'Data Structures',
      description: '12 hours this week',
      color: 'warning'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BarChart3 size={16} /> },
    { id: 'progress', label: 'Progress', icon: <TrendingUp size={16} /> },
    { id: 'schedule', label: 'Schedule', icon: <Calendar size={16} /> },
    { id: 'resources', label: 'Resources', icon: <FileText size={16} /> }
  ];

  return (
    <div className="dashboard-page">
      <Header />
      
      {/* Dashboard Hero */}
      <section className="dashboard-hero">
        <div className="container">
          <div className="hero-content">
            <div className="welcome-section">
              <h1>Welcome back, Student!</h1>
              <p>Here's your learning progress and upcoming tasks</p>
            </div>
            <div className="quick-stats">
              <div className="quick-stat">
                <Activity size={20} />
                <span>Active</span>
              </div>
              <div className="quick-stat">
                <Users size={20} />
                <span>CSE Student</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Navigation */}
      <section className="dashboard-nav">
        <div className="container">
          <div className="tab-navigation">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Dashboard Content */}
      <main className="dashboard-main">
        <div className="container">
          {activeTab === 'overview' && (
            <div className="dashboard-content">
              {/* Stats Grid */}
              <div className="stats-grid">
                {dashboardStats.map((stat, index) => (
                  <div key={index} className={`stat-card ${stat.color}`}>
                    <div className="stat-header">
                      <div className="stat-icon">
                        {stat.icon}
                      </div>
                      <div className={`stat-trend ${stat.trendUp ? 'up' : 'down'}`}>
                        <TrendingUp size={14} />
                        <span>{stat.trend}</span>
                      </div>
                    </div>
                    <div className="stat-content">
                      <div className="stat-value">
                        <span className="value">{stat.value}</span>
                        <span className="value-label">{stat.label}</span>
                      </div>
                      <h3>{stat.title}</h3>
                      <p>{stat.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Content Grid */}
              <div className="content-grid">
                {/* Recent Activities */}
                <div className="dashboard-section">
                  <div className="section-header">
                    <h2>Recent Activities</h2>
                    <button className="view-all-btn">
                      View All
                      <ChevronRight size={16} />
                    </button>
                  </div>
                  <div className="activities-list">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="activity-item">
                        <div className={`activity-icon ${activity.color}`}>
                          {activity.icon}
                        </div>
                        <div className="activity-content">
                          <div className="activity-main">
                            <span className="activity-subject">{activity.subject}</span>
                            <span className="activity-action">{activity.action}</span>
                          </div>
                          <span className="activity-time">{activity.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Tasks */}
                <div className="dashboard-section">
                  <div className="section-header">
                    <h2>Upcoming Tasks</h2>
                    <button className="view-all-btn">
                      View All
                      <ChevronRight size={16} />
                    </button>
                  </div>
                  <div className="tasks-list">
                    {upcomingTasks.map((task, index) => (
                      <div key={index} className="task-item">
                        <div className="task-content">
                          <h4>{task.title}</h4>
                          <div className="task-meta">
                            <span className="task-subject">{task.subject}</span>
                            <span className="task-due">Due: {task.dueDate}</span>
                            <span className={`task-priority ${task.priority}`}>
                              {task.priority} priority
                            </span>
                          </div>
                          <div className="task-progress">
                            <div className="progress-bar">
                              <div 
                                className="progress-fill" 
                                style={{ width: `${task.progress}%` }}
                              ></div>
                            </div>
                            <span className="progress-text">{task.progress}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Learning Insights */}
              <div className="insights-section">
                <h2>Learning Insights</h2>
                <div className="insights-grid">
                  {learningInsights.map((insight, index) => (
                    <div key={index} className={`insight-card ${insight.color}`}>
                      <div className="insight-icon">
                        {insight.icon}
                      </div>
                      <div className="insight-content">
                        <h3>{insight.title}</h3>
                        <div className="insight-value">{insight.value}</div>
                        <p>{insight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'progress' && (
            <div className="dashboard-content">
              <div className="progress-overview">
                <h2>Learning Progress Overview</h2>
                <p>Track your progress across all subjects and courses</p>
                {/* Progress content would go here */}
                <div className="coming-soon">
                  <h3>Detailed Progress Analytics Coming Soon!</h3>
                  <p>We're working on comprehensive progress tracking features.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'schedule' && (
            <div className="dashboard-content">
              <div className="schedule-overview">
                <h2>Study Schedule</h2>
                <p>Manage your study sessions and upcoming deadlines</p>
                {/* Schedule content would go here */}
                <div className="coming-soon">
                  <h3>Smart Scheduling Coming Soon!</h3>
                  <p>AI-powered study scheduling to optimize your learning.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="dashboard-content">
              <div className="resources-overview">
                <h2>Learning Resources</h2>
                <p>Access your downloaded materials and bookmarked content</p>
                {/* Resources content would go here */}
                <div className="coming-soon">
                  <h3>Resource Management Coming Soon!</h3>
                  <p>Organize and access all your study materials in one place.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .dashboard-page {
          min-height: 100vh;
          background: var(--bg-primary);
          color: var(--text-primary);
        }

        /* Dashboard Hero */
        .dashboard-hero {
          background: var(--gradient-primary);
          color: white;
          padding: var(--space-12) 0 var(--space-8);
        }

        .hero-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: var(--space-6);
        }

        .welcome-section h1 {
          font-size: var(--text-4xl);
          font-weight: 800;
          margin-bottom: var(--space-2);
          color: white;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .welcome-section p {
          font-size: var(--text-lg);
          opacity: 0.9;
          margin: 0;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .quick-stats {
          display: flex;
          gap: var(--space-4);
        }

        .quick-stat {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-4);
          background: rgba(255, 255, 255, 0.15);
          border-radius: var(--radius-full);
          font-size: var(--text-sm);
          font-weight: 500;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* Dashboard Navigation */
        .dashboard-nav {
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-primary);
          padding: var(--space-4) 0;
          position: sticky;
          top: 0;
          z-index: var(--z-sticky);
        }

        .tab-navigation {
          display: flex;
          gap: var(--space-2);
          overflow-x: auto;
          padding-bottom: var(--space-2);
        }

        .tab-button {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-3) var(--space-6);
          background: transparent;
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg);
          font-size: var(--text-sm);
          font-weight: 500;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
          white-space: nowrap;
        }

        .tab-button:hover {
          background: var(--bg-hover);
          border-color: var(--border-secondary);
        }

        .tab-button.active {
          background: var(--primary-600);
          border-color: var(--primary-600);
          color: white;
        }

        /* Main Dashboard */
        .dashboard-main {
          padding: var(--space-8) 0 var(--space-20);
        }

        .dashboard-content {
          display: flex;
          flex-direction: column;
          gap: var(--space-8);
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-6);
        }

        .stat-card {
          background: var(--bg-card);
          border-radius: var(--radius-2xl);
          padding: var(--space-6);
          box-shadow: var(--shadow-color);
          border: 1px solid var(--border-primary);
          transition: all var(--transition-normal);
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
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

        .stat-card.success::before { background: var(--success-500); }
        .stat-card.warning::before { background: var(--warning-500); }
        .stat-card.accent::before { background: var(--accent-500); }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
        }

        .stat-card:hover::before {
          transform: scaleX(1);
        }

        .stat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--space-4);
        }

        .stat-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: var(--primary-100);
          color: var(--primary-600);
          border-radius: var(--radius-xl);
        }

        .stat-card.success .stat-icon {
          background: var(--success-100);
          color: var(--success-600);
        }

        .stat-card.warning .stat-icon {
          background: var(--warning-100);
          color: var(--warning-600);
        }

        .stat-card.accent .stat-icon {
          background: var(--accent-100);
          color: var(--accent-600);
        }

        .stat-trend {
          display: flex;
          align-items: center;
          gap: var(--space-1);
          padding: var(--space-1) var(--space-2);
          background: var(--success-100);
          color: var(--success-700);
          border-radius: var(--radius-full);
          font-size: var(--text-xs);
          font-weight: 600;
        }

        .stat-trend.down {
          background: var(--error-100);
          color: var(--error-700);
        }

        .stat-content {
          text-align: left;
        }

        .stat-value {
          margin-bottom: var(--space-3);
        }

        .value {
          display: block;
          font-size: var(--text-3xl);
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1;
        }

        .value-label {
          font-size: var(--text-xs);
          color: var(--text-tertiary);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .stat-content h3 {
          font-size: var(--text-lg);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--space-2);
        }

        .stat-content p {
          color: var(--text-secondary);
          font-size: var(--text-sm);
          line-height: var(--leading-relaxed);
          margin: 0;
        }

        /* Content Grid */
        .content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: var(--space-8);
        }

        .dashboard-section {
          background: var(--bg-card);
          border-radius: var(--radius-2xl);
          padding: var(--space-6);
          box-shadow: var(--shadow-color);
          border: 1px solid var(--border-primary);
        }

        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--space-6);
          padding-bottom: var(--space-4);
          border-bottom: 1px solid var(--border-primary);
        }

        .section-header h2 {
          font-size: var(--text-xl);
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }

        .view-all-btn {
          display: flex;
          align-items: center;
          gap: var(--space-1);
          background: none;
          border: none;
          color: var(--primary-600);
          font-size: var(--text-sm);
          font-weight: 500;
          cursor: pointer;
          transition: color var(--transition-fast);
        }

        .view-all-btn:hover {
          color: var(--primary-700);
        }

        /* Activities */
        .activities-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .activity-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-3);
          border-radius: var(--radius-lg);
          transition: background-color var(--transition-fast);
        }

        .activity-item:hover {
          background: var(--bg-hover);
        }

        .activity-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: var(--radius-lg);
          flex-shrink: 0;
        }

        .activity-icon.success {
          background: var(--success-100);
          color: var(--success-600);
        }

        .activity-icon.primary {
          background: var(--primary-100);
          color: var(--primary-600);
        }

        .activity-icon.warning {
          background: var(--warning-100);
          color: var(--warning-600);
        }

        .activity-icon.accent {
          background: var(--accent-100);
          color: var(--accent-600);
        }

        .activity-content {
          flex: 1;
        }

        .activity-main {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }

        .activity-subject {
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--text-primary);
        }

        .activity-action {
          font-size: var(--text-sm);
          color: var(--text-secondary);
        }

        .activity-time {
          font-size: var(--text-xs);
          color: var(--text-tertiary);
          margin-top: var(--space-1);
        }

        /* Tasks */
        .tasks-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .task-item {
          padding: var(--space-4);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg);
          transition: all var(--transition-fast);
        }

        .task-item:hover {
          border-color: var(--primary-200);
          box-shadow: var(--shadow-sm);
        }

        .task-content h4 {
          font-size: var(--text-base);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--space-2);
        }

        .task-meta {
          display: flex;
          gap: var(--space-3);
          margin-bottom: var(--space-3);
          flex-wrap: wrap;
        }

        .task-subject {
          font-size: var(--text-xs);
          font-weight: 600;
          color: var(--primary-600);
          background: var(--primary-100);
          padding: var(--space-1) var(--space-2);
          border-radius: var(--radius-md);
        }

        .task-due {
          font-size: var(--text-xs);
          color: var(--text-secondary);
        }

        .task-priority {
          font-size: var(--text-xs);
          font-weight: 500;
          padding: var(--space-1) var(--space-2);
          border-radius: var(--radius-md);
          text-transform: uppercase;
        }

        .task-priority.high {
          background: var(--error-100);
          color: var(--error-700);
        }

        .task-priority.medium {
          background: var(--warning-100);
          color: var(--warning-700);
        }

        .task-priority.low {
          background: var(--success-100);
          color: var(--success-700);
        }

        .task-progress {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .progress-bar {
          flex: 1;
          height: 6px;
          background: var(--border-primary);
          border-radius: var(--radius-full);
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--primary-600);
          border-radius: var(--radius-full);
          transition: width var(--transition-normal);
        }

        .progress-text {
          font-size: var(--text-xs);
          font-weight: 600;
          color: var(--text-secondary);
          min-width: 35px;
        }

        /* Learning Insights */
        .insights-section {
          margin-top: var(--space-4);
        }

        .insights-section h2 {
          font-size: var(--text-2xl);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: var(--space-6);
          text-align: center;
        }

        .insights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--space-6);
        }

        .insight-card {
          background: var(--bg-card);
          border-radius: var(--radius-xl);
          padding: var(--space-6);
          box-shadow: var(--shadow-color);
          border: 1px solid var(--border-primary);
          text-align: center;
          transition: all var(--transition-normal);
        }

        .insight-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-hover);
        }

        .insight-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: var(--radius-xl);
          margin-bottom: var(--space-4);
        }

        .insight-card.success .insight-icon {
          background: var(--success-100);
          color: var(--success-600);
        }

        .insight-card.primary .insight-icon {
          background: var(--primary-100);
          color: var(--primary-600);
        }

        .insight-card.warning .insight-icon {
          background: var(--warning-100);
          color: var(--warning-600);
        }

        .insight-content h3 {
          font-size: var(--text-base);
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--space-2);
        }

        .insight-value {
          font-size: var(--text-2xl);
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: var(--space-2);
        }

        .insight-content p {
          font-size: var(--text-sm);
          color: var(--text-secondary);
          margin: 0;
        }

        /* Coming Soon */
        .coming-soon {
          text-align: center;
          padding: var(--space-20) var(--space-8);
          background: var(--bg-card);
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-color);
          border: 1px solid var(--border-primary);
        }

        .coming-soon h3 {
          font-size: var(--text-xl);
          color: var(--text-primary);
          margin-bottom: var(--space-3);
        }

        .coming-soon p {
          color: var(--text-secondary);
          margin: 0;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column;
            text-align: center;
            gap: var(--space-4);
          }

          .welcome-section h1 {
            font-size: var(--text-3xl);
          }

          .quick-stats {
            justify-content: center;
          }

          .tab-navigation {
            justify-content: flex-start;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .content-grid {
            grid-template-columns: 1fr;
          }

          .insights-grid {
            grid-template-columns: 1fr;
          }

          .task-meta {
            flex-direction: column;
            gap: var(--space-2);
          }
        }

        @media (max-width: 480px) {
          .welcome-section h1 {
            font-size: var(--text-2xl);
          }

          .dashboard-section {
            padding: var(--space-4);
          }

          .stat-card {
            padding: var(--space-4);
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;