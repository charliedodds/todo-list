/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst Project = (title) => {\n  return {\n    title,\n    todos: [],\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n\n//# sourceURL=webpack://todo-list/./src/Project.js?");

/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst Todo = (title, description, due, priority) => {\n  const toggleCompletion = () => {\n    isCompleted = !isCompleted;\n  };\n  return {\n    title,\n    description,\n    due,\n    priority,\n    isCompleted: false,\n    toggleCompletion,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n\n//# sourceURL=webpack://todo-list/./src/Todo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo */ \"./src/Todo.js\");\n\n\n\nconst projects = [];\n\nconst instructionsProject = (0,_Project__WEBPACK_IMPORTED_MODULE_0__.default)('Open me to start');\n\nconst firstTodo = (0,_Todo__WEBPACK_IMPORTED_MODULE_1__.default)(\n  'Add new todo',\n  'Add ability to add new todo',\n  'now',\n  'high'\n);\ninstructionsProject.todos.push(firstTodo);\n\ninstructionsProject.todos.push(\n  (0,_Todo__WEBPACK_IMPORTED_MODULE_1__.default)('Add new project', 'Add ability to add new projects', 'today', 'medium')\n);\n\ninstructionsProject.todos.push(\n  (0,_Todo__WEBPACK_IMPORTED_MODULE_1__.default)(\n    'Add edit/delete buttons',\n    'Add ability to \"open\" todos, edit and delete them',\n    'sometime',\n    'low'\n  )\n);\n\nprojects.push(instructionsProject);\n\nconsole.log(projects);\n\nconst createProjectCardTitle = (projectObj, parentProject) => {\n  const projectTitle = document.createElement('h3');\n  projectTitle.classList.add('project-title');\n  projectTitle.textContent = projectObj.title;\n  parentProject.appendChild(projectTitle);\n};\n\nconst createProjectTodos = (projectTodos, parentProject) => {\n  const todoList = document.createElement('ul');\n  todoList.classList.add('todo-list');\n  for (let i = 0; i < projectTodos.length; i++) {\n    const todoItem = document.createElement('li');\n    todoItem.classList.add('todo-item');\n    const todoItemContainer = document.createElement('div');\n    todoItemContainer.classList.add('todo-item-container');\n    const todoCheck = document.createElement('input');\n    todoCheck.type = 'checkbox';\n    todoCheck.classList.add('todo-check');\n    todoItemContainer.appendChild(todoCheck);\n    const todoItemTask = document.createElement('div');\n    todoItemTask.classList.add('todo-item-task');\n    todoItemTask.textContent = projectTodos[i].title;\n    todoItemContainer.appendChild(todoItemTask);\n    const utilContainer = document.createElement('div');\n    utilContainer.classList.add('todo-item-utils');\n    const editBtn = document.createElement('button');\n    editBtn.classList.add('todo-edit-btn');\n    const faEdit = document.createElement('i');\n    faEdit.classList.add('fas');\n    faEdit.classList.add('fa-pen');\n    editBtn.appendChild(faEdit);\n    utilContainer.appendChild(editBtn);\n    const deleteBtn = document.createElement('button');\n    deleteBtn.classList.add('todo-delete-btn');\n    const faDelete = document.createElement('i');\n    faDelete.classList.add('fas');\n    faDelete.classList.add('fa-trash');\n    deleteBtn.appendChild(faDelete);\n    utilContainer.appendChild(deleteBtn);\n\n    todoItemContainer.appendChild(utilContainer);\n    todoItem.appendChild(todoItemContainer);\n    todoList.appendChild(todoItem);\n  }\n  parentProject.appendChild(todoList);\n};\n\nconst handleProjectBtnClick = (e) => {\n  e.target.parentElement.parentElement.parentElement.classList.toggle(\n    'hide-todo-list'\n  );\n  e.target.classList.toggle('flip-down');\n  e.target.classList.toggle('flip-up');\n};\n\nconst createProjectCardFooter = (projectObj, parentProject) => {\n  const projectFooter = document.createElement('footer');\n  projectFooter.classList.add('project-footer');\n  const numTodos = document.createElement('p');\n  numTodos.classList.add('num-todos');\n  numTodos.textContent = `${projectObj.todos.length} todo${\n    projectObj.todos.length === 1 ? '' : 's'\n  }`;\n  projectFooter.appendChild(numTodos);\n  const addTodoBtn = document.createElement('button');\n  addTodoBtn.classList.add('add-todo-btn');\n  const faPlus = document.createElement('i');\n  faPlus.classList.add('fas');\n  faPlus.classList.add('fa-plus');\n  addTodoBtn.appendChild(faPlus);\n  projectFooter.appendChild(addTodoBtn);\n  const projectBtn = document.createElement('button');\n  projectBtn.classList.add('project-button');\n  const faChevron = document.createElement('i');\n  faChevron.classList.add('fas');\n  faChevron.classList.add('fa-chevron-up');\n  faChevron.classList.add('flip-down');\n  projectBtn.appendChild(faChevron);\n  projectBtn.addEventListener('click', handleProjectBtnClick);\n  projectFooter.appendChild(projectBtn);\n  parentProject.appendChild(projectFooter);\n};\n\nconst createProjectCard = (project) => {\n  const main = document.querySelector('main');\n  const projectCard = document.createElement('section');\n  projectCard.classList.add('project-card');\n  projectCard.classList.add('hide-todo-list');\n  createProjectCardTitle(project, projectCard);\n  createProjectTodos(project.todos, projectCard);\n  createProjectCardFooter(project, projectCard);\n  main.appendChild(projectCard);\n  return projectCard;\n};\n\nconst addProjectBtn = document.querySelector('.add-project-btn');\nconst addProjectForm = document.querySelector('.add-project-form');\nconst projectTitleInput = document.querySelector('#project-title-input');\n\nconst toggleAddProjectForm = (e) => {\n  addProjectForm.classList.toggle('hide-form');\n  projectTitleInput.value = '';\n};\n\naddProjectBtn.addEventListener('click', toggleAddProjectForm);\n\nconst createProject = (e) => {\n  e.preventDefault();\n  const newProject = (0,_Project__WEBPACK_IMPORTED_MODULE_0__.default)(projectTitleInput.value);\n  projects.push(newProject);\n  createProjectCard(newProject);\n  toggleAddProjectForm();\n  console.log(projects);\n};\n\naddProjectForm.addEventListener('submit', createProject);\n\nfor (let i = 0; i < projects.length; i++) {\n  console.log(projects[i]);\n  createProjectCard(projects[i]);\n}\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;