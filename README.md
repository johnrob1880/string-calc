# string-calc

Utililty function to calculate literal strings.

Perform addition, subtraction, multiplication, and division on numbers.
```js
let str = '1+2'
console.log(stringCalc(str)) // 3

str = '3-2';
console.log(stringCalc(str)) // 1

str = '2*2'
console.log(stringCalc(str)) // 4

str = '8/2'
console.log(stringCalc(str)) // 4
```

Add days to a date
```js
// expects date format to be YYYYMMDD.
let str = '20180101d+10';
console.log(stringCalc(str)) // 20180121
```

Subtract days from a date
```js
// expects date format to be YYYYMMDD.
let str = '20180131d-30';
console.log(stringCalc(str)) // 20180101
```

## License

[MIT](LICENSE).
