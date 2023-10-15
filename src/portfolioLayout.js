import { Portfolio } from "./portfolio";

export function loadDivPortfolio(){

    const leftPanel = document.getElementById('left');

    //Input Panel for portfolio;
    const leftInput = document.createElement('div');
    leftInput.setAttribute('id','leftInput');
    leftInput.innerHTML = `
        <div>
            <form>
                <label for = 'projectName'>New Project :</label>
                <input type = 'text' id = 'projectName' placeholder = 'new project name' required>
                <button type="submit" id="add-project">Add Project</button>
                <button type="submit" id="remove-project">Remove Project</button>
            </form>
        </div>
    `;

    const leftDisplay = document.createElement('div');
    leftDisplay.setAttribute('id','leftDisplay');

    leftPanel.appendChild(leftInput);
}

export function populateDivPortfolio(portFolioName){
    let leftPanel = document.getElementById('left');
    let renders = portFolioName.mapProjectName();
    
    renders.forEach(projectName =>{
        let projectDiv = document.createElement('div');
        projectDiv.innerText = projectName;
        leftPanel.appendChild(projectDiv);
    });
}
