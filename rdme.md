D - Custom Date Library
=======================

`D` is a minimalistic, user-friendly custom date library that enhances the native JavaScript Date object with more accessible methods and human-readable outputs.

Table of Contents
-----------------

-   [Installation](https://chat.openai.com/#installation)
-   [Usage](https://chat.openai.com/#usage)
-   [API Documentation](https://chat.openai.com/#api-documentation)
-   [Examples](https://chat.openai.com/#examples)
-   [Contributing](https://chat.openai.com/#contributing)
-   [License](https://chat.openai.com/#license)

Installation
------------

Using npm:

bashCopy code

`npm install your-package-name`

Using yarn:

bashCopy code

`yarn add your-package-name`

Usage
-----

Here's a basic usage example:

javascriptCopy code

`const D = require('your-package-name');

const myDate = new D(2023, 4, 6);
console.log(myDate.year);  // Outputs: 2023`

API Documentation
-----------------

### Constructor

-   new D(year, month, day): Creates a new D object.

### Properties

-   year: Returns the full year.
-   yr: Returns the last two digits of the year.
-   month: Returns the full month name.
-   mon: Returns the short month name.
-   day: Returns the full weekday name.
-   dy: Returns the short weekday name.
-   date: Returns the date of the month.
-   hours: Returns the hour of the date.
-   mins: Returns the minutes of the date.
-   secs: Returns the seconds of the date.

### Methods

-   format(mask = 'Y M D'): Format the date according to the provided mask.
-   getOrdinal(n): Returns the ordinal representation of a number.
-   when(): Provides a human-readable description of 'when' a date will occur relative to now.

Examples
--------

### Creating a Date Object

javascriptCopy code

`const dateObj = new D(2023, 4, 6);`

### Accessing Properties

javascriptCopy code

`console.log(dateObj.year);  // 2023
console.log(dateObj.yr);    // 23
console.log(dateObj.month); // May
console.log(dateObj.mon);   // May
console.log(dateObj.day);   // Thursday
console.log(dateObj.dy);    // Thu
console.log(dateObj.date);  // 6`

### Using Methods

1.  format()

javascriptCopy code

`console.log(dateObj.format('Y-M-D'));          // 2023-May-06
console.log(dateObj.format('D/M/y'));          // 06/May/23
console.log(dateObj.format('l, # M, Y'));      // Thursday, 6th May, 2023`

1.  getOrdinal()

javascriptCopy code

`console.log(dateObj.getOrdinal(1));    // 1st
console.log(dateObj.getOrdinal(22));   // 22nd`

1.  when()

javascriptCopy code

`const pastDate = new D(2021, 1, 1);
console.log(pastDate.when());   // Outputs: 2 years, 8 months ago (example)

const futureDate = new D(2024, 1, 1);
console.log(futureDate.when()); // Outputs: 4 months from now (example)`

Contributing
------------

Contributions are always welcome! Please see the [contributing guidelines](https://chat.openai.com/CONTRIBUTING.md) for more details.