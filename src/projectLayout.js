import { Project } from "./project";
import { Portfolio } from "./portfolio";
import { Todo } from "./todo";

//Loads the layout for additional project

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
                <input type="text" id="dueDate" placeholder="Due Date" required>

                <label for="priority">Choose a priority:</label>
                <select id="priority" name="priority">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
            <button type="submit" id="addProjectLine">Add Project</button>
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
    let dueDate = dueDateInput.value;
    let priority = priorityInput.value;
    
    title = new Project(title,description,dueDate,priority,[]);
    portfolio.addProject(title);
}


export const displayProjectTask = (title,portfolio) => {
    const right = document.getElementById('right');
    right.innerHTML = '';
    right.innerHTML = `
        <div>
            <button id="addTask">Add Task</button>
            <button id="removeTask">Remove Task</button>
        </div>
    `;
    const projectName = title;
    const projectIndex = portfolio.array.findIndex(Project => Project.title === projectName);
    const projectExtract = portfolio.array[projectIndex];
    const projectTask = projectExtract.arr;
    projectTask.forEach(element => {
        let parentDiv = document.createElement('div');
        let taskDiv = document.createElement('div');
        let descriptionDiv = document.createElement('div');
        taskDiv.innerText = element.title;
        descriptionDiv.innerText = element.description;

        parentDiv.appendChild(taskDiv);
        parentDiv.appendChild(descriptionDiv);
        right.appendChild(parentDiv);
    });
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

