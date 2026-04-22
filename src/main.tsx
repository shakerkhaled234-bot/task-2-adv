import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
 import Root from './pages/Root.tsx'
import AboutUs from './pages/AboutUs/AboutUs.tsx'
import Academics from './pages/Academics/Academics.tsx'
import Admissions from './pages/Admissions/Admissions.tsx'
import StudentLife from './pages/StudentLife/StudentLife.tsx'
import Contact from './pages/Contact/Contact.tsx'

const router = createBrowserRouter([

{
  path : "/",
  element : < Root />,
children : [
  {
    path : "",
    element : <Home/>
  },
    {
    path : "about-us",
    element : <AboutUs/>
  },
    {
    path : "Academics",
    element : <Academics/>
  },
   {
    path : "Admissions",
    element : <Admissions/>
  },
   {
    path : "student-life",
    element : <StudentLife/>
  },
    {
    path : "Contact",
    element : <Contact/>
  }
]
}

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
