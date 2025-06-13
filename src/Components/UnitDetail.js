```diff
@@ -158,5 +158,6 @@
         .unit-detail-page {
           min-height: 100vh;
-          background: var(--neutral-50);
+          background: var(--bg-primary);
+          color: var(--text-primary);
         }
 
@@ -164,5 +165,5 @@
         .unit-header {
           position: relative;
-          background: linear-gradient(135deg, var(--primary-600) 0%, var(--primary-800) 100%);
+          background: var(--gradient-hero);
           color: white;
           padding: var(--space-12) 0 var(--space-8);
@@ -227,4 +228,5 @@
           margin-bottom: var(--space-4);
           color: white;
+          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
           line-height: var(--leading-tight);
         }
@@ -250,6 +252,6 @@
         /* Breadcrumb Navigation */
         .breadcrumb-nav {
-          background: white;
-          border-bottom: 1px solid var(--secondary-200);
+          background: var(--bg-secondary);
+          border-bottom: 1px solid var(--border-primary);
           padding: var(--space-4) 0;
         }
@@ -262,5 +264,5 @@
 
         .breadcrumb a {
-          color: var(--secondary-600);
+          color: var(--text-secondary);
           text-decoration: none;
           transition: color var(--transition-fast);
@@ -273,5 +275,5 @@
 
         .breadcrumb span {
-          color: var(--secondary-400);
+          color: var(--text-tertiary);
         }
 
@@ -291,8 +293,8 @@
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
 
@@ -300,10 +302,10 @@
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
@@ -321,8 +323,8 @@
 
         .resource-card {
-          background: white;
+          background: var(--bg-card);
           border-radius: var(--radius-2xl);
-          box-shadow: var(--shadow-sm);
-          border: 1px solid var(--secondary-200);
+          box-shadow: var(--shadow-color);
+          border: 1px solid var(--border-primary);
           transition: all var(--transition-normal);
           overflow: hidden;
@@ -348,5 +350,5 @@
         .resource-card:hover {
           transform: translateY(-4px);
-          box-shadow: var(--shadow-xl);
+          box-shadow: var(--shadow-hover);
         }
 
@@ -360,6 +362,6 @@
           justify-content: space-between;
           padding: var(--space-6);
-          background: var(--neutral-50);
-          border-bottom: 1px solid var(--secondary-200);
+          background: var(--bg-tertiary);
+          border-bottom: 1px solid var(--border-primary);
         }
 
@@ -378,5 +380,5 @@
           font-size: var(--text-xs);
           font-weight: 600;
-          color: var(--secondary-500);
+          color: var(--text-tertiary);
           text-transform: uppercase;
           letter-spacing: 0.5px;
@@ -391,5 +393,5 @@
           font-size: var(--text-lg);
           font-weight: 600;
-          color: var(--secondary-900);
+          color: var(--text-primary);
           line-height: var(--leading-tight);
           margin-bottom: var(--space-3);
@@ -407,6 +409,6 @@
           font-size: var(--text-xs);
           padding: var(--space-1) var(--space-2);
-          background: var(--secondary-100);
-          color: var(--secondary-600);
+          background: var(--bg-tertiary);
+          color: var(--text-secondary);
           border-radius: var(--radius-md);
           font-weight: 500;
@@ -418,6 +420,6 @@
           gap: var(--space-3);
           padding: var(--space-6);
-          border-top: 1px solid var(--secondary-200);
-          background: var(--neutral-50);
+          border-top: 1px solid var(--border-primary);
+          background: var(--bg-tertiary);
         }
 
@@ -449,6 +451,6 @@
 
         .btn-secondary {
-          background: var(--secondary-100);
-          color: var(--secondary-700);
-          border: 1px solid var(--secondary-200);
+          background: var(--bg-hover);
+          color: var(--text-primary);
+          border: 1px solid var(--border-primary);
         }
@@ -456,6 +458,6 @@
         .btn-secondary:hover {
-          background: var(--secondary-200);
-          border-color: var(--secondary-300);
+          background: var(--bg-card);
+          border-color: var(--border-secondary);
         }
 
@@ -464,18 +466,18 @@
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
@@ -483,5 +485,5 @@
 
         .empty-state p {
-          color: var(--secondary-600);
+          color: var(--text-secondary);
           margin-bottom: var(--space-8);
           max-width: 500px;
@@ -497,9 +499,10 @@
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