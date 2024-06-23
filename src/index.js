import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserContextProvider } from './React Hooks Notes/useContextEx1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </UserContextProvider>
);



