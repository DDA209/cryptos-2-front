import React, { useState } from 'react';
// import 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css';

// <i className="bi bi-ui-radios-grid mr-4"></i> <-- radios boutons !-->
// <i className="bi bi-chevron-down"></i> <-- flèche bas menu déroulant !-->
// <i className="bi bi-calendar-range"></i> <-- calandrier plage de dates !-->
// <i className="bi bi-calendar-event"></i> <-- calandrier 1 date !-->
// <i className="bi bi-arrow-repeat"></i>;  <-- mise à jour !-->
// <i className="bi bi-caret-right-square"></i> <-- flêche droite de validation !-->
// <i className="bi bi-cash-coin"></i> <-- Cash montant transaction !-->
// <i className="bi bi-download"></i> <-- crédit !-->
// <i className="bi bi-upload"></i> <-- débit !-->
// <i className="bi bi-trash3-fill"></i> <-- poubelle / supprimer !-->
// <i className="bi bi-bank"></i> <-- bank platform !-->
// <i className="bi bi-piggy-bank"></i> <-- tirelire chox de la devise !-->
// <i className="bi bi-wallet2"></i> <-- wallet !-->

import { Link } from 'react-router-dom';

function NavView() {
	const title = 'CRYPTOS';

	const [isActiveDashboard, setActiveDashboard] = useState(true);
	const [isActiveTimeLine, setActiveTimeLine] = useState(false);
	const [isActiveRegisterAsset, setActiveRegisterAsset] = useState(false);

	const changeButtons = (buttonPressed) => {
		const buttons = [
			{ name: 'dashboard', function: setActiveDashboard },
			{ name: 'timeLine', function: setActiveTimeLine },
			{ name: 'registerAsset', function: setActiveRegisterAsset },
		];

		buttons.forEach((button) => {
			buttonPressed === button.name
				? button.function(true)
				: button.function(false);
		});
	};

	return (
		<>
			<nav className="navbar navbar-dark navbar-theme-primary col-12 d-md-none">
				<h1 className="text-white mb-0">{title}</h1>
				<div className="d-flex align-items-center">
					<button
						className="navbar-toggler d-md-none collapsed"
						type="button"
						data-toggle="collapse"
						data-target="#sidebarMenu"
						aria-controls="sidebarMenu"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
				</div>
			</nav>
			<div className="container-fluid bg-soft">
				<div className="row">
					<div className="col-12">
						<nav
							id="sidebarMenu"
							className="sidebar d-md-block bg-primary text-white collapse px-5"
						>
							<div className="sidebar-sticky pt-4 mx-auto">
								<div className="user-card d-flex align-items-center justify-content-between justify-content-md-center pb-4">
									<div className="d-flex align-items-center mt-2">
										<h1>{title}</h1>
									</div>
									<div className="collapse-close d-md-none">
										<a
											href="#sidebarMenu"
											className="fas fa-times collapsed"
											data-toggle="collapse"
											data-target="#sidebarMenu"
											aria-controls="sidebarMenu"
											aria-expanded="false"
											aria-label="Toggle navigation"
										>
											<i className="bi bi-x-lg"></i>
										</a>
									</div>
								</div>

								<ul className="nav flex-column mt-4 mb-auto">
									<li
										className={`nav-item ${
											isActiveDashboard && 'active'
										}`}
										onClick={() =>
											changeButtons('dashboard')
										}
									>
										<Link
											to="/dashboard"
											href="#"
											className={`nav-link text-white ${
												isActiveDashboard && 'active'
											}`}
											aria-current="page"
										>
											<i className="bi bi-pie-chart-fill mr-2"></i>
											Récapitulatif
										</Link>
									</li>
									<li
										className={`nav-item ${
											isActiveTimeLine && 'active'
										}`}
										onClick={() =>
											changeButtons('timeLine')
										}
									>
										<Link
											to="/time-line"
											className={`nav-link text-white ${
												isActiveTimeLine && 'active'
											}`}
										>
											<i className="bi bi-graph-up mr-2"></i>
											Time line
										</Link>
									</li>
									<li
										className={`nav-item ${
											isActiveRegisterAsset && 'active'
										}`}
										onClick={() =>
											changeButtons('registerAsset')
										}
									>
										<Link
											to="/register/asset"
											className={`nav-link text-white ${
												isActiveRegisterAsset &&
												'active'
											}`}
										>
											<i className="bi bi-pencil-square mr-2"></i>
											Saisie
										</Link>
									</li>
									<li
										role="separator"
										className="dropdown-divider mt-4 mb-3 border-blue"
									></li>
								</ul>
								{/* <ul className="nav flex-column mt-4">
									<li
										role="separator"
										className="dropdown-divider mt-4 mb-3 border-blue"
									>
									</li>
									<li>
										<h4>Faire un don</h4>
									</li>

									<li>
										BTC :{' '}
										<span className="smaller">
											1rg7r643g1s4g6ez433g1s68e43v1
										</span>
									</li>
								</ul> */}
							</div>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
}

export default NavView;
