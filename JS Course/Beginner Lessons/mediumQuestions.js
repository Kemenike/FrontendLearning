const { reverse } = require("dns");
const { stringify } = require("querystring");

function filterFalsy(value1, value2) {
    if(!value1) {
        return value1;
    } else {
        return value2;
    }
}

function arrSum(arr) {
    let sum = 0;
    for (element of arr) {
        sum = sum+element;
    }
        return sum;
}

function progressiveSum(x) {
    let sum = 0;
    for (let i = 0; i <= x; i++){
        sum = i + sum;
    }
    return sum;
}

function formatTime(x) {
    let m = 0;
    while (x >= 60) {
        m++;
        x = x - 60;
    }
    return String(m).padStart(2, '0') +":"+ String(x).padStart(2,'0')
}

function getMax(arr) {
    let maxElem = arr[0];
    for(element of arr) {
                
        if (element > maxElem) {
            maxElem = element;
        }
    }
    return maxElem;
}

function reverseString(str) {
    let stringContainer = '';
    str = String(str)
    for(let i = str.length-1; i >= 0; i--){
        stringContainer = stringContainer + str[i];
    }
    return String(stringContainer);
}

function convertToZero (arr) {
    return arr.map(()=> 0);
}

function filterApple (arr) {
    return arr.filter(element => {return element !== "Apple"})
}

function filterFalsyArr(arr) {
    return arr.filter(element => !!element)
}

function convertBoolean(arr) {
    return arr.map(element => {
        return !!element;
    });
}

console.log(`Filter Flasy (0, 500): ${filterFalsy(0, 500)}`)
console.log(`Filter Flasy (false, 500): ${filterFalsy(false, 500)}`)
console.log(`Filter Flasy (true, 'Dog'): ${filterFalsy(true, 'Dog')}`)
console.log(`Sum of all elements of array [2,2,2] : ${arrSum([2,2,2])}`)
console.log(`Sum of all elements of array [200,100,500]: ${arrSum([200,100,500])}`)
console.log(`Sum of all elements of array [0,-5,-10] : ${arrSum([0,-5,-10])}`)
console.log(`Progressive Summation (3): ${progressiveSum(3)}`)
console.log(`Progressive Summation (4): ${progressiveSum(4)}`)
console.log(`Progressive Summation (600): ${progressiveSum(600)}`)
console.log(`Format Time 66s: ${formatTime(66)}`)
console.log(`Format Time 50s: ${formatTime(50)}`)
console.log(`Format Time 300s: ${formatTime(300)}`)
console.log(`Max Element [5, 100, 0]: ${getMax([5, 100, 0])}`)
console.log(`Max Element [12, 10, -20]: ${getMax([12, 10, -20])}`)
console.log(`Max Element [-300, -100, -200]: ${getMax([-300, -100, -200])}`)
console.log(`Reverse The String "abc": "${reverseString("abc")}"`)
console.log(`Reverse The String "Kanayo": "${reverseString("Kanayo")}"`)
console.log(`Reverse The String "This is Cool!": "${reverseString("This is Cool!")}"`)
console.log(`Convert to Zeros [5, 100, 0]: ${convertToZero([5, 100, 0])}`);
console.log(`Convert to Zeros [12]: ${convertToZero([12])}`);
console.log(`Convert to Zeros [1,2,3,4,5]: ${convertToZero([1,2,3,4,5])}`);
console.log(`Filter "Apple" From the arrays ['Banana', 'Apple', 'Orange', 'Apple']: ${filterApple(['Banana', 'Apple', 'Orange', 'Apple'])}`);
console.log(`Filter "Apple" From the arrays ['Tomato', 'Orange', 'Banana']: ${filterApple(['Tomato', 'Orange', 'Banana'])}`);
console.log(`Filter "Apple" From the arrays ['Banana', 'Orange', 'Apple']: ${filterApple(['Banana', 'Orange', 'Apple'])}`);
console.log(`Filter out Falsy Array ['', [], 0, null, undefined, "0"]: ${filterFalsyArr(['', [], 0, null, undefined, "0"])}`);
console.log(`Filter out Falsy Array ['Tomato', 'Orange', 'Apple', false]: ${filterFalsyArr(['Tomato', 'Orange', 'Apple', false])}`);
console.log(`Filter out Falsy Array ['Banana', 'Orange', 'Apple']: ${filterFalsyArr(['Banana', 'Orange', 'Apple'])}`);
console.log(`Truthy = true; Falsy = false [500, 0, "Kanayo", '', []]: ${convertBoolean([500, 0, "Kanayo", "", []])}`)