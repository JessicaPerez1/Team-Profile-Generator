// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
//require employee.js
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.getSchool = function () {
      return this.school;
    };
  }
  getRole() {
    return "Intern";
  }
}
//Export the modules
module.exports = Intern;
