import './styles.css';
import { Todo } from './todo';
import { Project } from './project';
import { Portfolio } from './portfolio';
import { loadDivPortfolio, populateDivPortfolio, oneAdditionProject } from './portfolioLayout';
import { loadInputProject, createProject, displayProjectTask, addProjectTask, addTaskLayout } from './projectLayout';

const onLoadRight = () =>{
    const right = document.getElementById('right');
    right.innerHTML='';
    const welcomePage = document.createElement('div');
    welcomePage.innerText = "Welcome to Amazing List";
    right.appendChild(welcomePage);
};

let taskOne = new Todo('title','description');
let taskTwo = new Todo('a','description2');
let listOne = new Project('My list','c','d','e', [taskOne,taskTwo]);
let listTwo = new Project('Old list','c','d','e', [taskOne,taskTwo]);

listOne.title ='new title';

let task3 = new Todo('title3','description');

listOne.addToDO(task3);
listOne.delToDo(task3);

let port1 = new Portfolio;

port1.addProject(listOne);
port1.addProject(listTwo);
port1.addProject(listOne);

listOne.printToDoDescription()

loadDivPortfolio();

let firstPortfolio = new Portfolio();

firstPortfolio.addProject(listOne);
firstPortfolio.addProject(listTwo);
firstPortfolio.addProject(listOne);
firstPortfolio.addProject(listTwo);

// Start of Program
populateDivPortfolio(firstPortfolio)
onLoadRight();
let projectTitleLock = '';


const addProjectButton = document.getElementById('addProject');
addProjectButton.addEventListener('click',()=>{
    loadInputProject();
});

const right = document.getElementById('right');

right.addEventListener('click', (event)=>{
    const target = event.target;

    if(target.id ==='addProjectLine'|| target.closest('#addProjectLine')){
        createProject(event,firstPortfolio);
        oneAdditionProject(firstPortfolio);
        onLoadRight();
    }
})


left.addEventListener('click', (event)=>{
    let projectList = document.querySelectorAll('.projectList'); 
    if(event.target.classList.contains('projectList')){
        projectTitleLock = event.target.innerHTML;
        displayProjectTask(event.target.innerHTML,firstPortfolio);
        
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

