import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center py-20">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Something went wrong.</h2>
          <p className="text-gray-700 dark:text-gray-300">Please try refreshing the page.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
