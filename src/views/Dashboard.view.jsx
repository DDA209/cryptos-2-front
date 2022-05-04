import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardStandard from '../components/cards/CardWallet';
import Selector from '../components/buttons/Selector';

function DashboardView(props) {
	console.log('views/Dashboard.view.js props >>>', props);
	return (
		<>
			<Row>
				<Col xs={2}>
					<Selector />
				</Col>
			</Row>
			<Row>
				{props.datasWallets.map((wallet, key) => {
					return (
						<Col
							key={key}
							sm={{ span: 12 }}
							lg={{ span: 6 }}
							xl={{ span: 4 }}
						>
							<CardStandard wallet={wallet} />
						</Col>
					);
				})}
			</Row>
		</>
	);
}

export default DashboardView;
