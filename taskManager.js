//me siga no insta @natanieltech
export class TaskManager {
    constructor() {
        if (!TaskManager.instance) {
            this.tasks = [];
            this.observers = []; // Inicializa os observers aqui para evitar verificações undefined
            TaskManager.instance = this;
        }
        return TaskManager.instance;
    }


    addTask(task) {
        this.tasks.push(task);
        this.notifyObservers();
    }

    removeTask(index) {
       
    }

    getTasks() {
        return this.tasks;
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers() {
        this.observers.forEach(observer => observer.update(this.tasks));
    }
}

const taskManager = new TaskManager();

export { taskManager };
