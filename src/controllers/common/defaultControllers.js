import params from '../../config/params';
const { headers, apiUrl } = params;

const defaultControllers = {
	postDocument: async (apiRoute, body) => {
		// e.g apifolder = 'folders/folder', body= <stringyfied json>
		const url = `${apiUrl}/${apiRoute}`;
		const method = 'POST';
		const response = await fetch(url, { headers, method, body }).then(
			(res) => {
				return res.json();
			}
		);
		return response; // { success: true, data: { <document> } } or { success: false, data: <error> }
	},

	/**
	 * Get all document from the Rest API
	 * @param {string} apiFolder Main folder to access usally to get a complet collection
	 * @returns response from API - usally a complete collection
	 */
	getAllDocuments: async (apiFolder) => {
		// e.g apifolder = 'folders'
		const url = `${apiUrl}/${apiFolder}`;
		console.log(
			'controllers/common/defaultControllers #getAllDocuments url >>>',
			url
		);
		const method = 'GET';
		const response = await fetch(url, { headers, method }).then((res) => {
			return res.json();
		});
		return response; // { success: true, data: [ { <document> } ] } or { success: false, data: <error> }
	},

	getDocumentById: async (apiFolder, id) => {
		// e.g apifolder = 'folders/folder', id = <known id>
		console.log(
			'controllers/common/defaultControllers #getDocumentById apiFolder, id >>>',
			apiFolder,
			id
		);
		const url = `${apiUrl}/${apiFolder}/${id}`;
		const method = 'GET';
		const response = await fetch(url, { headers, method }).then((res) => {
			return res.json();
		});
		return response; // { success: true, data: { <document> } } or { success: false, data: <error> }
	},

	getDocumentByQueries: async (apiFolder, query) => {
		// e.g apifolder = 'folders' queries = '?_id=2154&name=test'
		const url = `${apiUrl}/${apiFolder}/query${query}`;
		const method = 'GET';
		const response = await fetch(url, { headers, method }).then((res) => {
			return res.json();
		});
		return response; // { success: true, data: [ { <documents> } ] } or { success: false, data: <error> }
	},

	putDocument: async (apiFolder, id, body) => {
		// e.g apifolder = 'folders/folder', id = <known id>, body= <stringyfied json>
		const url = `${apiUrl}/${apiFolder}/${id}`;
		const method = 'PUT';
		const response = await fetch(url, { headers, method, body }).then(
			(res) => {
				return res.json();
			}
		);
		return response; // { success: true, data: { <document> } } or { success: false, data: <error> }
	},

	deleteDocument: async (apiFolder, id) => {
		// e.g apifolder = 'folders/folder', id = <known id>, body= <stringyfied json>
		const url = `${apiUrl}/${apiFolder}/${id}`;
		const method = 'DELETE';
		const response = await fetch(url, { headers, method }).then((res) => {
			return res.json();
		});
		return response; // { success: true, data: { <document> } } or { success: false, data: <error> }
	},
};

export default defaultControllers;
