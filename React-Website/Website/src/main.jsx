import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import './Components/index'
import './App.css'
import { Home, Layout, Contact, About, User, Github } from './Components/index'
import { GithubProfile } from './Components/GithubPage/GithubPage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "Contact-us", element: <Contact /> },
      { path: "About-us", element: <About /> }
    ]
  },
])

const RoutersTable = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="contact-us" element={<Contact />} />
      <Route path="About-us" element={<About />} />
      <Route
        loader={GithubProfile}
        path="git-hub-Page" element={<Github />} />
      <Route path="User/:Id" element={<User />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={RoutersTable} />
  </React.StrictMode>,
)
