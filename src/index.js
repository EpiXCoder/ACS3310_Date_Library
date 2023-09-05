class D {
	constructor(...args) {
		this._date = new Date(...args);
	}

	// Full Year
	get year() {
		return this._date.getFullYear();
	}

	// Short Year
	get yr() {
		return this._date.getFullYear() % 100;
	}

	// Full Month
	get month() {
		const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		return monthNames[this._date.getMonth()];
	}

	// Short Month
	get mon() {
		const shortMonthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		return shortMonthNames[this._date.getMonth()];
	}

	// Full Day
	get day() {
		const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		return dayNames[this._date.getDay()];
	}

	// Short Day
	get dy() {
		const shortDayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		return shortDayNames[this._date.getDay()];
	}

	// Date of the month
	get date() {
		return this._date.getDate();
	}

	// Hour
	get hours() {
		return this._date.getHours();
	}

	// Minutes
	get mins() {
		return this._date.getMinutes();
	}

	// Seconds
	get secs() {
		return this._date.getSeconds();
	}
}


// Sample usage:
const d = new D();
console.log(d.year);  // Full year
console.log(d.yr);    // Short year
console.log(d.month); // Full month name
console.log(d.mon);   // Short month name
console.log(d.day);   // Full day name
console.log(d.dy);    // Short day name
console.log(d.date);  // Day of the month
console.log(d.hours); // Current hour
console.log(d.mins);  // Current minutes
console.log(d.secs);  // Current seconds