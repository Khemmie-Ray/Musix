/* eslint-disable no-unused-vars */
import React from 'react'
import Home from './Home'
import SignUp from './SignUp'
import './App.css'
import { 
  createBrowserRouter, 
  Route, 
  createRoutesFromElements, 
  RouterProvider 
} from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
  <Route path="/" element={<Home />} />
  <Route path="/signup" element={<SignUp />} />
  </Route>
))

const App = () => {
  return (
    <div className="App">
    <RouterProvider router={router} />
  </div>
  )
}

export default App