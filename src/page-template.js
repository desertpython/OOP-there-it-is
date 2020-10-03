const makeTeam = team => {

    const makeManager = manager => {
        return `
        <div class = "cardEmploy">
        <div class = "cardHeader">
        <h2 class = "cardTitle">${manager.getName()}</h2>
        </div>
        </div>`
    }
    const html = [];
    
    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
        );
    }