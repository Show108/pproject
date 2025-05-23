import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@fontsource/raleway/400.css';
import '@fontsource/prompt/700.css';
import '@fontsource/roboto/700.css';
import { SessionProvider } from './context/SessionContext';

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Prompt', sans-serif` },
        body: { value: `'Raleway', sans-serif` },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <ThemeProvider attribute='class' disableTransitionOnChange>
        <SessionProvider>
          <App />
        </SessionProvider>
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>
);
