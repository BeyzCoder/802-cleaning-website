import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import FAQPage from './pages/FAQPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/service',
    element: <ServicePage />
  },
  {
    path: '/faq',
    element: <FAQPage />
  },
  {
    path: '/booking',
    element: <BookingPage />
  },
  {
    path: '/contact',
    element: <ContactPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <ScrollToTop></ScrollToTop>
    </RouterProvider>
  </React.StrictMode>
);

