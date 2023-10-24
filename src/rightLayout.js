import { Project } from "./project";
import { Portfolio } from "./portfolio";
import { Todo } from "./todo";
import {format} from 'date-fns'
import parseISO from "date-fns/parseISO";

//Loads the layout for additional project

export const onLoadRight = (portfolio) =>{
    const right = document.getElementById('right');
    right.innerHTML='';
    const welcomePage = document.createElement('div');
    welcomePage.innerText = "Summary Dashboard";
    welcomePage.classList.add('dashboardHeader')
    

    let rightPanelProject = document.getElementById('rightPanelProject')
  
    if (rightPanelProject === null){
        rightPanelProject = document.createElement('div');
        rightPanelProject.setAttribute('id','rightPanelProject');
    } else {
        rightPanelProject.innerHTML = '';
    }

    let tableDiv = document.createElement('div');
    tableDiv.innerHTML = `
    <table id="main-table">
        <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Due Date</th>
                <th>Priority</th>
                <th># of To Do</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
    `

    const table = tableDiv.querySelector('tbody');

    while (table.rows.length > 1){
        table.deleteRow(1);
    }

    portfolio.array.forEach((project)=>{
        const row = table.insertRow(-1);
        row.classList.add('table-row');

        const titleCell = row.insertCell(0);
        const descriptionCell = row.insertCell(1);
        const dueDateCell = row.insertCell(2);
        const priorityCell = row.insertCell(3);
        const toDoCell = row.insertCell(4);

        titleCell.innerText = project.title;
        descriptionCell.innerText = project.description;
        dueDateCell.innerText = project.dueDate;
        priorityCell.innerText = project.priority;
        toDoCell.innerText = project.arr.length;
    })

    rightPanelProject.appendChild(tableDiv);
    right.appendChild(welcomePage);
    right.appendChild(rightPanelProject);
};

export const loadInputProject = () => {
    const right = document.getElementById('right');
    right.innerHTML = '';
    const rightProjectInput = document.createElement('div');
    rightProjectInput.setAttribute('id','rightProjectInput');

    let form = document.createElement('form');
    form.setAttribute('id','inputForm');

    let formContainer = document.createElement('div');
    formContainer.setAttribute('id','formContainer');

    let labelTitle = document.createElement('label');
    labelTitle.htmlFor = 'title';
    labelTitle.textContent = 'Title: '

    let inputTitle = document.createElement('input');
    inputTitle.type = 'text';
    inputTitle.id = 'title'
    inputTitle.placeholder = 'Title of the project';
    inputTitle.required = true;

    let labelDescription = document.createElement('label');
    labelDescription.htmlFor = 'description';
    labelDescription.textContent = 'Description: '

    let inputDescription = document.createElement('input');
    inputDescription.type = 'text';
    inputDescription.id = 'description'
    inputDescription.placeholder = 'Project Description';
    inputDescription.required = true;

    let labelDueDate = document.createElement('label');
    labelDueDate.htmlFor = 'dueDate';
    labelDueDate.textContent = 'Due Date: '

    let inputDueDate = document.createElement('input');
    inputDueDate.type = 'date';
    inputDueDate.id = 'dueDate'
    inputDueDate.placeholder = 'MM/DD/YYYY';
    inputDueDate.required = true;

    let labelPriority = document.createElement('label');
    labelPriority.htmlFor = 'priority';
    labelPriority.textContent = 'Choose a priority:';

    let selectPriority = document.createElement('select');
    selectPriority.id = 'priority';
    selectPriority.name = 'priority';
    selectPriority.required = true;  // Add the 'required' attribute

    const priorityOptions = ['Low', 'Medium', 'High'];

    priorityOptions.forEach(optionText => {
    let option = document.createElement('option');
    option.value = optionText;
    option.textContent = optionText;
    selectPriority.appendChild(option);
    });

    formContainer.appendChild(labelTitle);
    formContainer.appendChild(inputTitle);
    formContainer.appendChild(labelDescription);
    formContainer.appendChild(inputDescription);
    formContainer.appendChild(labelDueDate);
    formContainer.appendChild(inputDueDate);
    formContainer.appendChild(labelPriority);
    formContainer.appendChild(selectPriority);
    form.appendChild(formContainer);

    let submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.id = 'addProjectLine';
    submitButton.innerText = 'Add Project';

    let cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.id = 'cancelProjectLine';
    cancelButton.innerText = 'Cancel Project';

    form.appendChild(submitButton);
    form.appendChild(cancelButton);

    rightProjectInput.appendChild(form);

    right.appendChild(rightProjectInput);
}

