```diff
@@ -162,7 +162,7 @@
             <div className="cta-buttons">
-              <a href="#courses" className="btn btn-primary btn-lg">
+              <a href="#courses-section" className="btn btn-primary btn-lg">
                 Explore Courses
                 <ArrowRight size={20} />
               </a>
@@ -175,5 +175,5 @@
       {/* Courses Section */}
-      <section className="courses-section">
+      <section id="courses-section" className="courses-section">
         <div className="container">
           <div className="section-header">
```