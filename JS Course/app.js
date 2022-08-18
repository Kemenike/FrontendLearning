console.log("************ Variables and Data Types ************")
console.log(`hello world`)
console.log("hello world")
console.log('hello world')

let firstName = "Kanayo"
let lastName = "Emenike"

let bool = firstName == "Kanayo"
console.log("Bool firstName == \"Kanayo\" is",bool)

bool = 1 == "1"
console.log("Bool 1 == \"1\" is",bool)
bool = 1 === "1"
console.log("Bool 1 === \"1\" is",bool)

console.log('************ Conditionals ************')

let subscribed = true
let loggedIn = false

console.log("subscribed = " + subscribed)
console.log(`loggedIn = ${loggedIn}`)

if (subscribed === true && loggedIn === true) {
	console.log('show video')
}
else if (loggedIn === true) {
	console.log('User must upgrade.')
}
else {
	console.log('User must log in')
}

console.log('************ Logic Operators ************')

let cash = 50
let price = 40
let isStoreOpen = false

if (cash >= price && !isStoreOpen) {
    console.log('print reciept')
}

console.log('************ Ternary Operators ************')

let hot = false
console.log(hot ? "hot" : "cold")

cash = 50
price = 40
isStoreOpen = true

console.log(cash > price && isStoreOpen ? "Printing Reciept" : "Couldn't Buy Product")

57:17