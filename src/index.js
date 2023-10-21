import './styles.css';
import { Todo } from './todo';
import { Project } from './project';
import { Portfolio } from './portfolio';
import { loadDivPortfolio, populateDivPortfolio, oneAdditionProject,deleteProject } from './leftLayout';
import { loadInputProject, createProject, displayProjectTask, addProjectTask, addTaskLayout, onLoadRight, loadProjectEdit, editProject,deleteTask } from './rightLayout';

// let taskOne = new Todo('title','description');
// let taskTwo = new Todo('a','description2');

// let listOne = new Project('First list','c','d','e', [taskOne,taskTwo]);
// let listTwo = new Project('Second list','c','d','e', [taskOne,taskTwo]);
// let listThree = new Project('Third list','c','d','e', [taskOne,taskTwo]);
// let listFour = new Project('Fourth list','c','d','e', [taskOne,taskTwo]);
// let listFive = new Project('Fifth list','c','d','e', [taskOne,taskTwo]);

// listOne.title ='new title';

// let task3 = new Todo('title3','description');

// listOne.addToDO(task3);
// listOne.delToDo(task3);

// listOne.printToDoDescription()

let firstPortfolio = new Portfolio;

// firstPortfolio.addProject(listOne);
// firstPortfolio.addProject(listTwo);
// firstPortfolio.addProject(listThree);
// firstPortfolio.addProject(listFour);
// firstPortfolio.addProject(listFive);
// firstPortfolio.delProject(listFive);

// Start of Program
loadDivPortfolio();
populateDivPortfolio(firstPortfolio)
onLoadRight(firstPortfolio);
let projectTitleLock = '';
let projectEditLock = '';


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

left.addEventListener('click', (event)=>{
    if(event.target.classList.contains('removeProject')){
       projectEditLock = event.target.parentElement.previousElementSibling.innerHTML;
       const project = firstPortfolio.array.find(project => project.title === projectEditLock);
       
       if (confirm(`Are you sure you want to remove ${projectEditLock} from your list of project?`)) {
        console.log('remove ' + projectEditLock);
        deleteProject(event,project,firstPortfolio);
        populateDivPortfolio(firstPortfolio)
        onLoadRight(firstPortfolio);
      } 
       
    }

})

// left.addEventListener('click', (event)=>{
//     if(event.target.id === 'saveProject'){
//        localStorage.Portfolio = firstPortfolio;
//     }

// })

const right = document.getElementById('right');

right.addEventListener('click', (event)=>{
    if(event.target.id === 'editProjectLine'){
        editProject(event,projectEditLock,firstPortfolio)
        populateDivPortfolio(firstPortfolio)
        onLoadRight(firstPortfolio);
    }else if (event.target.id === 'cancelEditProjectLine'){
        onLoadRight(firstPortfolio);
    }
})

right.addEventListener('click', (event)=>{
    const target = event.target;

    if(target.id ==='addProjectLine'|| target.closest('#addProjectLine')){
        createProject(event,firstPortfolio);
        oneAdditionProject(firstPortfolio);
        onLoadRight(firstPortfolio);
    }
})

right.addEventListener('click', (event)=>{
    if(event.target.id === 'cancelProjectLine'){
        onLoadRight(firstPortfolio);
    }
})


right.addEventListener('click', (event)=>{
    if(event.target.id === 'addTask'){
        addTaskLayout();
    }
})

right.addEventListener('click', (event)=>{
    if(event.target.id === 'backTask'){
        onLoadRight(firstPortfolio);
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

right.addEventListener('click', (event)=>{
    if(event.target.classList.contains('deleteTask') ){
        
        let targetedTask = event.target.previousElementSibling.previousElementSibling.innerText;
        deleteTask(targetedTask,firstPortfolio, projectTitleLock);        
        displayProjectTask(projectTitleLock,firstPortfolio);
    }
})

//add done function for task