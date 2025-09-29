import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, info: null };
  }

  componentDidCatch(error, info) {
    // Log the error and component stack for debugging
    // We include a deep snapshot of this.props.children to inspect what React was rendering
    try {
      console.error('ErrorBoundary caught error:', error);
      console.error('Component stack:', info.componentStack);
      // Try to stringify children safely (may include circular refs)
      const serialize = (obj) => {
        try {
          return JSON.stringify(obj);
        } catch (e) {
          return String(obj);
        }
      };
      console.debug('ErrorBoundary children snapshot:', serialize(this.props.children));
    } catch (e) {
      console.error('Error while logging boundary info', e);
    }

    this.setState({ error, info });
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 20, color: '#fff', background: '#111' }}>
          <h2>Application error (debug mode)</h2>
          <pre style={{ color: '#faa' }}>{String(this.state.error)}</pre>
          <details style={{ whiteSpace: 'pre-wrap', color: '#ddd' }}>
            {this.state.info?.componentStack}
          </details>
          <p>Open the browser console for more debug output (component children snapshot logged).</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
