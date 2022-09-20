const Manager = require('../lib/Manager');

test('Manager Object', () => {
    const manager = new Manager('Sarah', 12, 'sarah123@gmail.com', 8);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('Finds Employee Role', () => {
    const manager = new Manager('Sarah', 12, 'sarah123@gmail.com', 8);

    expect(manager.getRole()).toEqual("Manager");
});