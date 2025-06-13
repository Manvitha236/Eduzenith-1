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
          background: var(--theme-toggle-bg);
          border: 2px solid var(--theme-toggle-border);
          border-radius: var(--radius-xl);
          cursor: pointer;
          transition: all var(--transition-normal);
          position: relative;
          overflow: hidden;
          font-size: var(--text-sm);
          font-weight: 500;
          min-width: 80px;
        }

        .theme-toggle::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--theme-toggle-gradient);
          opacity: 0;
          transition: opacity var(--transition-normal);
          border-radius: var(--radius-lg);
        }

        .theme-toggle:hover::before {
          opacity: 1;
        }

        .theme-toggle:hover {
          border-color: var(--theme-toggle-hover-border);
          transform: scale(1.05);
          box-shadow: var(--theme-toggle-shadow);
        }

        .theme-toggle:active {
          transform: scale(0.95);
        }

        .toggle-icon {
          color: var(--theme-toggle-icon);
          transition: all var(--transition-normal);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
        }

        .toggle-text {
          color: var(--theme-toggle-text);
          transition: all var(--transition-normal);
          position: relative;
          z-index: 1;
        }

        .theme-toggle:hover .toggle-icon {
          color: var(--theme-toggle-hover-icon);
          transform: rotate(15deg) scale(1.1);
        }

        .theme-toggle:hover .toggle-text {
          color: var(--theme-toggle-hover-text);
        }

        /* Light mode styles */
        :global([data-theme="light"]) .theme-toggle {
          --theme-toggle-bg: var(--secondary-100);
          --theme-toggle-border: var(--secondary-200);
          --theme-toggle-hover-border: var(--primary-300);
          --theme-toggle-icon: var(--secondary-600);
          --theme-toggle-text: var(--secondary-600);
          --theme-toggle-hover-icon: var(--primary-600);
          --theme-toggle-hover-text: var(--primary-600);
          --theme-toggle-gradient: linear-gradient(135deg, var(--primary-100), var(--accent-100));
          --theme-toggle-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }

        /* Dark mode styles - FIXED VISIBILITY */
        :global([data-theme="dark"]) .theme-toggle {
          --theme-toggle-bg: #1a1a26;
          --theme-toggle-border: #3a3a4a;
          --theme-toggle-hover-border: #fbbf24;
          --theme-toggle-icon: #ffffff;
          --theme-toggle-text: #ffffff;
          --theme-toggle-hover-icon: #fbbf24;
          --theme-toggle-hover-text: #fbbf24;
          --theme-toggle-gradient: linear-gradient(135deg, rgba(251, 191, 36, 0.3), rgba(245, 158, 11, 0.4));
          --theme-toggle-shadow: 0 4px 20px rgba(251, 191, 36, 0.5);
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