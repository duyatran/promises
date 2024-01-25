const fs = require('fs')

fs.promises.readFile("./hello.txt", "utf-8")
  .then(helloData => {
    // extract second file name from second line
    const nameFile = helloData.split('\n')[1]; // "name.txt";
    return fs.promises.readFile(nameFile, "utf-8");
  })
  .then(nameData => {
    console.log(nameData);
  })
  .catch(err => {
    console.log(err);
  })


