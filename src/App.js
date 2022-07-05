import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/homepage/Homepage.component';
import Header from './components/header/header.component';

import './App.css';

class App extends Component {
	render() {
		return (
		  <div className="App">
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
			</Routes>
		  </div>
		);
	}
}

export default App;
