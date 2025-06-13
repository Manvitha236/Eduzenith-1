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
          width: 40px;
          height: 40px;
          background: var(--theme-toggle-bg);
          border: 2px solid var(--theme-toggle-border);
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all var(--transition-normal);
          position: relative;
          overflow: hidden;
        }

        .theme-toggle:hover {
          background: var(--theme-toggle-hover-bg);
          border-color: var(--theme-toggle-hover-border);
          transform: scale(1.05);
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
        }

        .theme-toggle:hover .toggle-icon {
          color: var(--theme-toggle-hover-icon);
          transform: rotate(15deg);
        }

        /* Light mode styles */
        :global([data-theme="light"]) .theme-toggle {
          --theme-toggle-bg: var(--secondary-100);
          --theme-toggle-border: var(--secondary-200);
          --theme-toggle-hover-bg: var(--warning-100);
          --theme-toggle-hover-border: var(--warning-300);
          --theme-toggle-icon: var(--secondary-600);
          --theme-toggle-hover-icon: var(--warning-600);
        }

        /* Dark mode styles */
        :global([data-theme="dark"]) .theme-toggle {
          --theme-toggle-bg: var(--dark-secondary-800);
          --theme-toggle-border: var(--dark-secondary-700);
          --theme-toggle-hover-bg: var(--dark-warning-900);
          --theme-toggle-hover-border: var(--dark-warning-700);
          --theme-toggle-icon: var(--dark-secondary-300);
          --theme-toggle-hover-icon: var(--dark-warning-400);
        }
      `}</style>
    </button>
  );
};

export default ThemeToggle;