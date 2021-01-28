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

const createProjectCardTitle = (projectObj, parentProject) => {
  const projectTitle = document.createElement('h3');
  projectTitle.classList.add('project-title');
  projectTitle.textContent = projectObj.title;
  parentProject.appendChild(projectTitle);
};

const createEditBtn = (parentElement) => {
  const editBtn = document.createElement('button');
  editBtn.classList.add('todo-edit-btn');
  const faEdit = document.createElement('i');
  faEdit.classList.add('fas');
  faEdit.classList.add('fa-pen');
  editBtn.appendChild(faEdit);
  parentElement.appendChild(editBtn);
};

const createDeleteBtn = (parentElement) => {
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('todo-delete-btn');
  const faDelete = document.createElement('i');
  faDelete.classList.add('fas');
  faDelete.classList.add('fa-trash');
  deleteBtn.appendChild(faDelete);
  parentElement.appendChild(deleteBtn);
};

const createUtilBtns = (parentElement) => {
  const utilContainer = document.createElement('div');
  utilContainer.classList.add('todo-item-utils');
  createEditBtn(utilContainer);
  createDeleteBtn(utilContainer);
  parentElement.appendChild(utilContainer);
};

const toggleCompletion = (e) => {
  e.stopPropagation();
  console.log(e);
};

const createCheckbox = (parentElement) => {
  const todoCheck = document.createElement('input');
  todoCheck.type = 'checkbox';
  todoCheck.classList.add('todo-check');
  todoCheck.addEventListener('click', toggleCompletion);
  parentElement.appendChild(todoCheck);
};

const toggleTodoDescription = (e) => {
  const todoDescription = e.target.closest('.todo-item').children[1];
  if (
    !todoDescription.style.display ||
    todoDescription.style.display === 'none'
  ) {
    todoDescription.style.display = 'block';
  } else {
    todoDescription.style.display = 'none';
  }
};

const createTodoTask = (todo, parentElement) => {
  const todoItemTask = document.createElement('h3');
  todoItemTask.classList.add('todo-item-task');
  todoItemTask.textContent = todo.title;
  todoItemTask.addEventListener('click', toggleTodoDescription);
  parentElement.appendChild(todoItemTask);
};

const createTodoContainer = (todo, parentElement) => {
  const todoItemContainer = document.createElement('div');
  todoItemContainer.classList.add('todo-item-container');
  createCheckbox(todoItemContainer);
  createTodoTask(todo, todoItemContainer);
  createUtilBtns(todoItemContainer);
  parentElement.appendChild(todoItemContainer);
};

const createTodoDescription = (todo, parentElement) => {
  const todoDescription = document.createElement('div');
  todoDescription.classList.add('todo-description');
  todoDescription.textContent = todo.description;
  parentElement.appendChild(todoDescription);
};

const createProjectTodos = (projectTodos, parentProject) => {
  const todoList = document.createElement('ul');
  todoList.classList.add('todo-list');
  for (let i = 0; i < projectTodos.length; i++) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    todoItem.id = projectTodos[i].id;
    createTodoContainer(projectTodos[i], todoItem);
    createTodoDescription(projectTodos[i], todoItem);
    todoList.appendChild(todoItem);
  }
  parentProject.appendChild(todoList);
};

const handleProjectBtnClick = (e) => {
  const parent = e.target.closest('.project-card');
  parent.classList.toggle('hide-todo-list');
  e.target.classList.toggle('flip');
};

const createFooterNums = (projectObj, parentElement) => {
  const numTodos = document.createElement('p');
  numTodos.classList.add('num-todos');
  numTodos.textContent = `${projectObj.todos.length} todo${
    projectObj.todos.length === 1 ? '' : 's'
  }`;
  parentElement.appendChild(numTodos);
};

const createAddTodoBtn = (parentElement) => {
  const addTodoBtn = document.createElement('button');
  addTodoBtn.classList.add('add-todo-btn');
  const faPlus = document.createElement('i');
  faPlus.classList.add('fas');
  faPlus.classList.add('fa-plus');
  addTodoBtn.appendChild(faPlus);
  parentElement.appendChild(addTodoBtn);
};

const createProjectToggler = (parentElement) => {
  const projectBtn = document.createElement('button');
  projectBtn.classList.add('project-button');
  const faChevron = document.createElement('i');
  faChevron.classList.add('fas');
  faChevron.classList.add('fa-chevron-down');
  projectBtn.appendChild(faChevron);
  projectBtn.addEventListener('click', handleProjectBtnClick);
  parentElement.appendChild(projectBtn);
};

const createProjectCardFooter = (projectObj, parentProject) => {
  const projectFooter = document.createElement('footer');
  projectFooter.classList.add('project-footer');
  createFooterNums(projectObj, projectFooter);
  createAddTodoBtn(projectFooter);
  createProjectToggler(projectFooter);
  parentProject.appendChild(projectFooter);
};

const createProjectCard = (project) => {
  const main = document.querySelector('main');
  const projectCard = document.createElement('section');
  projectCard.classList.add('project-card');
  projectCard.classList.add('hide-todo-list');
  projectCard.id = project.id;
  createProjectCardTitle(project, projectCard);
  createProjectTodos(project.todos, projectCard);
  createProjectCardFooter(project, projectCard);
  main.appendChild(projectCard);
  return projectCard;
};

// add new project logic

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
};

addProjectForm.addEventListener('submit', createProject);

// create initial project

for (let i = 0; i < projects.length; i++) {
  createProjectCard(projects[i]);
}
