import { Todo } from "./todo";


export class Project{
    constructor(title,description,dueDate,priority,arr){
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._arr = arr || [];
    }

    set title(newTitle){
        this._title = newTitle;
    }

    get title() {
        return this._title;
    }

    set description(newDescription){
        this._description = newDescription;
    }

    get description(){
        return this._description;
    }

    set dueDate(newdueDate){
        this._dueDate = newdueDate;
    }

    get dueDate(){
        return this._dueDate;
    }

    set priority(newPriority){
        this._priority = newPriority;
    }

    get priority(){
        return this._priority;
    }

    get dueDate(){
        return this._dueDate;
    }    

    set arr(newArr){
        this._arr = newArr;
    }

    get arr(){
        return this._arr;
    }

    addToDO = (newTodo) =>{
        this._arr.push(newTodo);
    }

    delToDo = (removeTodo) =>{
        const currentToDo = this._arr.findIndex(todo => todo.title === removeTodo.title);

        if (currentToDo !== -1){
            this._arr.splice(currentToDo,1);
        } else {
            console.log('to do does not exist');
        }
    }

    printToDoTittle = ()=>{
        this.arr.forEach(element => {
            console.log(element.title);
        })
    }

    printToDoDescription = ()=>{
        this.arr.forEach(element => {
            console.log(element.description);
        })
    }
}