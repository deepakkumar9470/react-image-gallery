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
import { ThemeContext, ThemeContextProvider } from './context/ThemeContext';
import ThemeProvider from './provider/ThemeProvider';
import Modal from './components/Modal';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App />}>
        <Route index={true} path='/' element={<Home />} />
        {/* <Route path='/get/:id' element={<Modal />} /> */}
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



