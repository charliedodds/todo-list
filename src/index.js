import Project from './Project';
import Todo from './Todo';

const projects = [];

const instructionsProject = Project('Open me to start');

const firstTodo = Todo(
  'Add new todo',
  'Add ability to add new todo',
  'now',
  'high'
);
instructionsProject.todos.push(firstTodo);

instructionsProject.todos.push(
  Todo('Add new project', 'Add ability to add new projects', 'today', 'medium')
);

instructionsProject.todos.push(
  Todo(
    'Add edit/delete buttons',
    'Add ability to "open" todos, edit and delete them',
    'sometime',
    'low'
  )
);

projects.push(instructionsProject);

console.log(projects);

const createProjectCardTitle = (projectObj, parentProject) => {
  const projectTitle = document.createElement('h3');
  projectTitle.classList.add('project-title');
  projectTitle.textContent = projectObj.title;
  parentProject.appendChild(projectTitle);
};

const createProjectTodos = (projectTodos, parentProject) => {
  const todoList = document.createElement('ul');
  todoList.classList.add('todo-list');
  for (let i = 0; i < projectTodos.length; i++) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    const todoItemContainer = document.createElement('div');
    todoItemContainer.classList.add('todo-item-container');
    const todoCheck = document.createElement('input');
    todoCheck.type = 'checkbox';
    todoCheck.classList.add('todo-check');
    todoItemContainer.appendChild(todoCheck);
    const todoItemTask = document.createElement('div');
    todoItemTask.classList.add('todo-item-task');
    todoItemTask.textContent = projectTodos[i].title;
    todoItemContainer.appendChild(todoItemTask);
    const utilContainer = document.createElement('div');
    utilContainer.classList.add('todo-item-utils');
    todoItemContainer.appendChild(utilContainer);
    todoItem.appendChild(todoItemContainer);
    todoList.appendChild(todoItem);
  }
  parentProject.appendChild(todoList);
};

const handleProjectBtnClick = (e) => {
  e.target.parentElement.parentElement.parentElement.classList.toggle(
    'hide-todo-list'
  );
  e.target.classList.toggle('flip-down');
  e.target.classList.toggle('flip-up');
};

const createProjectCardFooter = (projectObj, parentProject) => {
  const projectFooter = document.createElement('footer');
  projectFooter.classList.add('project-footer');
  const numTodos = document.createElement('p');
  numTodos.classList.add('num-todos');
  numTodos.textContent = `${projectObj.todos.length} todo${
    projectObj.todos.length === 1 ? '' : 's'
  }`;
  projectFooter.appendChild(numTodos);
  const projectBtn = document.createElement('button');
  projectBtn.classList.add('project-button');
  const iElement = document.createElement('i');
  iElement.classList.add('fas');
  iElement.classList.add('fa-chevron-up');
  iElement.classList.add('flip-down');
  projectBtn.appendChild(iElement);
  projectBtn.addEventListener('click', handleProjectBtnClick);
  projectFooter.appendChild(projectBtn);
  parentProject.appendChild(projectFooter);
};

const createProjectCard = (project) => {
  const main = document.querySelector('main');
  const projectCard = document.createElement('section');
  projectCard.classList.add('project-card');
  projectCard.classList.add('hide-todo-list');
  createProjectCardTitle(project, projectCard);
  createProjectTodos(project.todos, projectCard);
  createProjectCardFooter(project, projectCard);
  main.appendChild(projectCard);
  return projectCard;
};

for (let i = 0; i < projects.length; i++) {
  console.log(projects[i]);
  createProjectCard(projects[i]);
}
