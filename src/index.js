import Project from './Project';
import Todo from './Todo';

if (!localStorage.getItem('projects')) {
  localStorage.setItem('projects', '[]');
}

let projects = JSON.parse(localStorage.getItem('projects'));

const setLocalStorage = () => {
  localStorage.setItem('projects', JSON.stringify(projects));
};

const createInitialProject = () => {
  const instructionsProject = Project('Open me with the arrow');

  const firstTodo = Todo(
    'Tap a todo for more info',
    'And tap again to hide!',
    'now',
    'high'
  );
  instructionsProject.todos.push(firstTodo);

  instructionsProject.todos.push(
    Todo(
      'How to add todos',
      'Tap the plus sign to add a todo, then tap "Add todo"',
      'today',
      'medium'
    )
  );

  instructionsProject.todos.push(
    Todo(
      'How to add projects',
      'Just tap "Add Project" below',
      'sometime',
      'low'
    )
  );

  instructionsProject.todos.push(
    Todo(
      'Edit and delete',
      'When you open a project or todo, just tap their respective buttons to edit or delete them.',
      'sometime',
      'low'
    )
  );

  instructionsProject.todos.push(
    Todo(
      'Mark a todo as done',
      "Just tap the checkbox on the todo you want to mark as completed. Don't delete completed todos for a greater sense of accomplishment!",
      'sometime',
      'low'
    )
  );

  projects.push(instructionsProject);
  setLocalStorage();
};

if (projects.length < 1) {
  createInitialProject();
}

const removeElement = (parent, element) => {
  if (element) {
    parent.removeChild(element);
  }
};

const createProjectCardHeader = (projectObj, parentProject) => {
  const projectHeader = document.createElement('header');
  projectHeader.classList.add('project-header');
  createProjectTitle(projectObj, projectHeader);
  createProjectUtils(projectHeader);
  parentProject.appendChild(projectHeader);
};

const createProjectUtils = (parentElement) => {
  const utilContainer = document.createElement('div');
  utilContainer.classList.add('project-utils');
  createProjectEditBtn(utilContainer);
  createProjectDeleteBtn(utilContainer);
  parentElement.appendChild(utilContainer);
};

const updateProjectTitle = (e) => {
  e.preventDefault();
  const newTitle = document.querySelector('#edit-project-title-input');
  const projectCard = e.target.closest('.project-card');
  const header = projectCard.querySelector('.project-header');
  const projectTitle = projectCard.querySelector('.project-title');
  const editProjectTitleForm = projectCard.querySelector(
    '.edit-project-title-form'
  );
  projectTitle.textContent = newTitle.value;
  projectCard.removeChild(editProjectTitleForm);
  header.style.display = 'flex';
  const project = projects.find((project) => project.id === projectCard.id);
  project.title = newTitle.value;
  setLocalStorage();
};

const openEditProject = (e) => {
  const projectCard = e.target.closest('.project-card');
  const projectHeader = e.target.closest('.project-header');
  const currentTitle = projectHeader.querySelector('.project-title');
  // const projectHeaderUtilButtons = projectHeader.querySelector(
  //   '.project-utils'
  // );
  const editProjectTitleForm = document.createElement('form');
  editProjectTitleForm.classList.add('edit-project-title-form');
  const titleInput = document.createElement('input');
  titleInput.classList.add('edit-project-input');
  titleInput.id = 'edit-project-title-input';
  titleInput.placeholder = currentTitle.textContent;
  editProjectTitleForm.appendChild(titleInput);
  editProjectTitleForm.addEventListener('submit', updateProjectTitle);
  // projectHeader.removeChild(currentTitle);
  // projectHeader.removeChild(projectHeaderUtilButtons);
  projectHeader.style.display = 'none';
  projectCard.prepend(editProjectTitleForm);
};

const createProjectEditBtn = (parentElement) => {
  const editBtn = document.createElement('button');
  editBtn.classList.add('project-edit-btn');
  const faEdit = document.createElement('i');
  faEdit.classList.add('fas');
  faEdit.classList.add('fa-pen');
  editBtn.addEventListener('click', openEditProject);
  editBtn.appendChild(faEdit);
  parentElement.appendChild(editBtn);
};

const deleteProject = (e) => {
  const main = document.querySelector('main');
  const parentProject = e.target.closest('.project-card');
  projects = projects.filter((project) => project.id !== parentProject.id);
  main.removeChild(parentProject);
  setLocalStorage();
};

