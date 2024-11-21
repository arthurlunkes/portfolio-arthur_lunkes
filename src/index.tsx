import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import App from './main/App';
import { ThemeProvider } from './contexts/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
