const fs = require('fs');

fs.readFile("./hello.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  // extract second file name from second line
  const nameFile = data.split('\n')[1]; // "name.txt"

  // read in that second file
  fs.readFile(nameFile, "utf-8", (err, nameData) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(nameData);
  })
})