import './styles.css';
import { Todo } from './todo';
import { Project } from './project';
import { Portfolio } from './portfolio';
import { loadHeader , loadFooter} from './headerFooter';
import { loadDivPortfolio, populateDivPortfolio, oneAdditionProject,deleteProject } from './leftLayout';
import { loadInputProject, createProject, displayProjectTask, addProjectTask, addTaskLayout, onLoadRight, loadProjectEdit, editProject,deleteTask } from './rightLayout';


let firstPortfolio = new Portfolio;
let projectTitleLock = '';
let projectEditLock = '';

const welcome = new Project('Welcome to Amazing List',
                            'Welcome to Amazing list and enjoy the use',
                            null, 'High', []);
firstPortfolio.addProject(welcome);

loadHeader();
loadFooter();
loadDivPortfolio();
populateDivPortfolio(firstPortfolio)
onLoadRight(firstPortfolio);

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
        
        let targetedTask = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
        deleteTask(targetedTask,firstPortfolio, projectTitleLock);        
        displayProjectTask(projectTitleLock,firstPortfolio);
    }
})

// let doneTask = document.querySelectorAll('.doneTask')

// doneTask.forEach(item => {
//     item.addEventListener('click', function() {
//         let targetedTask = item.parentElement.previousElementSibling.previousElementSibling.previousElementSibling;
//         item.classList.toggle('line-through');
//     });
// });

// Add click event listener to elements with the 'doneTask' class
document.getElementById('right').addEventListener('click', (event) => {
    if (event.target.classList.contains('doneTask')) {
        let targetedTask = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling;
        let targetedDescription = event.target.parentElement.previousElementSibling
        targetedTask.classList.toggle('line-through');
        targetedDescription.classList.toggle('line-through');
    }
});