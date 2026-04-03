// React Router & URL State Management Masterclass
// Topics: Routing Basics, Nested Routes, Protected Routes, and URL Search Params

import { useState, createContext, useContext } from 'react';

/* ============================================
   ============================================ */

// ============================================
// 1️⃣ THE CORE CONCEPT: SPA VS MPA
// ============================================

/* MULTI-PAGE APPLICATION (MPA):
- Every link click requests a new HTML file from the server.
- The whole browser reloads.

SINGLE PAGE APPLICATION (SPA):
- Only one HTML file (index.html).
- React Router "swaps" components in and out based on the URL.
- No browser reload → Faster, smoother experience.



CORE COMPONENTS:
- BrowserRouter: The parent that enables routing.
- Routes: The "Switchboard" that looks at the URL.
- Route: The mapping (e.g., /about -> <About />).
- Link: The "Anchor" replacement (stops page reloads).
*/


// ============================================
// ============================================

/* KEY HOOKS:
- useNavigate(): Change the URL via code (e.g., after login).
- useParams(): Grab variables from the URL (e.g., /blog/:id).
- NavLink: Like Link, but knows if it is "active" (great for nav bars).
*/

function BlogBasics() {
  const [activePost, setActivePost] = useState(null);

  // Mocking nested route behavior in one file
  return (
    <div style={styles.example}>
      <h3>✅ Day 26-27: Router Basics</h3>
      <nav style={styles.nav}>
        {/* NavLink adds an 'active' style automatically in real apps */}
        <button onClick={() => setActivePost(null)} style={styles.navButton}>Home</button>
        <button onClick={() => setActivePost(1)} style={styles.navButton}>Post #1</button>
        <button onClick={() => setActivePost(2)} style={styles.navButton}>Post #2</button>
      </nav>

      <div style={styles.infoBox}>
        {activePost ? (
          <div>
            <h4>Viewing Blog ID: {activePost}</h4>
            <p>Hook used: <code>useParams()</code></p>
          </div>
        ) : (
          <p>Welcome to the Multi-page Blog Project!</p>
        )}
      </div>
    </div>
  );
}


// ============================================
// ============================================

/* ADVANCED PATTERNS:
1. Protected Routes: Checking if a user is logged in before showing a page.
2. Route Guards: Wrapping routes in a conditional component.
3. 404 Pages: Using path="*" to catch invalid URLs.
*/

const ProtectedRoute = ({ isAuth, children }) => {
  if (!isAuth) {
    return (
      <div style={styles.errorBox}>
        <h4>🚫 Access Denied</h4>
        <p>You must be logged in to see the E-commerce admin panel.</p>
      </div>
    );
  }
  return children;
};

function AdvancedRoutingDemo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={styles.example}>
      <h3>✅ Day 28-29: Advanced Routing</h3>
      <button 
        onClick={() => setIsLoggedIn(!isLoggedIn)} 
        style={isLoggedIn ? styles.buttonSecondary : styles.buttonSuccess}
      >
        {isLoggedIn ? 'Logout' : 'Login as Admin'}
      </button>

      <div style={{ marginTop: '20px' }}>
        <ProtectedRoute isAuth={isLoggedIn}>
          <div style={styles.successBox}>
            <h4>🛍️ Admin Dashboard</h4>
            <p>This is a Protected Route. You can only see this when <code>isLoggedIn</code> is true.</p>
          </div>
        </ProtectedRoute>
      </div>
    </div>
  );
}


// ============================================
// ============================================

/* THE URL AS A SINGLE SOURCE OF TRUTH:
Why store filters in the URL instead of useState?
1. Shareable: Send a link to a friend with filters applied.
2. Bookmarkable: Save a specific search result.
3. Refresh-proof: State isn't lost when the page reloads.

HOOK: useSearchParams()
*/

