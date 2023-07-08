// Q 1
console.log("har\"".length)

// Q 2
// Includes()
// includes() returns true if a string contains a specified string.
let str = "You are Great and Awesome."
console.log(str.includes("Great"))
// otherwise it will return false
console.log(str.includes("good"))

// startsWith()
// The startsWith() method returns true if a string starts with a specified string.
console.log(str.startsWith("You"))
// otherwise it will return false
console.log(str.startsWith("I"))

// endsWith()
// The endsWith() method returns true if a string ends with a specified string.
console.log(str.endsWith("Awesome."))
// otherwise it will return false
console.log(str.endsWith("Great"))


// Q 3
console.log(str.toLowerCase())

// Q 4
let s = "Please give me Rs. 1000"
let e = s.slice(15)
console.log(e)

// Q 5
str[4] = 4
console.log(str)
// letter is not changed, because string is immutable
