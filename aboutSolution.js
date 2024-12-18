```javascript
// pages/about.js
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default function About() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div>
        <h1>About page</h1>
        <p>This is the about page.</p>
      </div>
    </ErrorBoundary>
  );
}
```