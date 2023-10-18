import './styles.css';
import { Todo } from './todo';
import { Project } from './project';
import { Portfolio } from './portfolio';
import { loadDivPortfolio, populateDivPortfolio, oneAdditionProject } from './leftLayout';
import { loadInputProject, createProject, displayProjectTask, addProjectTask, addTaskLayout, onLoadRight, loadProjectEdit, editProject } from './rightLayout';

let taskOne = new Todo('title','description');
let taskTwo = new Todo('a','description2');

let listOne = new Project('First list','c','d','e', [taskOne,taskTwo]);
let listTwo = new Project('Second list','c','d','e', [taskOne,taskTwo]);
let listThree = new Project('Third list','c','d','e', [taskOne,taskTwo]);
let listFour = new Project('Fourth list','c','d','e', [taskOne,taskTwo]);

listOne.title ='new title';

// let task3 = new Todo('title3','description');

// listOne.addToDO(task3);
// listOne.delToDo(task3);

// listOne.printToDoDescription()

let firstPortfolio = new Portfolio();

firstPortfolio.addProject(listOne);
firstPortfolio.addProject(listTwo);
firstPortfolio.addProject(listThree);
firstPortfolio.addProject(listFour);

// Start of Program
loadDivPortfolio();
populateDivPortfolio(firstPortfolio)
onLoadRight();
let projectTitleLock = '';
let projectEditLock = 'fail';


const addProjectButton = document.getElementById('addProject');
addProjectButton.addEventListener('click',()=>{
    loadInputProject();
});

left.addEventListener('click', (event)=>{
    if(event.target.classList.contains('projectList')){
        projectTitleLock = event.target.innerHTML;
        displayProjectTask(event.target.innerHTML,firstPortfolio);
        
    }

})



left.addEventListener('click', (event)=>{
    if(event.target.classList.contains('editProject')){
       projectEditLock = event.target.parentElement.previousElementSibling.innerHTML;
       loadProjectEdit();
    }

})

const right = document.getElementById('right');

right.addEventListener('click', (event)=>{
    if(event.target.id === 'editProjectLine'){
        editProject(event,projectEditLock,firstPortfolio)
        populateDivPortfolio(firstPortfolio)
    }
})



right.addEventListener('click', (event)=>{
    const target = event.target;

    if(target.id ==='addProjectLine'|| target.closest('#addProjectLine')){
        createProject(event,firstPortfolio);
        oneAdditionProject(firstPortfolio);
        onLoadRight();
    }
})

right.addEventListener('click', (event)=>{
    if(event.target.id === 'cancelProjectLine'){
        onLoadRight();
    }
})


right.addEventListener('click', (event)=>{
    if(event.target.id === 'addTask'){
        addTaskLayout();
    }
})

right.addEventListener('click', (event)=>{
    if(event.target.id === 'submitTask'){
        addProjectTask(projectTitleLock,firstPortfolio);
        displayProjectTask(projectTitleLock,firstPortfolio);
    }
})

right.addEventListener('click', (event)=>{
    if(event.target.id === 'cancelTask'){
        displayProjectTask(projectTitleLock,firstPortfolio);
    }
})
