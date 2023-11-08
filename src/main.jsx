import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Route/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Provider/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
     <div className='container mx-auto'>
     <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <QueryClientProvider client={queryClient}>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
     </QueryClientProvider>
  </SkeletonTheme>
     </div>
  </React.StrictMode>,
)
