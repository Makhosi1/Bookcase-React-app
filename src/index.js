import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContactUs from './pages/Contact';
//import { BookList } from './components/book_list/BookList';
import AboutUs from './pages/About';
//import { AnyComponent } from './App';
//import { PrimaryButton } from './App';
//import { DangerButton } from './App';

const routerProps = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/contact",
    element: <ContactUs />
  },
  {
    path: "/aboutus",
    element: <AboutUs />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router ={routerProps} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*  
    <DangerButton>
      Hello You are in DANGER
    </DangerButton>

    this above is to connect our component to the DOM
    */