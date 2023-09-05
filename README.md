<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

*   [D][1]
    *   [Examples][2]
    *   [getOrdinal][3]
        *   [Parameters][4]
        *   [Examples][5]
    *   [format][6]
        *   [Parameters][7]
        *   [Examples][8]
    *   [when][9]
        *   [Examples][10]
*   [year][11]
    *   [Examples][12]
*   [yr][13]
    *   [Examples][14]
*   [month][15]
    *   [Examples][16]
*   [mon][17]
    *   [Examples][18]
*   [day][19]
    *   [Examples][20]
*   [dy][21]
    *   [Examples][22]
*   [date][23]
    *   [Examples][24]
*   [hours][25]
    *   [Examples][26]
*   [mins][27]
    *   [Examples][28]
*   [secs][29]
    *   [Examples][30]

## D

Custom Date Library Class

### Examples

```javascript
const myDate = new D(2023, 4, 6);
console.log(myDate.year);  // Outputs: 2023
```

### getOrdinal

#### Parameters

*   `n` **[number][31]** The number to be converted.

#### Examples

```javascript
console.log(myDate.getOrdinal(22));  // Outputs: 22nd
```

Returns **[string][32]** Number with its ordinal e.g., 1st, 2nd, 3rd...

### format

#### Parameters

*   `mask` **[string][32]** Formatting mask. (optional, default `'Y M D'`)

#### Examples

```javascript
console.log(myDate.format('M D, Y'));  // Outputs: May 6, 2023
```

Returns **[string][32]** Formatted date string.

### when

#### Examples

```javascript
console.log(myDate.when());  // Outputs: 2 days ago (depends on the current date and the date you provided)
```

Returns **[string][32]** Description of when the date occurs e.g., '2 days ago', '3 hours from now'.

## year

### Examples

```javascript
console.log(myDate.year);  // Outputs: 2023
```

Returns **[number][31]** Full year e.g., 2021

## yr

### Examples

```javascript
console.log(myDate.yr);  // Outputs: 23
```

Returns **[string][32]** Last two digits of year e.g., 21 for 2021

## month

### Examples

```javascript
console.log(myDate.month);  // Outputs: May
```

Returns **[string][32]** Full month name e.g., January

## mon

### Examples

```javascript
console.log(myDate.mon);  // Outputs: May
```

Returns **[string][32]** Short month name e.g., Jan

## day

### Examples

```javascript
console.log(myDate.day);  // Outputs: Thursday
```

Returns **[string][32]** Full weekday name e.g., Monday

## dy

### Examples

```javascript
console.log(myDate.dy);  // Outputs: Thu
```

Returns **[string][32]** Short weekday name e.g., Mon

## date

### Examples

```javascript
console.log(myDate.date);  // Outputs: 6
```

Returns **[number][31]** Date of the month

## hours

### Examples

```javascript
console.log(myDate.hours);  // Outputs: 0 (depends on the time you provided or current time)
```

Returns **[number][31]** Hour of the date

## mins

### Examples

```javascript
console.log(myDate.mins);  // Outputs: 0 (depends on the time you provided or current time)
```

Returns **[number][31]** Minutes of the date

## secs

### Examples

```javascript
console.log(myDate.secs);  // Outputs: 0 (depends on the time you provided or current time)
```

Returns **[number][31]** Seconds of the date

[1]: #d

[2]: #examples

[3]: #getordinal

[4]: #parameters

[5]: #examples-1

[6]: #format

[7]: #parameters-1

[8]: #examples-2

[9]: #when

[10]: #examples-3

[11]: #year

[12]: #examples-4

[13]: #yr

[14]: #examples-5

[15]: #month

[16]: #examples-6

[17]: #mon

[18]: #examples-7

[19]: #day

[20]: #examples-8

[21]: #dy

[22]: #examples-9

[23]: #date

[24]: #examples-10

[25]: #hours

[26]: #examples-11

[27]: #mins

[28]: #examples-12

[29]: #secs

[30]: #examples-13

[31]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[32]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
