// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './view/HomePage'
import Login from './view/Login'
import Register from './view/Register'
import ForgotPassword from './view/ForgotPassword'
import LandingPage from './view/LandingPage'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import TestComponent from './components/TestComponent'

function App() {
	return (
		<>
			<div>
				<NavBar />

				<Routes className="App">
					<Route path="/" element={<LandingPage />} />
					<Route path="/home" element={<HomePage />} />
					<Route path="/proyectos" element={<TestComponent />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/forgotPassword" element={<ForgotPassword />} />
				</Routes>

				<Footer />
			</div>
		</>
	)
}

export default App
