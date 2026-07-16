/**
 * Renders a minimal HTML error page for catastrophic SSR failures.
 * Used by server.ts when the SSR pipeline throws before React can render.
 */
export function renderErrorPage(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Server Error — Imran Buhari</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100svh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0a0a0a;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      padding: 2rem;
      text-align: center;
    }
    h1 { font-size: 1.5rem; font-weight: 600; margin-bottom: 0.75rem; }
    p  { font-size: 0.9rem; color: rgba(255,255,255,0.5); margin-bottom: 1.5rem; }
    a  {
      display: inline-block;
      padding: 0.5rem 1.5rem;
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 9999px;
      font-size: 0.85rem;
      color: #fff;
      text-decoration: none;
    }
    a:hover { background: rgba(255,255,255,0.05); }
  </style>
</head>
<body>
  <div>
    <h1>Something went wrong</h1>
    <p>The server encountered an unexpected error. Please try again.</p>
    <a href="/">Go home</a>
  </div>
</body>
</html>`;
}
