const Employee = require('../lib/Employee');

// creates new employee as an object
test("Creating a new employee.", () => {
    const newEmployee = new Employee();
    expect(typeof(newEmployee)).toBe('object');
});

//gets Id from getId()
test("Testing getId method", () => {
    const Id = 60;
    const newEmployee = new Employee('Ciara', Id);
    expect(newEmployee.getId()).toBe(Id);
});

//gets name from getName()
test("Testing getName method", () => {
    const name = 'Ciara';
    const newEmployee = new Employee(name);
    expect(newEmployee.getName()).toBe(name);
});

//gets email from getEmail()
test("Testing getEmail method", () => {
    const email = 'ci.gauntt@gmail.com';
    const newEmployee = new Employee('Ciara', 60, email);
    expect(newEmployee.getEmail()).toBe(email);
});

//gets role from getRole()
test("Testing getRole method", () => {
    const role = 'Employee';
    const newEmployee = new Employee('Ciara', 60, 'ci.gauntt@gmail.com');
    expect(newEmployee.getRole()).toBe(role);
});
