import { Project } from "./project";

export class Portfolio {
    constructor() {
        this.array = [];
    }

    addProject(projectName) {
        this.array.push(projectName);
    }

    delProject(projectName) {
        const currentProjects = this.array.findIndex(project => project.title === projectName.title);

        if (currentProjects !== -1) {
            this.array.splice(currentProjects, 1);
        } else {
            console.log('Project does not exist');
        }
    }

    printProjectName(){
        this.array.forEach(element => {
            console.log(element.title);
        });
    }

    mapProjectName(){
        return this.array.map(element => element.title);
    }
}