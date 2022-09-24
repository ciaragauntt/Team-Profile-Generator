const Manager = require('../lib/Manager');

//creating manager as an object
test('Creates manager object', () => {
    const manager = new Manager('Ciara', 60, 'ci.gauntt@gmail.com', 4);
    expect(manager.officeNumber).toBe(Number);
});

//gets officeNumber
test('Gets office number value', () => {
    const testNumber = 4;
    const manager = new Manager('Ciara', 50, 'ci.gauntt@gmail.com', testNumber);
    expect(manager.officeNumber()).toBe(testNumber);
});

//gets role
test('Gets role value', () => {
    const role = 'Manager';
    const manager = new Manager('Ciara', 60, 'ci.gauntt@gmail.com', 4);
    expect(manager.getRole()).toBe(role);
});