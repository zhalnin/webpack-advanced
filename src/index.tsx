import { createRoot } from 'react-dom/client';
import { App } from '@/components/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { Shop } from '@/pages/shop';
import { LazyAbout } from '@/pages/about/About.lazy';

const root = document.getElementById('root');

if(!root){
    throw new Error('root not found');
}

const container = createRoot(root);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense><LazyAbout /></Suspense>
            },
            {
                path: '/shop',
                element: <Suspense><Shop /></Suspense>
            },
        ]
    },
]);

container.render(
    <RouterProvider router={router} />
);