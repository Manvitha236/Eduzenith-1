import React, { useRef, useEffect } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/legacy/build/pdf';

GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${getDocument.version}/pdf.worker.js`;

const PDFViewer = ({ file }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const fetchPDF = async () => {
      const loadingTask = getDocument(file);
      const pdf = await loadingTask.promise;

      const pageNumber = 1;
      const page = await pdf.getPage(pageNumber);

      const scale = 1.5;
      const viewport = page.getViewport({ scale });
      const canvas = canvasRef.current;
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: canvas.getContext('2d'),
        viewport: viewport
      };
      await page.render(renderContext);
    };

    fetchPDF();
  }, [file]);

  return <canvas ref={canvasRef}></canvas>;
};

export default PDFViewer;
