import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import HomePage from './homepage/Homepage.component';

import './App.css';

class App extends Component {
	render() {
		return (
		  <div className="App">
			<Routes>
				<Route path='/' element={<HomePage />} />
			</Routes>
		  </div>
		);
	}
}

export default App;
