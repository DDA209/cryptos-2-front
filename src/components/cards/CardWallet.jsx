import { Card } from 'react-bootstrap';
import DateFormatter from '../../tools/dateTimeFormatter';
import '../../css/common/styles.css';
import '../../css/cards/cards.css';

function CardStandard(props) {
	const { name, solde, lastDateTimeValueUpdate } = props.wallet;

	const renderSolde = (solde) => {
		const soldeCut = (Math.round(solde * 100) / 100).toString().split('.');
		const soldeDecimal = soldeCut[1]
			? (soldeCut[1] + '0').substr(0, 2)
			: '00';
		let soldeFloor = '';
		for (let i = soldeCut[0].length - 1, j = 0; i >= 0; i--, j++) {
			if (j % 3 === 0 && i !== soldeCut[0].length - 1) {
				soldeFloor = soldeCut[0][i] + ' ' + soldeFloor;
			} else {
				soldeFloor = soldeCut[0][i] + soldeFloor;
			}
		}
		// Render
		return (
			<h2>
				{soldeFloor},<span className="decimal">{soldeDecimal}</span> $
			</h2>
		);
		// -Render
	};

	return (
		<Card className="mx-1 my-4 px-3 py-2 rounded shadows-default">
			{/* <Card.Title> */}
			<h3>{name ?? '--'}</h3>
			{/* </Card.Title> */}
			{solde ? renderSolde(solde) : '--'}
			<h6 className="date">
				{lastDateTimeValueUpdate
					? DateFormatter(
							lastDateTimeValueUpdate,
							'dd mmmm yyyy',
							'fr'
					  ) ?? '--'
					: '-- ----- 20--'}
			</h6>
		</Card>
	);
}

export default CardStandard;
