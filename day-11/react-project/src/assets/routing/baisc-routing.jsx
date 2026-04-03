import { useState } from 'react';

// 1. Protected Route Logic
// This component acts as a gatekeeper.
const ProtectedRoute = ({ isAuth, children }) => {
  if (!isAuth) {
    return (
      <div>
        <h4>Access Denied</h4>
        <p>You must be logged in.</p>
      </div>
    );
  }
  return children;
};

// 2. Blog Component (Simulation of Params)
function BlogBasics() {
  const [activePost, setActivePost] = useState(null);

  return (
    <div>
      <h3>Blog Basics</h3>
      <nav>
        <button onClick={() => setActivePost(null)}>Home</button>
        <button onClick={() => setActivePost(1)}>Post #1</button>
        <button onClick={() => setActivePost(2)}>Post #2</button>
      </nav>

      <div>
        {activePost ? (
          <h4>Viewing Blog ID: {activePost}</h4>
        ) : (
          <p>Welcome to the Blog!</p>
        )}
      </div>
    </div>
  );
}

// 3. Filter Component (Simulation of URL Search Params)
function FilterableCatalog() {
  const [currentFilter, setCurrentFilter] = useState('All');
  
  const products = [
    { name: 'iPhone 15', cat: 'Electronics' },
    { name: 'Coffee Mug', cat: 'Home' },
    { name: 'MacBook Pro', cat: 'Electronics' },
  ];

  const filteredProducts = currentFilter === 'All' 
    ? products 
    : products.filter(p => p.cat === currentFilter);

  return (
    <div>
      <h3>URL State Management</h3>
      <div>
        {['All', 'Electronics', 'Home'].map(cat => (
          <button key={cat} onClick={() => setCurrentFilter(cat)}>
            {cat}
          </button>
        ))}
      </div>

      <div>
        {filteredProducts.map(p => (
          <div key={p.name}>📦 {p.name} ({p.cat})</div>
        ))}
      </div>
    </div>
  );
}

// MAIN APP COMPONENT
export default function RoutingTutorial() {
  const [activeSection, setActiveSection] = useState('intro');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>React Routing Mastery</h1>
      
      <nav>
        <button onClick={() => setActiveSection('intro')}>Basics</button>
        <button onClick={() => setActiveSection('blog')}>Blog</button>
        <button onClick={() => setActiveSection('admin')}>Admin (Protected)</button>
        <button onClick={() => setActiveSection('filters')}>Filters</button>
      </nav>

      <main>
        {activeSection === 'intro' && <p>Select a section to learn more.</p>}
        
        {activeSection === 'blog' && <BlogBasics />}

        {activeSection === 'admin' && (
          <div>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
              {isLoggedIn ? 'Logout' : 'Login as Admin'}
            </button>
            <ProtectedRoute isAuth={isLoggedIn}>
              <h4>Welcome to the Admin Dashboard</h4>
            </ProtectedRoute>
          </div>
        )}

        {activeSection === 'filters' && <FilterableCatalog />}
      </main>
    </div>
  );
}