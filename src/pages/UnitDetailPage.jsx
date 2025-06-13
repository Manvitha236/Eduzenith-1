import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, FileText, ExternalLink, BookOpen, Clock, Target } from 'lucide-react';
import { UNIT_PDFS } from '../constants/subjects';

const UnitDetailPage = () => {
  const { courseId, subjectName, unitName } = useParams();
  const pdfs = UNIT_PDFS[unitName] || [];

  const getUnitNumber = (unit) => {
    const match = unit.match(/Unit (\d+):/);
    return match ? match[1] : '1';
  };

  const getUnitTitle = (unit) => {
    return unit.replace(/Unit \d+:\s*/, '');
  };

  const getFileName = (url) => {
    if (url.includes('storage.googleapis.com')) {
      const parts = url.split('/');
      const fileName = parts[parts.length - 1];
      return decodeURIComponent(fileName);
    }
    return url;
  };

  const isValidPdf = (pdf) => {
    return pdf && !pdf.includes('pdf1.pdf') && !pdf.includes('pdf2.pdf') && 
           !pdf.includes('pdf3.pdf') && !pdf.includes('pdf4.pdf');
  };

  const validPdfs = pdfs.filter(isValidPdf);

  return (
    <div className="unit-detail-page">
      {/* Modern Header */}
      <header className="unit-header">
        <div className="header-background">
          <div className="header-overlay"></div>
        </div>
        <div className="container">
          <div className="header-content">
            <Link to={`/course/${courseId}/subject/${subjectName}`} className="back-button">
              <ArrowLeft size={20} />
              <span>Back to Units</span>
            </Link>
            
            <div className="unit-info">
              <div className="unit-icon-large">
                📄
              </div>
              <div className="unit-details">
                <div className="unit-number-badge">
                  Unit {getUnitNumber(unitName)}
                </div>
                <h1>{getUnitTitle(unitName)}</h1>
                <div className="unit-meta">
                  <div className="meta-item">
                    <BookOpen size={16} />
                    <span>Subject: {subjectName}</span>
                  </div>
                  <div className="meta-item">
                    <Target size={16} />
                    <span>Course: {courseId}</span>
                  </div>
                  <div className="meta-item">
                    <Clock size={16} />
                    <span>{validPdfs.length} Resources</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Breadcrumb */}
      <nav className="breadcrumb-nav">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to={`/course/${courseId}`}>{courseId}</Link>
            <span>/</span>
            <Link to={`/course/${courseId}/subject/${subjectName}`}>Units</Link>
            <span>/</span>
            <span className="current">Resources</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          <div className="content-header">
            <div className="content-info">
              <h2>Study Materials</h2>
              <p>Download and access comprehensive study materials for this unit</p>
            </div>
            {validPdfs.length > 0 && (
              <div className="resources-count">
                {validPdfs.length} Resource{validPdfs.length !== 1 ? 's' : ''} Available
              </div>
            )}
          </div>

          {validPdfs.length > 0 ? (
            <div className="resources-grid">
              {validPdfs.map((pdf, index) => (
                <div key={index} className="resource-card">
                  <div className="resource-header">
                    <div className="resource-icon">
                      <FileText size={24} />
                    </div>
                    <div className="resource-type">PDF Document</div>
                  </div>
                  
                  <div className="resource-content">
                    <h3>{getFileName(pdf)}</h3>
                    <div className="resource-meta">
                      <span className="resource-format">PDF Format</span>
                      <span className="resource-size">Study Material</span>
                    </div>
                  </div>
                  
                  <div className="resource-actions">
                    <a 
                      href={pdf} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <ExternalLink size={16} />
                      View Online
                    </a>
                    <a 
                      href={pdf} 
                      download
                      className="btn btn-secondary"
                    >
                      <Download size={16} />
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">📚</div>
              <h3>No Resources Available</h3>
              <p>Study materials for this unit will be available soon. Please check back later or contact your instructor for more information.</p>
              <div className="empty-actions">
                <Link 
                  to={`/course/${courseId}/subject/${subjectName}`}
                  className="btn btn-primary"
                >
                  <ArrowLeft size={16} />
                  Back to Units
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="modern-footer">
        <div className="container">
          <p>&copy; 2024 EduZenith. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default UnitDetailPage;