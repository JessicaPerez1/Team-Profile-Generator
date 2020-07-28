// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
//require employee.js
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.getOfficeNumber = function () {
      return officeNumber;
    };
  }

  getRole() {
    return "Manager";
  }
}
//Export the modules
module.exports = Manager;
