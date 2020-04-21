// Смотрите видео до конца и я объясню почему так
console.log([2] + [1] - [2]);

// Lifehack #1
const emptyArray = Array.from({length: 10});

// Lifehack #2
const someArray = [1, 2, 2, 2, 7, 4, 2, 1, 4, 7, 44, 5, 1, 2, 89, 9, 8];
const withoutDoublicates = [...new Set(someArray)];

// Lifehack #3
// […array.slice(0, index - 1), …array.slice(index)]
const excludeElement = [...someArray.slice(0, 4), ...someArray.slice(5)];

// Lifehack #4
const lastElement1 = someArray.slice(-1)[0];
const lastElement2 = someArray[someArray.length - 1];

// Lifehack #5
someArray.length = 5;