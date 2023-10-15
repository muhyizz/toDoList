export class Todo{
    constructor(title,description){
        this._title = title;
        this._description = description;
    }

    set title(title){
        return this._title;
    }

    get title(){
        return this._title;
    }

    get description(){
        return this._description;
    }

    set description(description){
        return this.description = description; 
    }


}