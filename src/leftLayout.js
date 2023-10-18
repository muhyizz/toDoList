import { Portfolio } from "./portfolio";

export function loadDivPortfolio(){

    const leftPanel = document.getElementById('left');

    //Input Panel for portfolio;
    const leftInput = document.createElement('div');
    leftInput.setAttribute('id','leftInput');

    const addProjectBtn = document.createElement('button');
    addProjectBtn.setAttribute('id','addProject');
    addProjectBtn.innerText = "Add Project"

    leftInput.appendChild(addProjectBtn);

    leftPanel.appendChild(leftInput);
}

export function populateDivPortfolio(portFolioName){
    let leftPanel = document.getElementById('left');
    let leftPanelProject = document.getElementById('leftPanelProject')
  
    if (leftPanelProject === null){
        leftPanelProject = document.createElement('div');
        leftPanelProject.setAttribute('id','leftPanelProject');
        console.log('its null')
    } else {
        leftPanelProject.innerHTML = '';
        console.log('its not null')
    }

    let renders = portFolioName.mapProjectName();

    renders.forEach(projectName =>{
        let projectDiv = document.createElement('div');
        projectDiv.classList.add('projectDiv');

        let projectNameDiv = document.createElement('div');
        projectNameDiv.classList.add('projectList')
        projectNameDiv.innerText = projectName;

        let projectNameBtn = document.createElement('div');
        projectNameBtn.classList.add('projectNameBtn')

        let projectEdit = document.createElement('div');
        projectEdit.classList.add('editProject');
        projectEdit.innerText = 'E';

        let projectRemove = document.createElement('div');
        projectRemove.classList.add('removeProject');
        projectRemove.innerText = 'X';

        projectNameBtn.appendChild(projectEdit);
        projectNameBtn.appendChild(projectRemove);

        projectDiv.appendChild(projectNameDiv);
        projectDiv.appendChild(projectNameBtn);

        leftPanelProject.appendChild(projectDiv);
    });

    leftPanel.appendChild(leftPanelProject);
}

export function oneAdditionProject(portFolioName){
    let leftPanelProject = document.getElementById('leftPanelProject')

    let projectDiv = document.createElement('div');
    projectDiv.classList.add('projectDiv');

    let projectNameDiv = document.createElement('div');
    projectNameDiv.classList.add('projectList')

    let renders = portFolioName.mapProjectName();
    let projectName = renders.slice(-1);
    projectNameDiv.innerText = projectName;

    let projectNameBtn = document.createElement('div');
    projectNameBtn.classList.add('projectNameBtn')

    let projectEdit = document.createElement('div');
    projectEdit.classList.add('editProject');
    projectEdit.innerText = 'E';

    let projectRemove = document.createElement('div');
    projectRemove.classList.add('removeProject');
    projectRemove.innerText = 'X';

    projectNameBtn.appendChild(projectEdit);
    projectNameBtn.appendChild(projectRemove);

    projectDiv.appendChild(projectNameDiv);
    projectDiv.appendChild(projectNameBtn);

    leftPanelProject.appendChild(projectDiv);
}
