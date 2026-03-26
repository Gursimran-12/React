import { useEffect } from "react";

function ThrottleExample() {

  // Throttle function
  function throttle(func, delay) {
    let lastCall = 0;

    return function (...args) {
      const now = Date.now();

      if (now - lastCall >= delay) {
        lastCall = now;
        func(...args);
      }
    };
  }

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll event triggered at:", new Date().toLocaleTimeString());
    };

    const throttledScroll = throttle(handleScroll, 1000);

    window.addEventListener("scroll", throttledScroll);

    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, []);

  return (
    <div>
      <h2>Throttling in React</h2>
      <p>Scroll the page and check console</p>
      <p>Even if you scroll fast, logs appear once every 1 second.</p>
    </div>
  );
}

export default ThrottleExample;