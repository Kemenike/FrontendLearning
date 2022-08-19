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

console.log('************ Loops ************')
let count = 0
while (count <= 99) {
	count = count +1 
	console.log(count)
}

console.log("FizzBuzz JavaScript")

for (let i = 1; i < 21; i++){
	if(i%3 === 0 && i%5 === 0)
	{
		console.log(`${i} => FizzBuzz`)
	} else if(i%3 === 0) {
		console.log(`${i} => Fizz`)
	} else if (i%5 === 0) {
		console.log(`${i} => Buzz`)
	} else {
		console.log(`${i} => ${i}`)
	}
}

let container = "supercalifragilisticexpialidocious"

for (i = 0; i < container.length; i++){
	console.log(container[i])
}

console.log('************ Functions ************')

function welcome(fName, lName) {
	if(lName) {
		console.log(`Welcome ${fName} ${lName}`)
	} else {
		console.log(`Welcome ${fName}`)
	}
}

welcome("Kanayo")
welcome("Chris")
welcome("Donald")
welcome("Ruby Smith")

function cToF(celsius) {
	return celsius * 1.8 + 32
}

console.log(cToF(45))
console.log(cToF(0))
console.log(cToF(-41))

const fToC = (fahrenheit) => {
	return (fahrenheit - 32) / 1.8
}

console.log(fToC(113))
console.log(fToC(32))
console.log(fToC(-41.8))

console.log('************ Arrays ************')

let someArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 1000]

console.log(someArr[3])

//Adding elements
someArr.push(51)

//Filter Method 
let evenArray = someArr.filter((element) => {
	if(element%2 === 0) {
		return true
	}
})
console.log(evenArray)
evenArray = []

//This does the same as line 125 
	//You do not need the () around just one variable
	//The callback function is just looking for a true or false; so lets return that. 
evenArray = someArr.filter(element =>!(element%2))
console.log(evenArray)

let grades = ['A+', 'B', 'A', 'FAIL', 'C', 'FAIL']

grades = grades.filter(i => (i !== 'FAIL'))
console.log(grades)

grades = ['A+', 'B', 'A', 'FAIL', 'C', 'FAIL']

for (const i of grades) {
	if (grades[i] !== 'FAIL') {
		console.log(i)
	}
}

someArr = [1, 4, 9, 16]

//Maps - Changes that element to what is returned.
	//Uses callback methods
let newArray = someArr.map(() => undefined)
console.log(newArray) // Should be an array of 4 elements, all undefined.

let dollarValue = [1, 5, 10, 3]
let centValue = dollarValue.map(element => element*100)

console.log(dollarValue)
console.log(centValue)


//Same thing with a for loop
centValue = []
for (element of dollarValue) {
	centValue.push(element * 100)
}
console.log(dollarValue)
console.log(centValue)



console.log('************ Objects ************')

let user = {
	username: 'Kanayo',
	email: 'sometypeofemail@email.com',
	subscribed: true,
	discordID: 'fish#0001',
	iDNumbers: ["0358", "3902", "8439", "2183"]
}

console.log(user.email)
console.log(user.iDNumbers)

let userList = [
	{
		username: 'Kanayo',
		email: 'sometypeofemail@email.com',
		subscribed: true,
		discordID: 'fish#0001',
		password: 'password321',
		iDNumbers: ["0358", "3902", "8439", "2183"]
	}, 
	{
		username: 'JohnESmith',
		email: 'smith@email.com',
		subscribed: false,
		discordID: 'fish#0002',
		password: 'password123',
		iDNumbers: ["1235", "8526", "7349", "1874"]
	}
]
console.log(userList[1])

//Basic Login

function login(email, password) {
	for (i of userList) {
		if(i.email === email)
		{
			if(i.password === password){
				console.log(i)
			} else {
				console.log("Incorrect Password")
			}
			return
		}
	}
	console.log("No Email Found")

}

function register (newUser) {
	userList.push(newUser)
	console.log(`User: ${newUser.username} was added`)
}

login('sometypeofemail@email.com', 'password321')
login('smith@email.com', 'password123')
login('wrongemail@email.com', 'mypasswordisthebomb.com')
register({
	email: "Zen@email.com",
	username: "Zen",
	password: "goodPassword",
	subscribed: true,
	discordID: "notafish#0001"
})
login('Zen@email.com', 'goodPassword')

console.log('************ Document Object Model ************')

document.querySelector('.title').innerHTML = "Something Else"
document.querySelector(".title").style.fontSize = '16px'

function toggleRedMode() {
	document.querySelector('body').classList.toggle("red")
}
