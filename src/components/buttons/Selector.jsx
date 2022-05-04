import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import Line from '../line/Line';
import '../../css/common/styles.css';
import '../../css/buttons/buttons.css';

function Selector() {
	return (
		<ButtonGroup
			direction="horizontal"
			// size="sm"
			className="shadows-default mx-1 my-3 px-3 py-1
			 rounded"
			//  button selector"
			aria-label="Basic example"
		>
			<Button className="btn-light py-0 px-4">€</Button>
			<Line orientation="vertical" />
			<Button className="btn-light py-0 px-4">$</Button>
			<Line orientation="vertical" />
			<Button className="btn-light py-0 px-4">₿</Button>
		</ButtonGroup>
	);
}

export default Selector;
