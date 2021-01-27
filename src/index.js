import Project from './Project';
import Todo from './Todo';

const projects = [];

const instructionsProject = Project('Instructions');

const firstTodo = Todo('Add Todo', 'Add a todo to this project', 'now', 'high');
instructionsProject.todos.push(firstTodo);

instructionsProject.todos.push(
  Todo('Add Second Todo', 'Add another todo to this project', 'today', 'medium')
);

const secondProject = Project('Second Project');

secondProject.todos.push(
  Todo(
    'Second project todo',
    'this is a second project todo',
    'tomorrow',
    'low'
  )
);

projects.push(instructionsProject);
projects.push(secondProject);

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
    const todo = document.createElement('li');
    todo.classList.add('todo-item');
    todo.textContent = projectTodos[i].title;
    todoList.appendChild(todo);
  }
  parentProject.appendChild(todoList);
};

const createProjectCardNums = (projectObj, parentProject) => {
  const numTodos = document.createElement('p');
  numTodos.classList.add('num-todos');
  numTodos.textContent = `${projectObj.todos.length} todo${
    projectObj.todos.length === 1 ? '' : 's'
  }`;
  parentProject.appendChild(numTodos);
};

const createProjectCard = (project) => {
  const bod = document.body;
  const projectCard = document.createElement('section');
  projectCard.classList.add('project-card');
  createProjectCardTitle(project, projectCard);
  createProjectTodos(project.todos, projectCard);
  createProjectCardNums(project, projectCard);
  bod.appendChild(projectCard);
  return projectCard;
};

const handleProjectCardClick = (e) => {
  e.target.classList.toggle('expand');
};

for (let i = 0; i < projects.length; i++) {
  console.log(projects[i]);
  const project = createProjectCard(projects[i]);
  project.addEventListener('click', handleProjectCardClick);
}

console.log(firstTodo);
