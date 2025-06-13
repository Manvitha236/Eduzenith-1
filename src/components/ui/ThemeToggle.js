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
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </div>

      <style jsx>{`
        .theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: var(--theme-toggle-bg);
          border: 2px solid var(--theme-toggle-border);
          border-radius: var(--radius-xl);
          cursor: pointer;
          transition: all var(--transition-normal);
          position: relative;
          overflow: hidden;
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

        .theme-toggle:hover .toggle-icon {
          color: var(--theme-toggle-hover-icon);
          transform: rotate(15deg) scale(1.1);
        }

        /* Light mode styles */
        :global([data-theme="light"]) .theme-toggle {
          --theme-toggle-bg: var(--secondary-100);
          --theme-toggle-border: var(--secondary-200);
          --theme-toggle-hover-border: var(--primary-300);
          --theme-toggle-icon: var(--secondary-600);
          --theme-toggle-hover-icon: var(--primary-600);
          --theme-toggle-gradient: linear-gradient(135deg, var(--primary-100), var(--accent-100));
          --theme-toggle-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }

        /* Dark mode styles */
        :global([data-theme="dark"]) .theme-toggle {
          --theme-toggle-bg: var(--dark-bg-tertiary);
          --theme-toggle-border: var(--dark-border-secondary);
          --theme-toggle-hover-border: var(--dark-warning-500);
          --theme-toggle-icon: var(--dark-text-secondary);
          --theme-toggle-hover-icon: var(--dark-warning-400);
          --theme-toggle-gradient: linear-gradient(135deg, var(--dark-warning-900), var(--dark-warning-800));
          --theme-toggle-shadow: 0 4px 12px rgba(251, 191, 36, 0.4);
        }

        @media (max-width: 768px) {
          .theme-toggle {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
    </button>
  );
};

export default ThemeToggle;