```diff
@@ -226,5 +226,6 @@
         .subject-detail-page {
           min-height: 100vh;
-          background: var(--neutral-50);
+          background: var(--bg-primary);
+          color: var(--text-primary);
         }
 
@@ -232,5 +233,5 @@
         .subject-header {
           position: relative;
-          background: linear-gradient(135deg, var(--primary-600) 0%, var(--primary-800) 100%);
+          background: var(--gradient-hero);
           color: white;
           padding: var(--space-12) 0 var(--space-8);
@@ -295,4 +296,5 @@
           margin-bottom: var(--space-4);
           color: white;
+          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
           line-height: var(--leading-tight);
         }
@@ -318,6 +320,6 @@
         /* Breadcrumb Navigation */
         .breadcrumb-nav {
-          background: white;
-          border-bottom: 1px solid var(--secondary-200);
+          background: var(--bg-secondary);
+          border-bottom: 1px solid var(--border-primary);
           padding: var(--space-4) 0;
         }
@@ -330,5 +332,5 @@
 
         .breadcrumb a {
-          color: var(--secondary-600);
+          color: var(--text-secondary);
           text-decoration: none;
           transition: color var(--transition-fast);
@@ -341,5 +343,5 @@
 
         .breadcrumb span {
-          color: var(--secondary-400);
+          color: var(--text-tertiary);
         }
 
@@ -359,8 +361,8 @@
           margin-bottom: var(--space-8);
           padding: var(--space-6);
-          background: white;
+          background: var(--bg-card);
           border-radius: var(--radius-2xl);
-          box-shadow: var(--shadow-sm);
-          border: 1px solid var(--secondary-200);
+          box-shadow: var(--shadow-color);
+          border: 1px solid var(--border-primary);
         }
 
@@ -368,10 +370,10 @@
           font-size: var(--text-2xl);
           font-weight: 700;
-          color: var(--secondary-900);
+          color: var(--text-primary);
           margin-bottom: var(--space-1);
         }
 
         .content-info p {
-          color: var(--secondary-600);
+          color: var(--text-secondary);
           margin: 0;
         }
@@ -389,8 +391,8 @@
 
         .unit-card {
-          background: white;
+          background: var(--bg-card);
           border-radius: var(--radius-2xl);
-          box-shadow: var(--shadow-sm);
-          border: 1px solid var(--secondary-200);
+          box-shadow: var(--shadow-color);
+          border: 1px solid var(--border-primary);
           transition: all var(--transition-normal);
           overflow: hidden;
@@ -416,5 +418,5 @@
         .unit-card:hover {
           transform: translateY(-4px);
-          box-shadow: var(--shadow-xl);
+          box-shadow: var(--shadow-hover);
         }
 
@@ -428,6 +430,6 @@
           justify-content: space-between;
           padding: var(--space-6);
-          background: var(--neutral-50);
-          border-bottom: 1px solid var(--secondary-200);
+          background: var(--bg-tertiary);
+          border-bottom: 1px solid var(--border-primary);
         }
 
@@ -446,5 +448,5 @@
           width: 40px;
           height: 40px;
-          background: var(--secondary-100);
-          color: var(--secondary-600);
+          background: var(--bg-hover);
+          color: var(--text-secondary);
           border-radius: var(--radius-lg);
@@ -458,5 +460,5 @@
           font-size: var(--text-lg);
           font-weight: 600;
-          color: var(--secondary-900);
+          color: var(--text-primary);
           line-height: var(--leading-tight);
           margin-bottom: var(--space-3);
@@ -471,5 +473,5 @@
           padding: var(--space-1) var(--space-3);
-          background: var(--secondary-100);
-          color: var(--secondary-600);
+          background: var(--bg-tertiary);
+          color: var(--text-secondary);
           border-radius: var(--radius-full);
           font-size: var(--text-xs);
@@ -482,6 +484,6 @@
         .unit-footer {
           padding: var(--space-6);
-          border-top: 1px solid var(--secondary-200);
-          background: var(--neutral-50);
+          border-top: 1px solid var(--border-primary);
+          background: var(--bg-tertiary);
         }
 
@@ -509,18 +511,18 @@
           text-align: center;
           padding: var(--space-20) var(--space-8);
-          background: white;
+          background: var(--bg-card);
           border-radius: var(--radius-2xl);
-          box-shadow: var(--shadow-sm);
-          border: 1px solid var(--secondary-200);
+          box-shadow: var(--shadow-color);
+          border: 1px solid var(--border-primary);
         }
 
         .empty-icon {
           font-size: 4rem;
           margin-bottom: var(--space-6);
-          opacity: 0.5;
+          opacity: 0.6;
         }
 
         .empty-state h3 {
           font-size: var(--text-xl);
-          color: var(--secondary-900);
+          color: var(--text-primary);
           margin-bottom: var(--space-3);
@@ -528,5 +530,5 @@
 
         .empty-state p {
-          color: var(--secondary-600);
+          color: var(--text-secondary);
           margin: 0;
         }
@@ -534,9 +536,10 @@
         /* Footer */
         .modern-footer {
-          background: var(--secondary-900);
-          color: white;
+          background: var(--bg-card);
+          color: var(--text-primary);
           padding: var(--space-8) 0;
           text-align: center;
           margin-top: var(--space-20);
+          border-top: 1px solid var(--border-primary);
         }
 
```