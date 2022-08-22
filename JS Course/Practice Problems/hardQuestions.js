function showRating (value) {
    let arr = [];
    while (value > 0) {
        if (value >= 1) {
            arr.push("*");
            value--;
        } else if (value > 0 && value < 1) {
            arr.push(".");
            value = 0;
        } 
    }
    return arr.join(" ");
}

function sortLowToHigh(arr) {
    return arr.sort((a, b) => a - b);
  
}

function sortHighToLow(objArr) {
    return objArr.sort((a, b) => { return a.price - b.price; })
}

async function getPosts(uid) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await promise.json()
    const data = result.filter(element => element.userId === uid);
    console.log(data);
}

async function incompleteTODO(){
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
    const result = await promise.json();
    const incompleteTasks = result.filter(element => !element.completed).slice(0, 6);
    console.log(incompleteTasks)
}

console.log(`Show Rating (3): "${showRating(3)}"`);
console.log(`Show Rating (4.5): "${showRating(4.5)}"`);
console.log(`Show Rating (0.5): "${showRating(0.5)}"`);
console.log(`Sort from Low to High [20, 40, 10, 30, 50, 10]: ${sortLowToHigh([20, 40, 10, 30, 50, 10])}`);
console.log(`Sort from Low to High [5, 10, 0, -5]: ${sortLowToHigh([5, 10, 0, -5])}`);
console.log(`Sort from Low to High [3, 2, 1, 0]: ${sortLowToHigh([3, 2, 1, 0])}`);

let arrObj= [
    {id: 1, price: 50},
    {id: 2, price: 30},
    {id: 3, price: 60},
    {id: 4, price: 10},
]

console.info(`Sorting Objects by one value high to low. : ${JSON.stringify(sortHighToLow(arrObj))}`)
console.log(getPosts(4));
console.log(incompleteTODO());