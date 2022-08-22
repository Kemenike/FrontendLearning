const a = 7;
const b = 9;
const c = 5;
const d = 12; 
const e = 11; 
const f = 6; 

function calcRemain(x, y) {
    return (x%y);
}

function isOdd(x) {
    return x % 2 !== 0;
}

function booleanInt(x) {
    if(isOdd(x)) {
        return -1
    } else {
        return 1
    }
}

function loginAndSubed (logStatus, subStatus) {
    return (logStatus === "LOGGED_IN" && subStatus === "SUBSCRIBED");
}
function loginOrSubed (logStatus, subStatus) {
    return (logStatus === "LOGGED_IN" || subStatus === "SUBSCRIBED");
}



console.log(`Calculating the remainder of ${a} and ${b}: ${calcRemain(a,b)}`);
console.log(`Is the number ${c} Odd?: ${isOdd(c)}`);
console.log(`Is the number ${d} Odd?: ${isOdd(d)}`);
console.log(`Boolean Integer Result for ${e} is: ${booleanInt(e)}`)
console.log(`Boolean Integer Result for ${f} is: ${booleanInt(f)}`)
console.log(`Logged In and Subscribed: ${loginAndSubed("LOGGED_IN", "not")}`);
console.log(`Logged In or Subscribed: ${loginOrSubed("LOGGED_IN", "not")}`);