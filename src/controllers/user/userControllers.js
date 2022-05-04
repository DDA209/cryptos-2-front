import params from '../../../config/params';
const { headers, apiUrl } = params;

const userUrl = `${apiUrl}/users`;

const usersControllers = {
	getUserById: (id) => {
		console.log('controller/user/user get id', id);
		const method = 'GET';
		const user = fetch(`${userUrl}/user/profile/${id}`, {
			headers,
			method,
		}).then((res) => {
			console.log('controller/user/user user', res.json);
			return res.json;
		});

		return user;
	},
};
export default usersControllers;
