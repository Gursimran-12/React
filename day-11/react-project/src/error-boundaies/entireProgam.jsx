// Advanced React Patterns: Stability & DOM Management
// Topics: Error Boundaries, React Portals, Fragments, and StrictMode

import React, { useState, Component } from 'react';
import { createPortal } from 'react-dom';



// ============================================
// APP STABILITY
// ============================================

/* THE PROBLEM:
- In React, if a JavaScript error occurs inside the render method of a 
  single component, the entire application unmounts (white screen).
- This is a terrible user experience for clients at Vidya Corporation.

THE SOLUTION:
- Error Boundaries: Catch errors in the "tree" below them and show a fallback UI.
- Portals: Render UI elements outside the standard parent-child DOM structure 
  to avoid z-index and overflow clipping issues.
*/


// ============================================
// ERROR BOUNDARIES
// ============================================

/* CRITICAL NOTE: 
As of 2026, Error Boundaries MUST be Class Components. 
There is currently no Hook equivalent for 'componentDidCatch'.
*/

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You would typically log this to an error reporting service like Sentry
    console.error("%c[Error Logged]", "color: white; background: red; padding: 5px;", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={styles.errorBox}>
          <h4>⚠️ Something went wrong.</h4>
          <p>The component failed to load, but the rest of the app is safe!</p>
          <button onClick={() => window.location.reload()} style={styles.button}>Retry</button>
        </div>
      );
    }

    return this.props.children; 
  }
}

// A "Buggy" component to test the boundary
function BuggyComponent() {
  const [crash, setCrash] = useState(false);

  if (crash) {
    throw new Error("I crashed!");
  }

  return (
    <div style={styles.card}>
      <p>This component is unstable. Click carefully!</p>
      <button onClick={() => setCrash(true)} style={styles.buttonSecondary}>Trigger Error</button>
    </div>
  );
}


// ============================================
// REACT PORTALS
// ============================================

/* WHY PORTALS?
- Modals should usually live at the very bottom of <body> to avoid 
  CSS `overflow: hidden` or `z-index` issues from parent containers.
- createPortal(child, domNode) "teleports" the child to that node.
*/

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <button onClick={onClose} style={styles.closeBtn}>×</button>
        {children}
      </div>
    </div>,
    document.body // Teleporting to the body tag
  );
}


// ============================================
// FRAGMENTS & STRICTMODE
// ============================================

/* FRAGMENTS (<> ... </>):
- Avoid adding unnecessary <div> wrappers to the DOM.
- Keeps the HTML light and the CSS selectors predictable.

STRICTMODE:
- A development-only tool.
- Intentional Double Rendering: Helps find side effects in the render phase.
- Warning System: Highlights deprecated APIs.
*/

function BestPracticesDemo() {
  return (
    <React.Fragment>
      <div style={styles.infoBox}>
        <strong>StrictMode Info:</strong> In development, you might see 
        <code>console.log</code> fire twice. This is intentional! It helps 
        us ensure our components are "Pure" and have no side effects.
      </div>
      <p>Check the DOM Inspector: No extra div wrapping these elements!</p>
    </React.Fragment>
  );
}


// ============================================
//  WRAPPER
// ============================================

export default function AdvancedPatternsTutorial() {
  const [tab, setTab] = useState('errors');
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1 style={styles.mainTitle}>Advanced React Patterns (Days 51–55)</h1>
        <p style={styles.subtitle}>Stability, Portals, and StrictMode at Vidya Corporation</p>
      </header>
      
      <div style={styles.navigation}>
        <button onClick={() => setTab('errors')} style={styles.tab(tab === 'errors')}>Error Boundaries</button>
        <button onClick={() => setTab('portals')} style={styles.tab(tab === 'portals')}>React Portals</button>
        <button onClick={() => setTab('strict')} style={styles.tab(tab === 'strict')}>Strict & Fragments</button>
      </div>

      <div style={styles.content}>
        {tab === 'errors' && (
          <ErrorBoundary>
            <h3>Global Error Handling</h3>
            <p>The component below is wrapped in an Error Boundary.</p>
            <BuggyComponent />
          </ErrorBoundary>
        )}

        {tab === 'portals' && (
          <div style={styles.example}>
            <h3>Teleporting UI Components</h3>
            <button onClick={() => setModalOpen(true)} style={styles.buttonSuccess}>Open Portal Modal</button>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
              <h2>I am a Portal!</h2>
              <p>Even though I'm written inside the component tree, I physically live at the bottom of the HTML body.</p>
            </Modal>
          </div>
        )}

        {tab === 'strict' && <BestPracticesDemo />}
      </div>

      <footer style={styles.recommendationBox}>
        💡 <strong>Intern Task:</strong> Create an Error Boundary that logs 
        errors to <code>localStorage</code> so they persist after a refresh 
        for debugging.
      </footer>
    </div>
  );
}

// ============================================
// STYLES OBJECT
// ============================================

const styles = {
  app: { maxWidth: '900px', margin: '0 auto', padding: '20px', fontFamily: 'Inter, sans-serif', color: '#1e293b' },
  header: { textAlign: 'center', marginBottom: '40px' },
  mainTitle: { fontSize: '2.2rem', fontWeight: '800', color: '#0f172a' },
  subtitle: { color: '#64748b', fontSize: '1rem' },
  navigation: { display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '30px' },
  tab: (active) => ({
    padding: '12px 24px',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    fontWeight: '700',
    backgroundColor: active ? '#6366f1' : '#f1f5f9',
    color: active ? '#ffffff' : '#475569',
    transition: '0.2s'
  }),
  content: { backgroundColor: '#ffffff', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' },
  errorBox: { padding: '20px', backgroundColor: '#fef2f2', border: '2px solid #ef4444', borderRadius: '12px', textAlign: 'center' },
  infoBox: { backgroundColor: '#f0f9ff', padding: '15px', borderRadius: '12px', borderLeft: '6px solid #0ea5e9', marginBottom: '20px' },
  card: { padding: '20px', border: '1px solid #e2e8f0', borderRadius: '12px', marginTop: '15px' },
  button: { padding: '10px 20px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' },
  buttonSuccess: { padding: '10px 20px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' },
  buttonSecondary: { padding: '8px 16px', backgroundColor: '#64748b', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' },
  modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 },
  modalContent: { backgroundColor: 'white', padding: '30px', borderRadius: '16px', maxWidth: '400px', width: '100%', position: 'relative' },
  closeBtn: { position: 'absolute', top: '10px', right: '10px', border: 'none', background: 'none', fontSize: '1.5rem', cursor: 'pointer' },
  recommendationBox: { marginTop: '40px', padding: '20px', backgroundColor: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '16px', color: '#9a3412', textAlign: 'center' }
};