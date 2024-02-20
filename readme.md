# Gerenciador de Tarefas

O Gerenciador de Tarefas é uma aplicação web simples e intuitiva para gerenciar suas tarefas diárias. Ele permite adicionar, remover e editar tarefas de uma lista, proporcionando uma maneira visual e interativa de organizar suas atividades.

## Características

- **Adicionar Tarefas:** Crie novas tarefas com uma descrição.
- **Remover Tarefas:** Remova tarefas que não são mais necessárias.
- **Editar Tarefas:** Edite a descrição de tarefas existentes.
- **Visualização Dinâmica:** A lista de tarefas é atualizada dinamicamente conforme as tarefas são adicionadas, removidas ou editadas.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Padrão Singleton para gerenciamento de instâncias
- Padrão Observer para atualizações dinâmicas da UI

## Pré-requisitos

Para executar este projeto localmente, você precisará ter o Node.js instalado em seu computador. Além disso, você usará o `http-server` para servir os arquivos estáticos da aplicação.

## Como Executar

1. Clone este repositório para sua máquina local usando:

```bash
git clone https://github.com/natanielpaiva/task-manager-gran.git
```

Navegue até o diretório do projeto:

```bash
cd caminho/para/o/diretorio/task-manager-gran
```

Se você ainda não tem o http-server instalado globalmente, instale-o via npm:

```bash
npm install -g http-server
```

Inicie o servidor:
```bash
http-server
```

Abra seu navegador e acesse http://localhost:8080 para ver a aplicação em funcionamento.
