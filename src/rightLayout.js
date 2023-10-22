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
    welcomePage.classList.add('dashboardheader')
    

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
    rightProjectInput.innerHTML = `
    <div>
        <form>
            <div>
                <label for="title">Title:</label>
                <input type="text" id="title" placeholder="Title of the project" required>

                <label for="description">Description:</label>
                <input type="text" id="description" placeholder="Project Description" required>

                <label for="dueDate">Due date:</label>
                <input type="date" id="dueDate" placeholder="Due Date" required>

                <label for="priority">Choose a priority:</label>
                <select id="priority" name="priority">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
            <button type="submit" id="addProjectLine">Add Project</button>
            <button type="submit" id="cancelProjectLine">Cancel Project</button>
        </form>
    </div>
    `;
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
    let dueDate = format(parseISO(dueDateInput.value), 'dd/MM/yyyy');
    let priority = priorityInput.value;
    
    title = new Project(title,description,dueDate,priority,[]);
    portfolio.addProject(title);
}

export const loadProjectEdit = () => {
    const right = document.getElementById('right');
    right.innerHTML = '';
    const rightProjectInput = document.createElement('div');
    rightProjectInput.setAttribute('id','rightProjectInput');
    rightProjectInput.innerHTML = `
    <div>
        <form>
            <div>
                <label for="title">Title:</label>
                <input type="text" id="title" placeholder="Title of the project" required>

                <label for="description">Description:</label>
                <input type="text" id="description" placeholder="Project Description" required>

                <label for="dueDate">Due date:</label>
                <input type="date" id="dueDate" placeholder="Due Date" required>

                <label for="priority">Choose a priority:</label>
                <select id="priority" name="priority">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
            <button type="submit" id="editProjectLine">Edit Project</button>
            <button type="submit" id="cancelEditProjectLine">Cancel Edit</button>
        </form>
    </div>
    `;
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
    let newDescription = descriptionInput.value;
    let newDueDate = format(parseISO(dueDateInput.value), 'dd/MM/yyyy');
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
        <div>
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

        let taskDiv = document.createElement('div');
        taskDiv.innerText = element.title;

        let descriptionDiv = document.createElement('div');
        descriptionDiv.innerText = element.description;

        let deleteTask = document.createElement('div');
        deleteTask.innerText = 'X';
        deleteTask.classList.add('deleteTask');

        let doneTask = document.createElement('div');
        doneTask.innerText = '/';
        doneTask.classList.add('doneTask');
        
        parentDiv.appendChild(taskDiv);
        parentDiv.appendChild(descriptionDiv);
        parentDiv.appendChild(deleteTask);
        parentDiv.appendChild(doneTask);
        taskCollection.appendChild(parentDiv);
    });

    right.appendChild(taskCollection);
}

export const addTaskLayout = () => {
    const right = document.getElementById('right');
    const addTask = document.getElementById('addTask');
    right.innerHTML = '';

    const taskTittleDiv =document.createElement('div');

    const taskTitleLabel = document.createElement('label');
    taskTitleLabel.innerText = 'Task Tittle: '
    taskTitleLabel.setAttribute('for', 'taskTitleInput');

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
