
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'


const router = createBrowserRouter([
   {path:'/',element:<Home/>},
   {path:'/about',element:<About/>}
])
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
  
)
