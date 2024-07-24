import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';

const unitPdfs = {
  'Basics of Calculus': ['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf'],
  'Linear Algebra': ['pdf1.pdf', 'pdf2.pdf'],
  'Differential Equations': ['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'],
  // Add other units similarly...
};

const UnitDetail = () => {
  const { subjectName, unitName } = useParams();
  const pdfs = unitPdfs[unitName] || [];

  return (
    <div>
      <header>
        <div className="header-content">
          <h1>{unitName}</h1>
        </div>
      </header>
      <main>
        <div className="introduction">
          <h2>{subjectName} - PDFs</h2>
        </div>
        <h3>PDFs</h3>
        <div className="pdf-list">
          {pdfs.map((pdf, index) => (
            <div key={index} className="pdf-item">
              <a href={`/path/to/pdfs/${pdf}`} target="_blank" rel="noopener noreferrer">{pdf}</a>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p className="fc">&copy; 2024 EduZenith. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default UnitDetail;
