import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);

    // Check for the specific React error #130 or related rendering errors
    const errorMessage = error.toString();
    if (errorMessage.includes("Minified React error #130") ||
      errorMessage.includes("Objects are not valid as a React child")) {
      console.log("Detected corrupted state. Clearing localStorage...");
      localStorage.removeItem("csca_cart");
      localStorage.removeItem("user");
      // Optional: Clear everything if you want to be safe
      // localStorage.clear();
    }
  }

  handleReset = () => {
    localStorage.clear();
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          height: '100vh',
          width: '100vw',
          backgroundColor: 'black',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif'
        }}>
          <h2 style={{ color: '#dc2626', marginBottom: '1rem', fontSize: '2rem', fontWeight: 'bold' }}>Something went wrong</h2>
          <p style={{ color: '#9ca3af', marginBottom: '2rem', maxWidth: '400px', textAlign: 'center' }}>
            We encountered a display error, possibly due to corrupted saved data.
          </p>
          <button
            onClick={this.handleReset}
            style={{
              padding: '12px 24px',
              backgroundColor: '#dc2626',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            Reset App Data & Reload
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
