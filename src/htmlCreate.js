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
                    <li class="list-item">Office Number: ${manager.officeNumber()}</li>
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

}