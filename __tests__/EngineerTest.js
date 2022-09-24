const Engineer = require('../lib/Engineer');

// creating engineer object
test('Creating engineer object', () => {
    const Github = 'cicigauntt';
    const engineer = new Engineer('Ciara', 60, 'ci.gauntt@gmail.com', Github);
    expect(engineer.github).toBe(Github)
});

//gets github from getGithub()
test('Gets github value', () => {
    const Github = 'cicigauntt';
    const engineer = new Engineer('Ciara', 60, 'ci.gauntt@gmail.com', Github);
    expect(engineer.getGithub()).toBe(Github);
});

//gets Role from getRole()
test('Gets role value', () => {
    const role = 'Engineer';
    const engineer = new Engineer('Ciara', 60, 'ci.gauntt@gmail.com', 'cicigauntt');
    expect(engineer.getRole()).toBe(role);
});