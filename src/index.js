import './styles.css';
import { Todo } from './todo';
import { Project } from './project';
import { Portfolio } from './portfolio';
import { loadDivPortfolio, populateDivPortfolio } from './portfolioLayout';

let taskOne = new Todo('title','description');
let taskTwo = new Todo('a','description2');
let listOne = new Project('My list','c','d','e', [taskOne,taskTwo]);
let listTwo = new Project('Old list','c','d','e', [taskOne,taskTwo]);

console.log(listOne.title);
console.log(listOne.arr[0].title + " this is get array title");

listOne.title ='new title';
console.log(listOne.title);

let task3 = new Todo('title3','description');

listOne.addToDO(task3);

console.log(listOne);

listOne.delToDo(task3);

console.log(listOne.arr);

let port1 = new Portfolio;

port1.addProject(listOne);
port1.addProject(listTwo);
port1.addProject(listOne);

console.log(port1)
console.log(port1.array[0].title);
port1.printProjectName()
listOne.printToDoDescription()

loadDivPortfolio();

let firstPortfolio = new Portfolio();

firstPortfolio.addProject(listOne);
firstPortfolio.addProject(listTwo);
firstPortfolio.addProject(listOne);
firstPortfolio.addProject(listTwo);

firstPortfolio.printProjectName();
populateDivPortfolio(firstPortfolio)


// let render = firstPortfolio.mapProjectName();

// render.forEach(projectName =>{
//         let projectDiv = document.createElement('div');
//         projectDiv.innerText = projectName;
//         leftPanel.appendChild(projectDiv);
//     });

// render.forEach(projectName =>{
//     let projectDiv = document.createElement('div');
//     projectDiv.innerText = projectName;
//     leftPanel.appendChild(projectDiv);
// });

// window.addEventListener('load', () => {
//     let renders = firstPortfolio.mapProjectName();
//     render.forEach(projectName =>{
//         let projectDiv = document.createElement('div');
//         projectDiv.innerText = projectName;
//         leftPanel.appendChild(projectDiv);
//     });
// })



