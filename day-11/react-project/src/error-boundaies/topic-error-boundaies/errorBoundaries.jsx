// ✅ What is this?

// 👉 A component that catches errors in child components
// 👉 Prevents full app crash (white screen)

// 🎯 Why we use it?
// To protect app from crashing
// To show fallback UI instead

import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Error:", error);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;