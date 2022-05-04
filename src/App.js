import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './App.css';
import './style.css';

// import HomeView from './views/Home.view';
import NavbarView from './views/Navbar.view';
import DashboardView from './views/Dashboard.view';
import TimeLineView from './views/TimeLine.view';
import RegisterAssetView from './views/RegisterAsset.view';
import defaultControllers from './controllers/common/defaultControllers';

const { getAllDocuments } = defaultControllers;

function App(props) {
	console.log('./APP.js /!\\ SOME DEV HERE /!\\ #useEffect #getAllDocuments');
	const [apiStates, setApiStates] = useState([
		{ apiName: 'crypto-wallets', isConnected: false },
		{ apiName: 'coinGecko', isConnected: false },
	]);
	const [wallets, setWallets] = useState([
		{
			name: null,
			lastUpdateDateTime: null,
			solde: null,
		},
	]);
	const [errorApi, setErrorApi] = useState({
		isError: false,
		message: "everything's fine",
	});

	useEffect(() => {
		getAllDocuments('wallets').then((response) => {
			console.log(
				'App.js #useEffect #getAllDocuments platforms response >>>',
				response
			);
			if (!response.success) {
				console.log('getAll wallets ERROR');
				return setErrorApi({ isError: true, message: response.data });
			} else {
				const datasWallets = response.data.map((datasWallet) => {
					const name = datasWallet.name ?? '';
					const lastDateTimeValueUpdate =
						datasWallet.lastDateTimeValueUpdate ??
						datasWallet.creationDateTime;
					const solde =
						//datasWallet.solde ?? 0; // Prod
						datasWallet.solde ?? 85133.015; // Dev ONLY
					console.log(
						'App.js #useEffect #getAllDocuments if getAll wallets name >>>',
						name
					);

					return {
						name,
						lastDateTimeValueUpdate,
						solde,
					};
				});
				setWallets(datasWallets);
			}
		});
	}, []);

	console.log('App.js wallets >>>', wallets);
	// const dashboard = <DashboardView />;
	const dashboard = <DashboardView datasWallets={wallets} />;

	return (
		<Router>
			<NavbarView />
			<Container fluid className="mainContainer px-4 py-3">
				<Routes>
					<Route path="/dashboard" element={dashboard} />
					<Route path="/time-line" element={<TimeLineView />} />

					<Route
						path="/register/asset"
						element={<RegisterAssetView />}
					/>

					<Route path="/" element={dashboard} />
				</Routes>
			</Container>
		</Router>
	);
}

export default App;

