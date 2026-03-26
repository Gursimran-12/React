import { useState, useEffect } from "react";

// Custom hook for debouncing values
function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);
  
  return debouncedValue;
}

// Using the useDebounce hook
function Example4_UseDebounce() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);
  const [searchCount, setSearchCount] = useState(0);
  
  useEffect(() => {
    if (debouncedSearch) {
      setSearchCount(prev => prev + 1);
      console.log('Searching for:', debouncedSearch);
    }
  }, [debouncedSearch]);
  
  return (
    <div>
      <h3>Example 4: useDebounce Hook</h3>
      
      <div>
        <div>
          <label>Type to search (debounced 500ms):</label>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Start typing..."
          />
        </div>
        
        <div>
          <div>
            <div>Immediate Value:</div>
            <div>{searchTerm || '(empty)'}</div>
            <div>Updates instantly as you type</div>
          </div>
          
          <div>→</div>
          
          <div>
            <div>Debounced Value:</div>
            <div>{debouncedSearch || '(empty)'}</div>
            <div>Updates 500ms after you stop typing</div>
          </div>
        </div>
        
        <div>
          API calls made: <strong>{searchCount}</strong>
        </div>
      </div>
      
    </div>
  );
}