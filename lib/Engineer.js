// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
//require employee.js
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.getGithub = function () {
      return this.github;
    };
  }
  getRole() {
    return "Engineer";
  }
}
//Export the modules
module.exports = Engineer;
