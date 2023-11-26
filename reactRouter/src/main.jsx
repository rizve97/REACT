import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Footer/Footer.jsx'


const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout/>,
    children: [
        
     {
      path: "home",
      element: <Home/>
     },
     {
      path: "about",
      element:<About/>
     }
    ]
  
  
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