//Receive the input and register it as a new project and append it to the portfolio

export const createProject = (event,portfolio) => {
    event.preventDefault();

    let titleInput = document.getElementById('title');
    let descriptionInput = document.getElementById('description');
    let dueDateInput = document.getElementById('dueDate');
    let priorityInput = document.getElementById('priority');
    
    let title = titleInput.value;
    let description = descriptionInput.value;
    let dueDate = dueDateInput.value;
    if (dueDate === null || dueDate === undefined || dueDate === "") {
        dueDate = 'N/A';
    } else {
        dueDate = format(parseISO(dueDateInput.value), 'dd/MM/yyyy');
    }

    let priority = priorityInput.value;
    
    title = new Project(title,description,dueDate,priority,[]);
    portfolio.addProject(title);
}

export const loadProjectEdit = () => {
    const right = document.getElementById('right');
    right.innerHTML = '';
    const rightProjectInput = document.createElement('div');
    rightProjectInput.setAttribute('id','rightProjectInput');

    let form = document.createElement('form');
    form.setAttribute('id','editForm');

    let formContainer = document.createElement('div');
    formContainer.setAttribute('id','editContainer');

    let labelTitle = document.createElement('label');
    labelTitle.htmlFor = 'title';
    labelTitle.textContent = 'Title: '

    let inputTitle = document.createElement('input');
    inputTitle.type = 'text';
    inputTitle.id = 'title'
    inputTitle.placeholder = 'Title of the project';
    inputTitle.required = true;

    let labelDescription = document.createElement('label');
    labelDescription.htmlFor = 'description';
    labelDescription.textContent = 'Description: '

    let inputDescription = document.createElement('input');
    inputDescription.type = 'text';
    inputDescription.id = 'description'
    inputDescription.placeholder = 'Project Description';
    inputDescription.required = true;

    let labelDueDate = document.createElement('label');
    labelDueDate.htmlFor = 'dueDate';
    labelDueDate.textContent = 'Due Date: '

    let inputDueDate = document.createElement('input');
    inputDueDate.type = 'date';
    inputDueDate.id = 'dueDate'
    inputDueDate.placeholder = 'MM/DD/YYYY';
    inputDueDate.required = true;

    let labelPriority = document.createElement('label');
    labelPriority.htmlFor = 'priority';
    labelPriority.textContent = 'Choose a priority:';

    let selectPriority = document.createElement('select');
    selectPriority.id = 'priority';
    selectPriority.name = 'priority';
    selectPriority.required = true;  // Add the 'required' attribute

    const priorityOptions = ['Low', 'Medium', 'High'];

    priorityOptions.forEach(optionText => {
    let option = document.createElement('option');
    option.value = optionText;
    option.textContent = optionText;
    selectPriority.appendChild(option);
    });

    formContainer.appendChild(labelTitle);
    formContainer.appendChild(inputTitle);
    formContainer.appendChild(labelDescription);
    formContainer.appendChild(inputDescription);
    formContainer.appendChild(labelDueDate);
    formContainer.appendChild(inputDueDate);
    formContainer.appendChild(labelPriority);
    formContainer.appendChild(selectPriority);
    form.appendChild(formContainer);

    let submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.id = 'editProjectLine';
    submitButton.innerText = 'Edit Project';

    let cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.id = 'cancelEditProjectLine';
    cancelButton.innerText = 'Cancel Edit';

    form.appendChild(submitButton);
    form.appendChild(cancelButton);

    rightProjectInput.appendChild(form);

    right.appendChild(rightProjectInput);
}

export const editProject = (event,projectTitle,portfolio) => {
    event.preventDefault();

    const projectName = projectTitle;
    const projectIndex = portfolio.array.findIndex(Project => Project.title === projectName);

    let titleInput = document.getElementById('title');
    let descriptionInput = document.getElementById('description');
    let dueDateInput = document.getElementById('dueDate');
    let priorityInput = document.getElementById('priority');

    let newTitle = titleInput.value;
    if (newTitle === ''){
        alert('require title');
        loadProjectEdit();
        return;
    }
    let newDescription = descriptionInput.value;
    let newDueDate = dueDateInput.value;
    if (newDueDate === null || newDueDate === undefined || newDueDate === "") {
        newDueDate = 'N/A';
    } else {
        newDueDate = format(parseISO(dueDateInput.value), 'dd/MM/yyyy');
    }

    let newPriority = priorityInput.value;

    portfolio.array[projectIndex].title = newTitle;   
    portfolio.array[projectIndex].description = newDescription;  
    portfolio.array[projectIndex].dueDate = newDueDate;  
    portfolio.array[projectIndex].priority = newPriority;  

}

