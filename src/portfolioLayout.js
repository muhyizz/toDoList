import { Portfolio } from "./portfolio";

export function loadDivPortfolio(){

    const leftPanel = document.getElementById('left');

    //Input Panel for portfolio;
    const leftInput = document.createElement('div');
    leftInput.setAttribute('id','leftInput');
    leftInput.innerHTML = `
        <div>
            <button id="addProject">Add Project</button>
            <button id="removeProject">Remove Project</button>
        </div>
    `;

    const leftDisplay = document.createElement('div');
    leftDisplay.setAttribute('id','leftDisplay');

    leftPanel.appendChild(leftInput);
}

export function populateDivPortfolio(portFolioName){
    let leftPanel = document.getElementById('left');
    let leftPanelProject = document.createElement('div');
    leftPanelProject.setAttribute('id','leftPanelProject');

    let renders = portFolioName.mapProjectName();

    renders.forEach(projectName =>{
        let projectDiv = document.createElement('div');
        projectDiv.classList.add('projectList')
        projectDiv.innerText = projectName;

        let projectCheckBox = document.createElement('input');
        projectCheckBox.type = 'checkbox';

        leftPanelProject.appendChild(projectDiv);
        leftPanelProject.appendChild(projectCheckBox);
    });

    leftPanel.appendChild(leftPanelProject);
}

export function oneAdditionProject(portFolioName){
    let leftPanel = document.getElementById('left');
    let leftPanelProject = document.getElementById('leftPanelProject')

    let projectDiv = document.createElement('div');
    projectDiv.classList.add('projectList')
    let renders = portFolioName.mapProjectName();
    let projectName = renders.slice(-1);
    projectDiv.innerText = projectName;

    let projectCheckBox = document.createElement('input');
    projectCheckBox.type = 'checkbox';

    leftPanelProject.appendChild(projectDiv);
    leftPanelProject.appendChild(projectCheckBox);
    leftPanel.appendChild(leftPanelProject);
}
