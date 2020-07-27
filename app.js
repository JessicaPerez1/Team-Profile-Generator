//DEPENDENCIES
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
//jest require dependency added
const jest = require("jest");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// READFILE ASYNC DEPENDENCY
// const readFileAsync = jest.promisify(fs.readFile);

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// Write code to use inquirer to gather information about the development team members,
//FUNCTIONS
//GET USER INPUT ====== inquirer prompt
function userPrompt(response) {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "What type of team member would you like to add?",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then(function (reply) {
      if (reply.role === "Manager" || "Engineer" || "Intern") {
        inquirer.prompt([
          {
            type: "input",
            message: "What is the name of the team member?",
            name: "name",
          },
          {
            type: "input",
            message: "What is the id of the team member?",
            name: "id",
          },
          {
            type: "input",
            message: "What is the email of the team member?",
            name: "email",
          },
        ]);
      }
      if (reply.role === "Manager") {
        inquirer.prompt([
          {
            type: "input",
            message: "What is the office number of the manager?",
            name: "office",
          },
        ]);
      }
      if (reply.role === "Engineer") {
        inquirer.prompt([
          {
            type: "input",
            message: "What is the Github user name of the engineer?",
            name: "github",
          },
        ]);
      } else if (reply.role === "Intern") {
        inquirer.prompt([
          {
            type: "input",
            message: "What is the school attended by the intern?",
            name: "school",
          },
        ]);
      }
    });
}
async function init() {
  const response = await inquirer.prompt(questions);
  console.log(response);
  //if answer to first question is "Manager" then go to questions Manager
}
init();
// let newUserData = generateHTML(response);
// writeFileAsync("user-data.html", newUserData);

// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
