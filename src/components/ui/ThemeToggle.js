import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="toggle-icon">
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </div>
      <span className="toggle-text">
        {isDark ? 'Light' : 'Dark'}
      </span>

      <style jsx>{`
        .theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-4);
          background: var(--bg-card);
          border: 2px solid var(--border-primary);
          border-radius: var(--radius-xl);
          cursor: pointer;
          transition: all var(--transition-normal);
          position: relative;
          overflow: hidden;
          font-size: var(--text-sm);
          font-weight: 500;
          min-width: 80px;
          color: var(--text-primary);
        }

        .theme-toggle::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--primary-100), var(--accent-100));
          opacity: 0;
          transition: opacity var(--transition-normal);
          border-radius: var(--radius-lg);
        }

        .theme-toggle:hover::before {
          opacity: 1;
        }

        .theme-toggle:hover {
          border-color: var(--primary-500);
          transform: scale(1.05);
          box-shadow: var(--shadow-hover);
        }

        .theme-toggle:active {
          transform: scale(0.95);
        }

        .toggle-icon {
          color: var(--text-primary);
          transition: all var(--transition-normal);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
        }

        .toggle-text {
          color: var(--text-primary);
          transition: all var(--transition-normal);
          position: relative;
          z-index: 1;
        }

        .theme-toggle:hover .toggle-icon {
          color: var(--primary-600);
          transform: rotate(15deg) scale(1.1);
        }

        .theme-toggle:hover .toggle-text {
          color: var(--primary-600);
        }

        /* Dark mode specific overrides for perfect visibility */
        [data-theme="dark"] .theme-toggle {
          background: #1a1a26;
          border-color: #3a3a4a;
          color: #ffffff;
        }

        [data-theme="dark"] .toggle-icon {
          color: #ffffff !important;
        }

        [data-theme="dark"] .toggle-text {
          color: #ffffff !important;
        }

        [data-theme="dark"] .theme-toggle:hover {
          border-color: #fbbf24;
          box-shadow: 0 4px 20px rgba(251, 191, 36, 0.5);
        }

        [data-theme="dark"] .theme-toggle:hover .toggle-icon {
          color: #fbbf24 !important;
        }

        [data-theme="dark"] .theme-toggle:hover .toggle-text {
          color: #fbbf24 !important;
        }

        [data-theme="dark"] .theme-toggle::before {
          background: linear-gradient(135deg, rgba(251, 191, 36, 0.3), rgba(245, 158, 11, 0.4));
        }

        @media (max-width: 768px) {
          .theme-toggle {
            min-width: 90px;
            padding: var(--space-3) var(--space-4);
          }
        }
      `}</style>
    </button>
  );
};

export default ThemeToggle;