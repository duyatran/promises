const randomPromise = new Promise((resolve, reject) => {
  console.log("inside of randomPromise");
  const randNum = Math.random(); // randNum is 0 - 1

  if (randNum > 0.5) {
    console.log("Success:", randNum);
    resolve("SUCCESS"); // expected output
  } else {
    console.log("Failure:", randNum);
    reject("FAILURE");
  }
});

console.log("end of promise definition");

randomPromise
  .then(msg => console.log("then: ", msg))
  .catch(error => console.log("error: ", error))


