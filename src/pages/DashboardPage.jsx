import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
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

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

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
    </div>
  );
};

export default DashboardPage;