import { useState, useEffect } from "react";
// DataFetcher component using render props
function DataFetcher({ url, render }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return render({ data, loading, error });
}

// MouseTracker component using render props
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <div onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
}

// Toggle component using render props
function Toggle({ render }) {
  const [on, setOn] = useState(false);

  const toggle = () => setOn(!on);
  const setTrue = () => setOn(true);
  const setFalse = () => setOn(false);

  return render({ on, toggle, setTrue, setFalse });
}

function Example3_RenderProps() {
  return (
    <div>
      <h3>Pattern 3: Render Props</h3>

      <div>
        <h4>Mouse Tracker Example</h4>
        <MouseTracker
          render={({ x, y }) => (
            <div>
              <p>Move your mouse in this area!</p>
              <div>
                <div>X: <strong>{x}</strong></div>
                <div>Y: <strong>{y}</strong></div>
              </div>
            </div>
          )}
        />
      </div>

      <div>
        <h4>Toggle Example</h4>
        <Toggle
          render={({ on, toggle, setTrue, setFalse }) => (
            <div>
              <div>
                Status: <strong>{on ? 'ON' : 'OFF'}</strong>
              </div>
              <div>
                <button onClick={toggle}>Toggle</button>
                <button onClick={setTrue}>Turn On</button>
                <button onClick={setFalse}>Turn Off</button>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default Example3_RenderProps