export const displayProjectTask = (title,portfolio) => {
    const right = document.getElementById('right');
    right.innerHTML = '';
    right.innerHTML = `
        <div id = 'taskTab'>
            <button id="addTask">Add Task</button>
            <button id="backTask">Cancel</button>
        </div>
    `;
    const projectName = title;
    const projectIndex = portfolio.array.findIndex(Project => Project.title === projectName);
    const projectExtract = portfolio.array[projectIndex];
    const projectTask = projectExtract.arr;

    let taskCollection = document.createElement('div');
    taskCollection.setAttribute('id','taskCollection');

    projectTask.forEach(element => {
        let parentDiv = document.createElement('div');
        parentDiv.classList.add('taskDiv');

        let taskTitle = document.createElement('div');
        taskTitle.innerText = 'Tittle'

        let taskDiv = document.createElement('div');
        taskDiv.innerText = element.title;
        taskDiv.classList.add('taskTittle');

        let taskDescription = document.createElement('div');
        taskDescription.innerText = 'To do Description'

        let descriptionDiv = document.createElement('div');
        descriptionDiv.innerText = element.description;
        descriptionDiv.classList.add('descriptionDiv');

        let buttonDiv = document.createElement('div');
        buttonDiv.classList.add('taskButton');

        let deleteTask = document.createElement('div');
        deleteTask.innerText = 'Delete';
        deleteTask.classList.add('deleteTask');

        let doneTask = document.createElement('div');
        doneTask.innerText = 'Done';
        doneTask.classList.add('doneTask');

        buttonDiv.appendChild(deleteTask);
        buttonDiv.appendChild(doneTask);

        parentDiv.appendChild(taskTitle);
        parentDiv.appendChild(taskDiv);
        parentDiv.appendChild(taskDescription);
        parentDiv.appendChild(descriptionDiv);
        parentDiv.appendChild(buttonDiv);
        taskCollection.appendChild(parentDiv);
    });

    right.appendChild(taskCollection);
}

export const addTaskLayout = () => {
    const right = document.getElementById('right');
    right.innerHTML = '';

    const taskTittleDiv =document.createElement('div');
    taskTittleDiv.setAttribute('id','taskTitleDiv');

    const taskTitleLabel = document.createElement('label');
    taskTitleLabel.innerText = 'Task Tittle: '
    taskTitleLabel.setAttribute('for', 'taskTitleInput');
    taskTitleLabel.required = true;

    const taskTittleInput = document.createElement('input');
    taskTittleInput.setAttribute('id','taskTitleInput')

    const taskDescriptionLabel = document.createElement('label');
    taskDescriptionLabel.innerText = 'Task Description: '
    taskDescriptionLabel.setAttribute('for','taskDescriptionInput');

    const taskDescriptionInput = document.createElement('input');
    taskDescriptionInput.setAttribute('id','taskDescriptionInput');
    

    const taskSubmitButton = document.createElement('button');
    taskSubmitButton.setAttribute('id','submitTask');
    taskSubmitButton.innerText = 'submit';

    const taskCancelButton = document.createElement('button');
    taskCancelButton.setAttribute('id','cancelTask');
    taskCancelButton.innerText = 'cancel';


    taskTittleDiv.appendChild(taskTitleLabel);
    taskTittleDiv.appendChild(taskTittleInput);
    taskTittleDiv.appendChild(taskDescriptionLabel);
    taskTittleDiv.appendChild(taskDescriptionInput);
    taskTittleDiv.appendChild(taskSubmitButton);
    taskTittleDiv.appendChild(taskCancelButton);
    right.appendChild(taskTittleDiv);
}

export const addProjectTask = (title,portfolio)=>{
    let taskTitleInput = document.getElementById('taskTitleInput');
    let taskDescriptionInput = document.getElementById('taskDescriptionInput');
    let taskTitle = taskTitleInput.value;
    let taskDescription = taskDescriptionInput.value;
    let taskSet = new Todo (taskTitle,taskDescription);


    const projectName = title;
    const projectIndex = portfolio.array.findIndex(Project => Project.title === projectName);

    if (projectIndex !== -1) {
        portfolio.array[projectIndex].addToDO(taskSet);
    } else {
        console.log('Project not found in the portfolio.');
    }
}

export const deleteTask = (targetedTask,portfolio,projectTitle) => {
    let projectName = portfolio.array.find(project => project.title.trim().toLowerCase() === projectTitle.trim().toLowerCase());
    let projectNameArray = projectName.arr.find(project => project.title === targetedTask);
    projectName.delToDo(projectNameArray);
}
