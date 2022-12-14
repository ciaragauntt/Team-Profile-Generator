
const teamProfile = team => {
   //create the html for the manager
    const createManager = manager => {
        return`
        <div class="col-4 mt-4">
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title">${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-item">${manager.getId()}</li>
                    <li class="list-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-item">Office Number:${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
    </div>`;
    };
    
    //create the html for the engineers
    const createEngineer = engineer => {
        return`
        <div class="col-4 mt-4">
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h3 class="card-title">${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-item">${engineer.getId()}</li>
                    <li class="list-item">Email: <a href="${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-item">Github:<a href="${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
    </div>`;
    };

    //create html for interns
    const createIntern = intern => {
        return`
        <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h2 class="card-title">${intern.getName()}</h2>
                <h3 class="card-title">${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-item">${intern.getId()}</li>
                    <li class="list-item">Email: <a href="${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-item">School:${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
    </div>`;
    };
    const generateHtml = [];

    generateHtml.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => createManager(manager))
        );
    generateHtml.push(team
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => createEngineer(engineer))
        );
    generateHtml.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => createIntern(intern))
        );  

    return generateHtml.join("");
};



module.exports = team => {

    return`
    <!DOCTYPE html>
<html lang="'en">
    <head>
        <meta charset="UTF-8">
        <title> Team Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-card">
                    <!--This is where the cards are going to show up!-->
                    ${teamProfile(team)}
                    </div>
                </div>
            </div>
        </body>
    </html>`;
};
