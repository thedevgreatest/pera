import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Import from './page/Import'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/import',
    element: <Import />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