const createProjectDeleteBtn = (parentElement) => {
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('project-delete-btn');
  const faDelete = document.createElement('i');
  faDelete.classList.add('fas');
  faDelete.classList.add('fa-trash');
  deleteBtn.appendChild(faDelete);
  deleteBtn.addEventListener('click', deleteProject);
  parentElement.appendChild(deleteBtn);
};

const createProjectTitle = (projectObj, parentElement) => {
  const projectTitle = document.createElement('h3');
  projectTitle.classList.add('project-title');
  projectTitle.textContent = projectObj.title;
  parentElement.appendChild(projectTitle);
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

const updateNumTodos = (parentProject, todoArrayLength) => {
  const numTodos = parentProject.querySelector('.num-todos');
  numTodos.textContent = `${todoArrayLength} todo${
    todoArrayLength === 1 ? '' : 's'
  }`;
};

const deleteTodo = (e) => {
  const parentProject = e.target.closest('.project-card');
  const parentTodo = e.target.closest('.todo-item');
  const project = projects.find((project) => project.id === parentProject.id);
  project.todos = project.todos.filter((todo) => todo.id !== parentTodo.id);
  const projectTodoList = parentProject.querySelector('.todo-list');
  projectTodoList.removeChild(parentTodo);
  updateNumTodos(parentProject, project.todos.length);
  setLocalStorage();
};

const createDeleteBtn = (parentElement) => {
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('todo-delete-btn');
  const faDelete = document.createElement('i');
  faDelete.classList.add('fas');
  faDelete.classList.add('fa-trash');
  deleteBtn.appendChild(faDelete);
  deleteBtn.addEventListener('click', deleteTodo);
  parentElement.appendChild(deleteBtn);
};

const createTodoUtilBtns = (parentElement) => {
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

const handleTodoClick = (e) => {
  toggleTodoDescription(e);
  toggleTodoUtilButtons(e);
};

const toggleOpacity = (element) => {
  if (!element.style.opacity || element.style.opacity === '0') {
    element.style.opacity = 1;
    element.style.pointerEvents = 'unset';
  } else {
    element.style.opacity = 0;
    element.style.pointerEvents = 'none';
  }
};

const toggleTodoUtilButtons = (e) => {
  const utilButtons = e.target.nextElementSibling.nextElementSibling;
  toggleOpacity(utilButtons);
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
  todoItemTask.addEventListener('click', handleTodoClick);
  parentElement.appendChild(todoItemTask);
};

const createPriorityMarker = (todo, parentElement) => {
  const priorityMarker = document.createElement('div');
  priorityMarker.classList.add('priority-marker');
  priorityMarker.textContent = todo.priority;
  switch (todo.priority) {
    case 'low':
      priorityMarker.classList.add('low');
      break;
    case 'medium':
      priorityMarker.classList.add('medium');
      break;
    case 'high':
      priorityMarker.classList.add('high');
      break;
  }
  parentElement.appendChild(priorityMarker);
};

const createTodoContainer = (todo, parentElement) => {
  const todoItemContainer = document.createElement('div');
  todoItemContainer.classList.add('todo-item-container');
  createCheckbox(todoItemContainer);
  createTodoTask(todo, todoItemContainer);
  createPriorityMarker(todo, todoItemContainer);
  createTodoUtilBtns(todoItemContainer);
  parentElement.appendChild(todoItemContainer);
};

const createTodoDescription = (todo, parentElement) => {
  const todoDescription = document.createElement('div');
  todoDescription.classList.add('todo-description');
  todoDescription.textContent = todo.description;
  parentElement.appendChild(todoDescription);
};

const createTodo = (todo, parentElement) => {
  const todoItem = document.createElement('li');
  todoItem.classList.add('todo-item');
  todoItem.id = todo.id;
  createTodoContainer(todo, todoItem);
  createTodoDescription(todo, todoItem);
  parentElement.appendChild(todoItem);
};

const createProjectTodos = (projectTodos, parentProject) => {
  const todoList = document.createElement('ul');
  todoList.classList.add('todo-list');
  for (let i = 0; i < projectTodos.length; i++) {
    createTodo(projectTodos[i], todoList);
  }
  parentProject.appendChild(todoList);
};

const resetElementRotation = (element) => {
  element.style.transform = 'rotate(0deg)';
};

const rotateElement = (element) => {
  if (!element.style.transform || element.style.transform === 'rotate(0deg)') {
    element.style.transform = 'rotate(45deg)';
  } else {
    element.style.transform = 'rotate(0deg)';
  }
};

const toggleProjectUtilButtons = (parentElement) => {
  const utilButtons = parentElement.querySelector('.project-utils');
  toggleOpacity(utilButtons);
};

const handleProjectBtnClick = (e) => {
  const parent = e.target.closest('.project-card');
  const addTodoBtn = parent.querySelector('.fa-plus');
  parent.classList.toggle('hide-todo-list');
  e.target.classList.toggle('flip');
  toggleProjectUtilButtons(parent);
  resetElementRotation(addTodoBtn);
  const todoForm = document.querySelector('.new-todo-form');
  removeElement(parent, todoForm);
};

const createFooterNums = (projectObj, parentElement) => {
  const numTodos = document.createElement('p');
  numTodos.classList.add('num-todos');
  numTodos.textContent = `${projectObj.todos.length} todo${
    projectObj.todos.length === 1 ? '' : 's'
  }`;
  parentElement.appendChild(numTodos);
};

const createNewTodoFormTitleInput = (parentElement) => {
  const newTitleContainer = document.createElement('div');
  newTitleContainer.classList.add('new-todo-form-container');
  const newTodoFormTitleLabel = document.createElement('label');
  newTodoFormTitleLabel.classList.add('new-todo-form-label');
  newTodoFormTitleLabel.htmlFor = 'new-todo-form-title-input';
  newTodoFormTitleLabel.textContent = 'Todo title:';
  const newTodoFormTitleInput = document.createElement('input');
  newTodoFormTitleInput.classList.add('new-todo-form-input');
  newTodoFormTitleInput.type = 'text';
  newTodoFormTitleInput.setAttribute('maxlength', '23');
  newTodoFormTitleInput.id = 'new-todo-form-title-input';
  newTodoFormTitleInput.required = true;
  newTitleContainer.appendChild(newTodoFormTitleLabel);
  newTitleContainer.appendChild(newTodoFormTitleInput);
  parentElement.appendChild(newTitleContainer);
};

const createNewTodoFormDescriptionInput = (parentElement) => {
  const newDescriptionContainer = document.createElement('div');
  newDescriptionContainer.classList.add('new-todo-form-container');
  const newTodoFormDescriptionLabel = document.createElement('label');
  newTodoFormDescriptionLabel.classList.add('new-todo-form-label');
  newTodoFormDescriptionLabel.htmlFor = 'new-todo-form-description-input';
  newTodoFormDescriptionLabel.textContent = 'Todo description:';
  const newTodoFormDescriptionInput = document.createElement('input');
  newTodoFormDescriptionInput.type = 'text';
  newTodoFormDescriptionInput.classList.add('new-todo-form-input');
  newTodoFormDescriptionInput.id = 'new-todo-form-description-input';
  newTodoFormDescriptionInput.required = true;
  newDescriptionContainer.appendChild(newTodoFormDescriptionLabel);
  newDescriptionContainer.appendChild(newTodoFormDescriptionInput);
  parentElement.appendChild(newDescriptionContainer);
};

const setTodayAsMinimumDueDate = () => {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; // Months act like an array so Jan is 0, etc.
  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  const todayFormatted = `${yyyy}-${mm}-${dd}`;
  return todayFormatted;
};

const createNewTodoFormDueDateInput = (parentElement) => {
  const newDueDateContainer = document.createElement('div');
  newDueDateContainer.classList.add('new-todo-form-container');
  const newTodoFormDueDateLabel = document.createElement('label');
  newTodoFormDueDateLabel.classList.add('new-todo-form-label');
  newTodoFormDueDateLabel.htmlFor = 'new-todo-form-due-date-input';
  newTodoFormDueDateLabel.textContent = 'Due date:';
  const newTodoFormDueDateInput = document.createElement('input');
  newTodoFormDueDateInput.type = 'date';
  newTodoFormDueDateInput.classList.add('new-todo-form-input');
  newTodoFormDueDateInput.id = 'new-todo-form-due-date-input';
  newTodoFormDueDateInput.required = true;
  newTodoFormDueDateInput.min = setTodayAsMinimumDueDate();
  newDueDateContainer.appendChild(newTodoFormDueDateLabel);
  newDueDateContainer.appendChild(newTodoFormDueDateInput);
  parentElement.appendChild(newDueDateContainer);
};

const createNewTodoFormPriorityInput = (parentElement) => {
  const newPriorityInputContainer = document.createElement('div');
  newPriorityInputContainer.classList.add('new-todo-form-container');
  const priorityLabel = document.createElement('label');
  priorityLabel.classList.add('new-todo-form-label');
  priorityLabel.textContent = 'Priority level:';
  priorityLabel.htmlFor = 'new-todo-form-priority-input';
  const priorityInput = document.createElement('select');
  priorityInput.classList.add('new-todo-form-input');
  priorityInput.id = 'new-todo-form-priority-input';
  priorityInput.required = true;
  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.disabled = true;
  defaultOption.selected = true;
  defaultOption.hidden = true;
  defaultOption.textContent = 'Choose priority level';
  priorityInput.appendChild(defaultOption);
  const highOption = document.createElement('option');
  highOption.value = 'high';
  highOption.textContent = 'high';
  priorityInput.appendChild(highOption);
  const mediumOption = document.createElement('option');
  mediumOption.value = 'medium';
  mediumOption.textContent = 'medium';
  priorityInput.appendChild(mediumOption);
  const lowOption = document.createElement('option');
  lowOption.value = 'low';
  lowOption.textContent = 'low';
  priorityInput.appendChild(lowOption);
  newPriorityInputContainer.appendChild(priorityLabel);
  newPriorityInputContainer.appendChild(priorityInput);
  parentElement.appendChild(newPriorityInputContainer);
};

const createSubmitBtn = (parentElement) => {
  const submitTodoBtn = document.createElement('button');
  submitTodoBtn.classList.add('submit-todo-btn');
  submitTodoBtn.textContent = 'Add todo';
  parentElement.appendChild(submitTodoBtn);
};

const onNewTodoSubmit = (e) => {
  e.preventDefault();
  const parentProject = e.target.closest('.project-card');
  const newTodoForm = document.querySelector('.new-todo-form');
  const todoList = parentProject.querySelector('.todo-list');
  const newTitle = document.querySelector('#new-todo-form-title-input');
  const newDescription = document.querySelector(
    '#new-todo-form-description-input'
  );
  const newDueDate = document.querySelector('#new-todo-form-due-date-input');
  const newPriority = document.querySelector('#new-todo-form-priority-input');
  const newTodo = Todo(
    newTitle.value,
    newDescription.value,
    newDueDate.value,
    newPriority.value
  );
  let todoArrayLength;
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].id === parentProject.id) {
      projects[i].todos.push(newTodo);
      todoArrayLength = projects[i].todos.length;
    }
  }
  createTodo(newTodo, todoList);
  resetElementRotation();
  removeElement(parentProject, newTodoForm);
  setLocalStorage();
  updateNumTodos(parentProject, todoArrayLength);
};

