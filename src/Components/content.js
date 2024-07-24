import React from 'react';
import PDFViewer from './components/PDFViewer';  // Adjust the path according to your project structure

function content() {
  return (
    <div className="content">
      <header className="content-header">
        <h1>View PDF</h1>
      </header>
      <PDFViewer file="d:\CSE (1).pdf" />
    </div>
  );
}

export default content;
