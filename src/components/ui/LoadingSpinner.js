import React from 'react';

const LoadingSpinner = ({ size = 'md', color = 'primary' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'border-primary-600',
    secondary: 'border-secondary-600',
    white: 'border-white'
  };

  return (
    <div className="loading-spinner-container">
      <div className={`loading-spinner ${sizeClasses[size]} ${colorClasses[color]}`}>
        <div className="spinner-inner"></div>
      </div>

      <style jsx>{`
        .loading-spinner-container {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-4);
        }

        .loading-spinner {
          border: 2px solid var(--secondary-200);
          border-radius: 50%;
          position: relative;
          animation: spin 1s linear infinite;
        }

        .loading-spinner.border-primary-600 {
          border-top-color: var(--primary-600);
        }

        .loading-spinner.border-secondary-600 {
          border-top-color: var(--secondary-600);
        }

        .loading-spinner.border-white {
          border-color: rgba(255, 255, 255, 0.3);
          border-top-color: white;
        }

        .w-4 { width: 1rem; height: 1rem; }
        .w-8 { width: 2rem; height: 2rem; }
        .w-12 { width: 3rem; height: 3rem; }
        .w-16 { width: 4rem; height: 4rem; }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;