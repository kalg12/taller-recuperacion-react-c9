import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from '../components/Navbar'
import CrudPage from '../pages/CrudPage'
import HomePage from '../pages/HomePage'

const AppRouter = () => {
  return (
    <>
        <Router>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/crud" element={<CrudPage/>} />
                </Routes>
        </Router>
    </>
  )
}

export default AppRouter