import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageHome } from './pages/PageHome';
import { PageInfo } from './pages/PageInfo';
import { PageAbout } from './pages/PageAbout';

function App() {
	return (
		<div className="App">
			<h1>Info Site</h1>
			<nav>
				<NavLink to="/home">Home</NavLink>
				<NavLink to="/info">Info</NavLink>
				<NavLink to="/about">About</NavLink>
			</nav>

			<Routes>
				<Route path="/home" element={<PageHome />} />
				<Route path="/info" element={<PageInfo />} />
				<Route path="/about" element={<PageAbout />} />
				<Route path="/" element={<Navigate to="/home" replace />} />
			</Routes>
		</div>
	);
}

export default App;
