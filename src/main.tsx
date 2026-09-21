import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Self-hosted variable fonts — no third-party request at runtime.
// All subsets ship in the bundle, but `unicode-range` means the browser only
// downloads the ones a visitor's text actually needs (latin, here).
import '@fontsource-variable/mona-sans';
import '@fontsource-variable/plus-jakarta-sans';
import '@fontsource-variable/inter';

import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
