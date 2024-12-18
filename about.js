```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // Simulate an error that only appears in production
  if (process.env.NODE_ENV === 'production') {
    throw new Error('Something went wrong!');
  }
  return (
    <div>
      <h1>About page</h1>
      <p>This is the about page.</p>
    </div>
  );
}
```