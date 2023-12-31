import '/src/styles/main.scss';

import { NavLink, Routes, Route, Navigate } from 'react-router-dom';

import { PageHome } from './pages/PageHome';
import { PageShark } from './pages/PageShark';
import { PagePWGenerator } from './pages/PagePWGenerator';
import { PageAbout } from './pages/PageAbout';

function App() {
	return (
		<div className="App">

			<header>
				<h1>THE CRAZY SITE</h1>
				<div className="thin-line"></div>

				<nav>
					<NavLink className="naviLink" to="/home">Home</NavLink>
					<NavLink className="naviLink" to="/shark">Sharks</NavLink>
					<NavLink className="naviLink" to="/pwgenerator">Passwords</NavLink>
					<NavLink className="naviLink" to="/about">About</NavLink>
				</nav>
				
				<div className="thin-line"></div>
			</header>

			<Routes>
				<Route path="/home" element={<PageHome />} />
				<Route path="/shark" element={<PageShark />} />
				<Route path="/pwgenerator" element={<PagePWGenerator />} />
				<Route path="/about" element={<PageAbout />} />
				<Route path="/" element={<Navigate to="/home" replace />} />
			</Routes>
		</div>
	);
}

export default App;
