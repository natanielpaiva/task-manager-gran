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
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1);
            this.notifyObservers();
        }
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
