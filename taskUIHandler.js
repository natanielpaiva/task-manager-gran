

//me siga no insta @natanieltech
import { taskManager } from './taskManager.js';

// Função para inicializar os manipuladores de eventos e a lógica da UI
function initializeTaskApp() {
    const addButton = document.getElementById('addTaskBtn');
    const inputField = document.getElementById('taskInput');
    const tasksContainer = document.getElementById('taskList');

    // Atualiza a lista de tarefas na interface do usuário
    function refreshTaskList(tasks) {
        tasksContainer.innerHTML = '';
        tasks.forEach((task, index) => {
            const taskElement = createTaskElement(task, index); // Passa o índice para createTaskElement
            tasksContainer.appendChild(taskElement);
        });
    }

    // Adiciona a tarefa quando o botão é clicado
    addButton.addEventListener('click', () => {
        const taskDescription = inputField.value.trim();
        if (taskDescription) {
            taskManager.addTask(taskDescription);
            inputField.value = ''; // Limpa o campo de entrada
        }
    });

    // Adiciona observador para atualizar a UI quando a lista de tarefas mudar
    taskManager.addObserver({ update: refreshTaskList });
}

// Cria um elemento de lista para a tarefa com botões de ação
function createTaskElement(taskDescription, index) {
    const taskItem = document.createElement('li');
    const textSpan = document.createElement('span');
    textSpan.classList.add('task-text');
    textSpan.textContent = taskDescription;

    // Atualize o botão de remover para chamar taskManager.removeTask com o índice
    const removeButton = createActionButton('Remover', () => {
        taskManager.removeTask(index);
        taskItem.remove();
    });

    const editInput = createEditInput(taskDescription);
    const saveButton = createSaveButton(textSpan, editInput);

    textSpan.addEventListener('dblclick', () => activateEditMode(editInput, textSpan, saveButton));

    taskItem.append(textSpan, removeButton, editInput, saveButton);
    return taskItem;
}

// Cria um botão de ação comum
function createActionButton(text, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', onClick);
    return button;
}

// Cria o campo de edição para a tarefa
function createEditInput(value) {
    const input = document.createElement('input');
    input.type = 'text';
    input.classList.add('editing');
    input.value = value;
    return input;
}

// Cria o botão de salvar que aparece durante a edição
function createSaveButton(textSpan, editInput) {
    return createActionButton('Salvar', () => {
        textSpan.textContent = editInput.value;
        deactivateEditMode(editInput, textSpan);
    });
}

// Ativa o modo de edição
function activateEditMode(editInput, textSpan, saveButton) {
    editInput.classList.add('active');
    textSpan.classList.add('editing');
    saveButton.classList.add('active');
}

// Desativa o modo de edição
function deactivateEditMode(editInput, textSpan) {
    editInput.classList.remove('active');
    textSpan.classList.remove('editing');
}

// Espera o DOM carregar antes de inicializar o aplicativo
document.addEventListener('DOMContentLoaded', initializeTaskApp);
