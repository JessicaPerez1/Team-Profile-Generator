// TODO: Write code to define and export the Employee class
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model
//Employee constructor to implement name, email and id for al employees
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  //return the name
  getName() {
    return this.name;
  }
  //return the id
  getId() {
    return this.id;
  }
  //return the email
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
