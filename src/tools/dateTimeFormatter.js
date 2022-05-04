/**
 *
 * @param {*} dateTime In JS date time format (YYYY-MM-DDTHH:mm:ss.sssZ)
 * @param {*} format Not used 'dd mmmm yyyy'
 * dd or DD = 31
 * mmmm = december
 * yyyy = 2022
 * @param {*} lang Only 'fr' is supported
 */
const dateTimeFormatter = (dateTime, format, lang) => {
	// if (lang !== 'fr') {
	// 	return dateTime;
	// }
	const formats = {
		dd: (dateTime) => {
			const newDate = new Date(dateTime).toDateString();
			const day = newDate.split(' ')[2];
			return day;
		},
		mmmm: (dateTime) => {
			const monthTable = {
				Jan: 'janvier',
				Feb: 'février',
				Mar: 'mars',
				Apr: 'avril',
				May: 'mai',
				Jun: 'juin',
				Jul: 'juillet',
				Aug: 'août',
				Sep: 'sepembre',
				Oct: 'octobre',
				Nov: 'novembre',
				Dec: 'décembre',
			};
			const newDate = new Date(dateTime).toDateString();
			const monthShort = newDate.split(' ')[1];
			const month = monthTable[monthShort];
			return month;
		},

		yyyy: (dateTime) => {
			const newDate = new Date(dateTime).toDateString();
			const year = newDate.split(' ')[3];
			return year;
		},
	};
	return (
		formats.dd(dateTime) +
		' ' +
		formats.mmmm(dateTime) +
		' ' +
		formats.yyyy(dateTime)
	);
};

export default dateTimeFormatter;
