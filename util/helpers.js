export const classNames = (...classes) => {
	return classes.filter(Boolean).join(' ');
};

/*
SWR data fetcher
 */
export const fetcher = (...args) => fetch(...args).then((res) => res.json());

/**
 * Slugify a string
 *
 * @param str
 * @returns {string}
 */
export const slugify = (str) => {
	str = str.replace(/^\s+|\s+$/g, '');

	// Make the string lowercase
	str = str.toLowerCase();

	// Remove accents, swap ñ for n, etc
	var from = 'ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;';
	var to = 'AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------';
	for (var i = 0, l = from.length; i < l; i++) {
		str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
	}

	// Remove invalid chars
	str = str
		.replace(/[^a-z0-9 -]/g, '')
		// Collapse whitespace and replace by -
		.replace(/\s+/g, '-')
		// Collapse dashes
		.replace(/-+/g, '-');

	return str;
};

export const timestampToDate = (timestamp) => {
	const date = new Date(timestamp);
	const fullMonth = date.toLocaleString('en-US', { month: 'long' })
	return `${fullMonth} ${date.getDate()}, ${date.getFullYear()}`
}

/**
 * Calculates an age using a date/birthdate
 *
 * @param birthdate
 * @returns {null|number}
 */
export const ageFromDate = (birthdate) => {
	if (!birthdate) return null;

	const dob = new Date(birthdate);
	//calculate month difference from current date in time
	const month_diff = Date.now() - dob.getTime();

	//convert the calculated difference in date format
	const age_dt = new Date(month_diff);

	//extract year from date
	const year = age_dt.getUTCFullYear();

	//now calculate the age of the user
	const age = Math.abs(year - 1970);

	return age;
}