const createNewTodoForm = () => {
  const newTodoForm = document.createElement('form');
  newTodoForm.classList.add('new-todo-form');
  createNewTodoFormTitleInput(newTodoForm);
  createNewTodoFormDescriptionInput(newTodoForm);
  createNewTodoFormDueDateInput(newTodoForm);
  createNewTodoFormPriorityInput(newTodoForm);
  createSubmitBtn(newTodoForm);
  newTodoForm.addEventListener('submit', onNewTodoSubmit);
  return newTodoForm;
};

const toggleNewTodoForm = (e) => {
  const todoForm = document.querySelector('.new-todo-form');
  const parentProject = e.target.closest('.project-card');
  const projectAddTodoBtn = parentProject.querySelector('.fa-plus');
  if (!todoForm) {
    const projectFooter = parentProject.querySelector('.project-footer');
    const newTodoForm = createNewTodoForm();
    parentProject.insertBefore(newTodoForm, projectFooter);
    rotateElement(projectAddTodoBtn);
  } else {
    resetElementRotation(projectAddTodoBtn);
    removeElement(parentProject, todoForm);
  }
};

const createAddTodoBtn = (parentElement) => {
  const addTodoBtn = document.createElement('button');
  addTodoBtn.classList.add('add-todo-btn');
  const faPlus = document.createElement('i');
  faPlus.classList.add('fas');
  faPlus.classList.add('fa-plus');
  addTodoBtn.appendChild(faPlus);
  addTodoBtn.addEventListener('click', toggleNewTodoForm);
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
  createProjectCardHeader(project, projectCard);
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
