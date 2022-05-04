const apiUrl = 'http://localhost:8000';
const apiCoinGecko = 'https://api.coingecko.com/api/v3/';

const params = {
	apiUrl,
	headers: {
		mode: 'cors',
		Accept: 'application/json',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': apiUrl,
		'Access-Control-Allow-Headers': 'Content-Type',
		'Access-Control-Allow-Methods': 'POST, GET',
		'access-control-allow-credentials': 'true',
	},
};

export default params;
