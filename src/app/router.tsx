import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';

// Lazy load pages
const Home = React.lazy(() => import('@/pages/Home'));
const Projects = React.lazy(() => import('@/pages/Projects'));
const Experience = React.lazy(() => import('@/pages/Experience'));
const Education = React.lazy(() => import('@/pages/Education'));
const Certifications = React.lazy(() => import('@/pages/Certifications'));
const Contact = React.lazy(() => import('@/pages/Contact'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={<div className="flex items-center justify-center min-h-screen">Chargement...</div>}>
            <Home />
          </React.Suspense>
        ),
      },
      {
        path: 'projects',
        element: (
          <React.Suspense fallback={<div className="flex items-center justify-center min-h-screen">Chargement...</div>}>
            <Projects />
          </React.Suspense>
        ),
      },
      {
        path: 'experience',
        element: (
          <React.Suspense fallback={<div className="flex items-center justify-center min-h-screen">Chargement...</div>}>
            <Experience />
          </React.Suspense>
        ),
      },
      {
        path: 'education',
        element: (
          <React.Suspense fallback={<div className="flex items-center justify-center min-h-screen">Chargement...</div>}>
            <Education />
          </React.Suspense>
        ),
      },
      {
        path: 'certifications',
        element: (
          <React.Suspense fallback={<div className="flex items-center justify-center min-h-screen">Chargement...</div>}>
            <Certifications />
          </React.Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <React.Suspense fallback={<div className="flex items-center justify-center min-h-screen">Chargement...</div>}>
            <Contact />
          </React.Suspense>
        ),
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
