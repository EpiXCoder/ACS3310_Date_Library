/**
 * Custom Date Library Class
 * @name D
 * @example 
 * const myDate = new D(2023, 4, 6);
 * console.log(myDate.year);  // Outputs: 2023
 */
class D {
    /**
     * @name constructor
     * @param  {...any} args - Accepts any number of arguments that a normal Date constructor would.
     * @example 
     * const myDate = new D(2023, 4, 6);
     */
	constructor(...args) {
		this._date = new Date(...args);
	}

    /** 
     * @name year
     * @returns {number} - Full year e.g., 2021
     * @example 
     * console.log(myDate.year);  // Outputs: 2023
     */
	get year() {
        return this._date.getFullYear();
    }

    /** 
     * @name yr
     * @returns {string} - Last two digits of year e.g., 21 for 2021
     * @example 
     * console.log(myDate.yr);  // Outputs: 23
     */
    get yr() {
        return this._date.getFullYear().toString().slice(-2);
    }

    /** 
     * @name month
     * @returns {string} - Full month name e.g., January
     * @example 
     * console.log(myDate.month);  // Outputs: May
     */
    get month() {
        return new Intl.DateTimeFormat('en', { month: 'long' }).format(this._date);
    }

    /** 
     * @name mon
     * @returns {string} - Short month name e.g., Jan
     * @example 
     * console.log(myDate.mon);  // Outputs: May
     */
    get mon() {
        return new Intl.DateTimeFormat('en', { month: 'short' }).format(this._date);
    }

    /** 
     * @name day
     * @returns {string} - Full weekday name e.g., Monday
     * @example 
     * console.log(myDate.day);  // Outputs: Thursday
     */
    get day() {
        return new Intl.DateTimeFormat('en', { weekday: 'long' }).format(this._date);
    }

    /** 
     * @name dy
     * @returns {string} - Short weekday name e.g., Mon
     * @example 
     * console.log(myDate.dy);  // Outputs: Thu
     */
    get dy() {
        return new Intl.DateTimeFormat('en', { weekday: 'short' }).format(this._date);
    }

    /** 
     * @name date
     * @returns {number} - Date of the month
     * @example 
     * console.log(myDate.date);  // Outputs: 6
     */
    get date() {
        return this._date.getDate();
    }

    /** 
     * @name hours
     * @returns {number} - Hour of the date
     * @example 
     * console.log(myDate.hours);  // Outputs: 0 (depends on the time you provided or current time)
     */
    get hours() {
        return this._date.getHours();
    }

    /** 
     * @name mins
     * @returns {number} - Minutes of the date
     * @example 
     * console.log(myDate.mins);  // Outputs: 0 (depends on the time you provided or current time)
     */
    get mins() {
        return this._date.getMinutes();
    }

    /** 
     * @name secs
     * @returns {number} - Seconds of the date
     * @example 
     * console.log(myDate.secs);  // Outputs: 0 (depends on the time you provided or current time)
     */
    get secs() {
        return this._date.getSeconds();
    }

    /**
     * @name getOrdinal
     * Returns the ordinal representation of a number.
     * @param {number} n - The number to be converted.
     * @returns {string} - Number with its ordinal e.g., 1st, 2nd, 3rd...
     * @example 
     * console.log(myDate.getOrdinal(22));  // Outputs: 22nd
     */
    getOrdinal(n) {
        const s = ["th", "st", "nd", "rd"];
        const v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    }

    /**
     * @name format
     * Format the date according to the provided mask.
     * @param {string} [mask='Y M D'] - Formatting mask.
     * @returns {string} - Formatted date string.
     * @example 
     * console.log(myDate.format('M D, Y'));  // Outputs: May 6, 2023
     */
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

    /**
     * @name when
     * Provide a human-readable description of 'when' a date will occur relative to now.
     * @returns {string} - Description of when the date occurs e.g., '2 days ago', '3 hours from now'.
     * @example 
     * console.log(myDate.when());  // Outputs: 2 days ago (depends on the current date and the date you provided)
     */
    when() {
        const now = new Date();
    
        // Calculate difference in milliseconds
        const difference = this._date - now;
    
        // Convert the difference into various units
        const secondsDifference = Math.round(difference / 1000);
        const minutesDifference = Math.round(secondsDifference / 60);
        const hoursDifference = Math.round(minutesDifference / 60);
        const daysDifference = Math.round(hoursDifference / 24);
    
        const monthsDifference = Math.round(daysDifference / 30.44); // Using the average number of days per month over a 365.25 day period
        const yearsDifference = Math.round(daysDifference / 365.25); // Using 365.25 to account for leap years
    
        if (Math.abs(secondsDifference) <= 5) {
            return 'now';
        }
    
        let result = [];
        if (yearsDifference !== 0) result.push(`${Math.abs(yearsDifference)} year${Math.abs(yearsDifference) > 1 ? 's' : ''}`);
        if (monthsDifference % 12 !== 0) result.push(`${Math.abs(monthsDifference % 12)} month${Math.abs(monthsDifference % 12) > 1 ? 's' : ''}`);
        if (daysDifference % 30 !== 0) result.push(`${Math.abs(daysDifference % 30)} day${Math.abs(daysDifference % 30) > 1 ? 's' : ''}`);
        if (hoursDifference % 24 !== 0) result.push(`${Math.abs(hoursDifference % 24)} hour${Math.abs(hoursDifference % 24) > 1 ? 's' : ''}`);
        if (minutesDifference % 60 !== 0) result.push(`${Math.abs(minutesDifference % 60)} minute${Math.abs(minutesDifference % 60) > 1 ? 's' : ''}`);
        if (secondsDifference % 60 !== 0) result.push(`${Math.abs(secondsDifference % 60)} second${Math.abs(secondsDifference % 60) > 1 ? 's' : ''}`);
    
        let timeDirection = difference > 0 ? 'from now' : 'ago';
    
        return result.join(', ') + ' ' + timeDirection;
    }
       
}

module.exports = D;

// Testing

// const d1 = new D(2023,4,4);
// console.log(d1.when()); 

// const d2 = new D(2023, 4, 6);
// console.log(d2.when());

// const d3 = new D();
// console.log(d3.when()); 
// console.log(d3.format('Y-M-D h:I:S'));