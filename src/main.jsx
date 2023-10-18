import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
  } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import {ThemeContextProvider } from './context/ThemeContext';
import ThemeProvider from './provider/ThemeProvider';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App />}>
        <Route index={true} path='/' element={<Home />} />
      </Route>
    )
  );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<ThemeContextProvider>
  <ThemeProvider>

  <RouterProvider router={router}/>
  </ThemeProvider>
</ThemeContextProvider>

    
  
);



