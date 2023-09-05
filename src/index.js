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

    getOrdinal(n) {
        const s = ["th", "st", "nd", "rd"];
        const v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    }

    format(mask = 'Y M D') {
        return mask.replace(/Y|y|M|m|D|d|L|l|#|H|h|I|i|S|s/g, match => {
            switch (match) {
                case 'Y': return this.year;
                case 'y': return this.yr;
                case 'M': return this.month;
                case 'm': return this.mon;
                case 'D': return String(this.date).padStart(2, '0');
                case 'd': return this.date;
                case 'L': return this.day;
                case 'l': return this.dy;
                case '#': return this.getOrdinal(this.date);
                case 'H': return String(this.hours).padStart(2, '0');
                case 'h': return this.hours;
                case 'I': return String(this.mins).padStart(2, '0');
                case 'i': return this.mins;
                case 'S': return String(this.secs).padStart(2, '0');
                case 's': return this.secs;
                default:  return match;
            }
        });
    }
}


// Sample usage:
// const d = new D();
// console.log(d.year);  // Full year
// console.log(d.yr);    // Short year
// console.log(d.month); // Full month name
// console.log(d.mon);   // Short month name
// console.log(d.day);   // Full day name
// console.log(d.dy);    // Short day name
// console.log(d.date);  // Day of the month
// console.log(d.hours); // Current hour
// console.log(d.mins);  // Current minutes
// console.log(d.secs);  // Current seconds

// Sample usage:
const d = new D(2017, 0, 2, 3, 4, 5);
console.log(d.format());              // 2017 January 02
console.log(d.format('y/m/d'));       // 17/Jan/2
console.log(d.format('H:I:S'));       // 03:04:05
console.log(d.format('h:i:s'));       // 3:4:5
console.log(d.format('Y-M-D h:I:S')); // 2017-January-02 3:04:05 