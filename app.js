//DEPENDENCIES
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const util = require("util");
//jest require dependency added
const jest = require("jest");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// READFILE ASYNC DEPENDENCY
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// Write code to use inquirer to gather information about the development team members,
//FUNCTIONS
//GET USER INPUT ====== inquirer prompt
const teamMembers = [];
//HELPER FUNCTION newTeamMember
function newTeamMember(reply) {
  return inquirer
    .prompt([
      {
        type: "confirm",
        message: "Do you want to add another team member?",
        name: "continue",
      },
    ])
    .then(function (userConfirm) {
      if (userConfirm.continue === true) {
        userPrompt();
        //render HTML function here
      } else {
        console.log(teamMembers);
        combineFiles();
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

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
      if (reply.role === "Manager") {
        inquirer
          .prompt([
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
            {
              type: "input",
              message: "What is the office number of the manager?",
              name: "officeNumber",
            },
          ])
          .then(function (managerReply) {
            let newManager = new Manager(
              managerReply.name,
              managerReply.id,
              managerReply.email,
              managerReply.officeNumber
            );
            teamMembers.push(newManager);
            newTeamMember();
          });
      } else if (reply.role === "Engineer") {
        inquirer
          .prompt([
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
            {
              type: "input",
              message: "What is the Github username?",
              name: "github",
            },
          ])
          .then(function (engineerReply) {
            let newEngineer = new Engineer(
              engineerReply.name,
              engineerReply.id,
              engineerReply.email,
              engineerReply.github
            );
            teamMembers.push(newEngineer);
            newTeamMember();
          });
      } else if (reply.role === "Intern") {
        inquirer
          .prompt([
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
            {
              type: "input",
              message: "Which school did you attend?",
              name: "school",
            },
          ])
          .then(function (internReply) {
            let newIntern = new Intern(
              internReply.name,
              internReply.id,
              internReply.email,
              internReply.school
            );
            teamMembers.push(newIntern);
            newTeamMember();
          });
      }
    });
}
userPrompt();

//FUNCTION TO READ ALL FILES AND WRITE TO RENDER HTML

function combineFiles() {
  let teamRender = render(teamMembers);
  //read each employee type file
  try {
    writeFileAsync(outputPath, teamRender);
  } catch (err) {
    console.log;
  }
}

// let newUserData = generateHTML(response);
// writeFileAsync("user-data.html", newUserData);

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
