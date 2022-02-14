import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import MoviesProvider from './context/MoviesProvider';


ReactDOM.render(
  <MoviesProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </MoviesProvider>,
  document.getElementById('root')
);
