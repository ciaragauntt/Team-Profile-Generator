const Intern = require('../lib/Intern');

// create Intern Object
test('Creating intern object', () => {
    const testSchool = 'UofU';
    const intern = new Intern('Ciara', 60, 'ci.gauntt@gmail.com', testSchool);
    expect(intern.school).toBe(testSchool);
});

//gets school from getSchool()
test('Gets school from getSchool method', () => {
    const testSchool ='UofU';
    const intern = new Intern('Ciara', 60, 'ci.gauntt@gmail.com', testSchool);
    expect(intern.getSchool()).toBe(testSchool);
});
// gets role from getRole()
test('Gets role from getRole method', () => {
    const returnrole = 'Intern';
    const intern = new Intern('Ciara', 60, 'ci.gauntt@gmail.com', 'UofU');
    expect(intern.getRole()).toBe(returnrole);
});