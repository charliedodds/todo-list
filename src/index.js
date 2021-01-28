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
    const editBtn = document.createElement('button');
    editBtn.classList.add('todo-edit-btn');
    const faEdit = document.createElement('i');
    faEdit.classList.add('fas');
    faEdit.classList.add('fa-pen');
    editBtn.appendChild(faEdit);
    utilContainer.appendChild(editBtn);
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('todo-delete-btn');
    const faDelete = document.createElement('i');
    faDelete.classList.add('fas');
    faDelete.classList.add('fa-trash');
    deleteBtn.appendChild(faDelete);
    utilContainer.appendChild(deleteBtn);

    todoItemContainer.appendChild(utilContainer);
    todoItem.appendChild(todoItemContainer);
    todoList.appendChild(todoItem);
  }
  parentProject.appendChild(todoList);
};

const handleProjectBtnClick = (e) => {
  const parent = e.target.closest('.project-card');
  parent.classList.toggle('hide-todo-list');
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
  const addTodoBtn = document.createElement('button');
  addTodoBtn.classList.add('add-todo-btn');
  const faPlus = document.createElement('i');
  faPlus.classList.add('fas');
  faPlus.classList.add('fa-plus');
  addTodoBtn.appendChild(faPlus);
  projectFooter.appendChild(addTodoBtn);
  const projectBtn = document.createElement('button');
  projectBtn.classList.add('project-button');
  const faChevron = document.createElement('i');
  faChevron.classList.add('fas');
  faChevron.classList.add('fa-chevron-up');
  faChevron.classList.add('flip-down');
  projectBtn.appendChild(faChevron);
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

const addProjectBtn = document.querySelector('.add-project-btn');
const addProjectForm = document.querySelector('.add-project-form');
const projectTitleInput = document.querySelector('#project-title-input');

const toggleAddProjectForm = (e) => {
  addProjectForm.classList.toggle('hide-form');
  projectTitleInput.value = '';
};

addProjectBtn.addEventListener('click', toggleAddProjectForm);

const createProject = (e) => {
  e.preventDefault();
  const newProject = Project(projectTitleInput.value);
  projects.push(newProject);
  createProjectCard(newProject);
  toggleAddProjectForm();
  console.log(projects);
};

addProjectForm.addEventListener('submit', createProject);

for (let i = 0; i < projects.length; i++) {
  console.log(projects[i]);
  createProjectCard(projects[i]);
}
