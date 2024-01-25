// Callbacks can be used in sync. way
const sayGoodMorning = () => {
  console.log("Good morning");
}

const sayGoodAfternoon = () => {
  console.log("Good afternoon");
}

const repeatGreeting = (numberOfTimes, greeting) => {
  for (let i = 0; i < numberOfTimes; ++i) {
    greeting()
  }
}

// repeatGreeting(10, sayGoodMorning);
// repeatGreeting(10, sayGoodAfternoon);

// Callbacks allow us to write async code
// or callbacks can be used in a async flow
// setTimeout(sayGoodMorning, 1000);
// console.log("Having brunch");
// setTimeout(sayGoodAfternoon, 1000);

// fs example, reading a file
const fs = require('fs'); // filesystem

// const content = fs.readFileSync("./hello.txt", "utf-8"); // sync variant
// console.log(content);

const contentAsync = fs.readFile("./hello.txt", "utf-8", (err, data) => {
  console.log("data", data);

}); // async variant

console.log("after async readFile")
console.log("contentAsync", contentAsync);