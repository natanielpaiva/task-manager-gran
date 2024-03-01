import { taskManager, TaskManager } from './taskManager.js';
describe('TaskManager', () => {
  test('deve seguir o padrão Singleton', () => {
    const instance1 = taskManager;
    const instance2 = new TaskManager();
    expect(instance1).toBe(instance2);
  });

  test('deve adicionar tarefas corretamente', () => {
    const task = { id: 1, name: 'Teste de Tarefa' };
    taskManager.addTask(task);
    expect(taskManager.getTasks()).toContain(task);
  });

  test('deve remover tarefas corretamente', () => {
    const initialTaskCount = taskManager.getTasks().length;
    taskManager.removeTask(0); // Considerando que a tarefa anterior foi adicionada
    expect(taskManager.getTasks().length).toBe(initialTaskCount - 1);
  });

  test('deve retornar a lista de tarefas corretamente', () => {
    const tasks = taskManager.getTasks();
    expect(Array.isArray(tasks)).toBe(true);
  });

  test('deve notificar observers quando tarefas são modificadas', () => {
    const observer = { update: jest.fn() };
    taskManager.addObserver(observer);

    // Adiciona uma nova tarefa para disparar a notificação
    taskManager.addTask({ id: 2, name: 'Outra Tarefa' });
    expect(observer.update).toHaveBeenCalledWith(taskManager.getTasks());
  });
});

describe('TaskManager cobertura de branch', () => {
    test('não deve remover tarefa com índice inválido (negativo)', () => {
      const initialTaskCount = taskManager.getTasks().length;
      taskManager.removeTask(1); // Índice inválido
      expect(taskManager.getTasks().length).toBe(initialTaskCount);
    });
  
    test('não deve remover tarefa com índice inválido (fora do alcance)', () => {
      const initialTaskCount = taskManager.getTasks().length;
      taskManager.removeTask(999); // Índice fora do alcance
      expect(taskManager.getTasks().length).toBe(initialTaskCount);
    });
  });
  
