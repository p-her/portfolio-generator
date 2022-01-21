
const fs = require("fs");
const generatePage = require('./src/page-template.js')
const profileDataArgs = process.argv.slice(2);
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];


// name = index 0, github = index 1 in profileDataArgs
const [name, github] = profileDataArgs; // (destructuring) same as the code above

const pageHTML = generatePage(name, github);






fs.writeFile('index.html', pageHTML, err => {
    if(err) throw new Error(err);

    console.log("Portfolio complete! Check out index.html to see the output!");
})