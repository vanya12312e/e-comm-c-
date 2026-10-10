import { FloatButton } from 'antd'
import { ShoppingCart } from 'lucide-react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.tsx'
import './index.css'
import Admin from './pages/admin/admin.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/admin',
    element: <Admin />
  }
])


createRoot(document.getElementById('root')!).render(
  <>
    <FloatButton icon={<ShoppingCart strokeWidth={1.1} />} badge={{ count: 5 }} />
    <RouterProvider router={router} />
  </>

)