function FilterableCatalog() {
  // Mocking useSearchParams logic
  const [currentFilter, setCurrentFilter] = useState('All');
  
  const products = [
    { name: 'iPhone 15', cat: 'Electronics' },
    { name: 'Coffee Mug', cat: 'Home' },
    { name: 'MacBook Pro', cat: 'Electronics' },
    { name: 'Desk Lamp', cat: 'Home' },
  ];

  const filteredProducts = currentFilter === 'All' 
    ? products 
    : products.filter(p => p.cat === currentFilter);

  return (
    <div style={styles.example}>
      <h3>✅ Day 30: URL State Management</h3>
      <div style={styles.infoBox}>
        <strong>Current URL Logic:</strong> <code>?category={currentFilter.toLowerCase()}</code>
      </div>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        {['All', 'Electronics', 'Home'].map(cat => (
          <button 
            key={cat}
            onClick={() => setCurrentFilter(cat)}
            style={{
              ...styles.navButton,
              backgroundColor: currentFilter === cat ? '#3b82f6' : '#e5e7eb',
              color: currentFilter === cat ? 'white' : 'black'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={styles.codeBox}>
        {filteredProducts.map(p => (
          <div key={p.name} style={{ padding: '5px 0' }}>📦 {p.name} ({p.cat})</div>
        ))}
      </div>
    </div>
  );
}


// ============================================
// MAIN TUTORIAL COMPONENT
// ============================================

export default function RoutingTutorial() {
  const [activeSection, setActiveSection] = useState('intro');

  return (
    <div style={styles.app}>
      <h1 style={styles.mainTitle}>React Routing Mastery (Days 26–30)</h1>
      
      <div style={styles.navigation}>
        <button onClick={() => setActiveSection('intro')} style={styles.tab(activeSection === 'intro')}>Basics</button>
        <button onClick={() => setActiveSection('basics')} style={styles.tab(activeSection === 'basics')}>Blog Project</button>
        <button onClick={() => setActiveSection('advanced')} style={styles.tab(activeSection === 'advanced')}>Auth/Guards</button>
        <button onClick={() => setActiveSection('urlstate')} style={styles.tab(activeSection === 'urlstate')}>URL State</button>
      </div>

      <div style={styles.content}>
        {activeSection === 'intro' && (
          <div style={styles.explanation}>
            <h2>Why Routing Matters</h2>
            <p>At <strong>Vidya Corporation</strong>, we build complex apps. Without routing, your <code>App.js</code> would have thousands of lines of conditional rendering (if/else). Routing keeps it clean.</p>
            
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Concept</th>
                  <th style={styles.th}>Analogy</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={styles.td}>URL</td><td style={styles.td}>The GPS Coordinates</td></tr>
                <tr><td style={styles.td}>Link</td><td style={styles.td}>The Road</td></tr>
                <tr><td style={styles.td}>Route</td><td style={styles.td}>The Destination Building</td></tr>
                <tr><td style={styles.td}>Outlet</td><td style={styles.td}>A specific room inside the building</td></tr>
              </tbody>
            </table>
          </div>
        )}

        {activeSection === 'basics' && <BlogBasics />}
        {activeSection === 'advanced' && <AdvancedRoutingDemo />}
        {activeSection === 'urlstate' && <FilterableCatalog />}
      </div>
      
      <footer style={styles.recommendationBox}>
        💡 <strong>Intern Task:</strong> Try to implement a "Back" button using <code>useNavigate(-1)</code> in the Blog section.
      </footer>
    </div>
  );
}

// ============================================
// STYLES OBJECT
// ============================================

const styles = {
  app: { maxWidth: '1000px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' },
  mainTitle: { textAlign: 'center', color: '#111827', marginBottom: '30px' },
  navigation: { display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '25px' },
  tab: (active) => ({
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    backgroundColor: active ? '#3b82f6' : '#000000',
    color: active ? 'white' : '#374151'
  }),
  content: { backgroundColor: 'black', padding: '30px', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' },
  example: { padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px' },
  nav: { display: 'flex', gap: '10px', marginBottom: '20px' },
  navButton: { padding: '6px 12px', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer' },
  infoBox: { backgroundColor: '#f0f9ff', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #3b82f6' },
  errorBox: { backgroundColor: '#fef2f2', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #ef4444', color: '#991b1b' },
  successBox: { backgroundColor: '#0f0f0f', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #22c55e', color: '#166534' },
  buttonSuccess: { padding: '10px 20px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' },
  buttonSecondary: { padding: '10px 20px', backgroundColor: '#6b7280', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' },
  codeBox: { backgroundColor: '#1f2937', color: '#10b981', padding: '20px', borderRadius: '8px', fontFamily: 'monospace' },
  explanation: { lineHeight: '1.6' },
  recommendationBox: { marginTop: '30px', padding: '20px', backgroundColor: '#fffbeb', borderRadius: '8px', border: '1px solid #fde68a' },
  table: { width: '100%', marginTop: '15px', borderCollapse: 'collapse' },
  th: { textAlign: 'left', padding: '10px', borderBottom: '2px solid #eee' },
  td: { padding: '10px', borderBottom: '1px solid #eee' }
};