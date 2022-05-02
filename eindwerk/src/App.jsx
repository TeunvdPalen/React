import React from "react";
import Header from "./Header"

import { Routes, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Afrekenen from "./Afrekenen";

function App() {
	return (
		<div >
			<Header />
			<Routes>
				<Route path='/about' element={<About />} />
				<Route path='/afrekenen' element={<Afrekenen />} />
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	)
}

export default App