class D {
    constructor(...args){
        this._date = new Date(...args)
    }
}

// With no parameters: 
const a = new D()
// Create a date from a string (single parameter)
const b = new D('9/26/1965') 
// Create a date from some numbers (list of parameters)
const c = new D(1970, 1, 1, 0, 0, 0)
// With a Date
const d = new D(new Date())

console.log(a)
console.log(b)
console.log(c)
console.log(d)
