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

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ rng\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nvar getRandomValues;\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation. Also,\n    // find the complete implementation of crypto (msCrypto) on IE11.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction stringify(arr) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (var i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\n\nconst Project = (title) => {\n  const id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.default)();\n  return {\n    title,\n    id,\n    todos: [],\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n\n//# sourceURL=webpack://todo-list/./src/Project.js?");

/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\n\nconst Todo = (title, description, due, priority) => {\n  const toggleCompletion = () => {\n    console.log('BEFORE ', isCompleted);\n    isCompleted = !isCompleted;\n    console.log('AFTER ', isCompleted);\n  };\n\n  const id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n  return {\n    title,\n    id,\n    description,\n    due,\n    priority,\n    isCompleted: false,\n    toggleCompletion,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n\n//# sourceURL=webpack://todo-list/./src/Todo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo */ \"./src/Todo.js\");\n\n\n\nif (!localStorage.getItem('projects')) {\n  localStorage.setItem('projects', '[]');\n}\n\nconst projects = JSON.parse(localStorage.getItem('projects'));\n\nconst createInitialProject = () => {\n  const instructionsProject = (0,_Project__WEBPACK_IMPORTED_MODULE_0__.default)('Open me to start');\n\n  const firstTodo = (0,_Todo__WEBPACK_IMPORTED_MODULE_1__.default)(\n    'Add new todo',\n    'Add ability to add new todo',\n    'now',\n    'high'\n  );\n  instructionsProject.todos.push(firstTodo);\n\n  instructionsProject.todos.push(\n    (0,_Todo__WEBPACK_IMPORTED_MODULE_1__.default)(\n      'Add new project',\n      'Add ability to add new projects',\n      'today',\n      'medium'\n    )\n  );\n\n  instructionsProject.todos.push(\n    (0,_Todo__WEBPACK_IMPORTED_MODULE_1__.default)(\n      'Add edit/delete buttons',\n      'Add ability to \"open\" todos, edit and delete them',\n      'sometime',\n      'low'\n    )\n  );\n\n  projects.push(instructionsProject);\n};\n\nif (projects.length < 1) {\n  createInitialProject();\n}\n\nconst removeElement = (parent, element) => {\n  if (element) {\n    parent.removeChild(element);\n  }\n};\n\nconst createProjectCardTitle = (projectObj, parentProject) => {\n  const projectTitle = document.createElement('h3');\n  projectTitle.classList.add('project-title');\n  projectTitle.textContent = projectObj.title;\n  parentProject.appendChild(projectTitle);\n};\n\nconst createEditBtn = (parentElement) => {\n  const editBtn = document.createElement('button');\n  editBtn.classList.add('todo-edit-btn');\n  const faEdit = document.createElement('i');\n  faEdit.classList.add('fas');\n  faEdit.classList.add('fa-pen');\n  editBtn.appendChild(faEdit);\n  parentElement.appendChild(editBtn);\n};\n\nconst deleteTodo = (e) => {\n  const parentProject = e.target.closest('.project-card');\n  const parentTodo = e.target.closest('.todo-item');\n  const project = projects.find((project) => project.id === parentProject.id);\n  project.todos = project.todos.filter((todo) => todo.id !== parentTodo.id);\n  const projectTodoList = parentProject.querySelector('.todo-list');\n  projectTodoList.removeChild(parentTodo);\n};\n\nconst createDeleteBtn = (parentElement) => {\n  const deleteBtn = document.createElement('button');\n  deleteBtn.classList.add('todo-delete-btn');\n  const faDelete = document.createElement('i');\n  faDelete.classList.add('fas');\n  faDelete.classList.add('fa-trash');\n  deleteBtn.appendChild(faDelete);\n  deleteBtn.addEventListener('click', deleteTodo);\n  parentElement.appendChild(deleteBtn);\n};\n\nconst createUtilBtns = (parentElement) => {\n  const utilContainer = document.createElement('div');\n  utilContainer.classList.add('todo-item-utils');\n  createEditBtn(utilContainer);\n  createDeleteBtn(utilContainer);\n  parentElement.appendChild(utilContainer);\n};\n\nconst toggleCompletion = (e) => {\n  e.stopPropagation();\n  console.log(e);\n};\n\nconst createCheckbox = (parentElement) => {\n  const todoCheck = document.createElement('input');\n  todoCheck.type = 'checkbox';\n  todoCheck.classList.add('todo-check');\n  todoCheck.addEventListener('click', toggleCompletion);\n  parentElement.appendChild(todoCheck);\n};\n\nconst handleTodoClick = (e) => {\n  toggleTodoDescription(e);\n  toggleUtilButtons(e);\n};\n\nconst toggleOpacity = (element) => {\n  if (!element.style.opacity || element.style.opacity === '0') {\n    element.style.opacity = 1;\n    element.style.pointerEvents = 'unset';\n  } else {\n    element.style.opacity = 0;\n    element.style.pointerEvents = 'none';\n  }\n};\n\nconst toggleUtilButtons = (e) => {\n  const utilButtons = e.target.nextElementSibling.nextElementSibling;\n  toggleOpacity(utilButtons);\n};\n\nconst toggleTodoDescription = (e) => {\n  const todoDescription = e.target.closest('.todo-item').children[1];\n  if (\n    !todoDescription.style.display ||\n    todoDescription.style.display === 'none'\n  ) {\n    todoDescription.style.display = 'block';\n  } else {\n    todoDescription.style.display = 'none';\n  }\n};\n\nconst createTodoTask = (todo, parentElement) => {\n  const todoItemTask = document.createElement('h3');\n  todoItemTask.classList.add('todo-item-task');\n  todoItemTask.textContent = todo.title;\n  todoItemTask.addEventListener('click', handleTodoClick);\n  parentElement.appendChild(todoItemTask);\n};\n\nconst createPriorityMarker = (todo, parentElement) => {\n  const priorityMarker = document.createElement('div');\n  priorityMarker.classList.add('priority-marker');\n  priorityMarker.textContent = todo.priority;\n  switch (todo.priority) {\n    case 'low':\n      priorityMarker.classList.add('low');\n      break;\n    case 'medium':\n      priorityMarker.classList.add('medium');\n      break;\n    case 'high':\n      priorityMarker.classList.add('high');\n      break;\n  }\n  parentElement.appendChild(priorityMarker);\n};\n\nconst createTodoContainer = (todo, parentElement) => {\n  const todoItemContainer = document.createElement('div');\n  todoItemContainer.classList.add('todo-item-container');\n  createCheckbox(todoItemContainer);\n  createTodoTask(todo, todoItemContainer);\n  createPriorityMarker(todo, todoItemContainer);\n  createUtilBtns(todoItemContainer);\n  parentElement.appendChild(todoItemContainer);\n};\n\nconst createTodoDescription = (todo, parentElement) => {\n  const todoDescription = document.createElement('div');\n  todoDescription.classList.add('todo-description');\n  todoDescription.textContent = todo.description;\n  parentElement.appendChild(todoDescription);\n};\n\nconst createTodo = (todo, parentElement) => {\n  const todoItem = document.createElement('li');\n  todoItem.classList.add('todo-item');\n  todoItem.id = todo.id;\n  createTodoContainer(todo, todoItem);\n  createTodoDescription(todo, todoItem);\n  parentElement.appendChild(todoItem);\n};\n\nconst createProjectTodos = (projectTodos, parentProject) => {\n  const todoList = document.createElement('ul');\n  todoList.classList.add('todo-list');\n  for (let i = 0; i < projectTodos.length; i++) {\n    createTodo(projectTodos[i], todoList);\n  }\n  parentProject.appendChild(todoList);\n};\n\nconst resetAddTodoBtn = () => {\n  const plusIcon = document.querySelector('.fa-plus');\n  plusIcon.style.transform = 'rotate(0deg)';\n};\n\nconst rotateAddTodoBtn = () => {\n  const plusIcon = document.querySelector('.fa-plus');\n  if (\n    !plusIcon.style.transform ||\n    plusIcon.style.transform === 'rotate(0deg)'\n  ) {\n    plusIcon.style.transform = 'rotate(45deg)';\n  } else {\n    plusIcon.style.transform = 'rotate(0deg)';\n  }\n};\n\nconst handleProjectBtnClick = (e) => {\n  const parent = e.target.closest('.project-card');\n  parent.classList.toggle('hide-todo-list');\n  e.target.classList.toggle('flip');\n  resetAddTodoBtn();\n  const todoForm = document.querySelector('.new-todo-form');\n  removeElement(parent, todoForm);\n};\n\nconst createFooterNums = (projectObj, parentElement) => {\n  const numTodos = document.createElement('p');\n  numTodos.classList.add('num-todos');\n  numTodos.textContent = `${projectObj.todos.length} todo${\n    projectObj.todos.length === 1 ? '' : 's'\n  }`;\n  parentElement.appendChild(numTodos);\n};\n\nconst createNewTodoFormTitleInput = (parentElement) => {\n  const newTitleContainer = document.createElement('div');\n  newTitleContainer.classList.add('new-todo-form-container');\n  const newTodoFormTitleLabel = document.createElement('label');\n  newTodoFormTitleLabel.classList.add('new-todo-form-label');\n  newTodoFormTitleLabel.htmlFor = 'new-todo-form-title-input';\n  newTodoFormTitleLabel.textContent = 'Todo title:';\n  const newTodoFormTitleInput = document.createElement('input');\n  newTodoFormTitleInput.classList.add('new-todo-form-input');\n  newTodoFormTitleInput.type = 'text';\n  newTodoFormTitleInput.setAttribute('maxlength', '23');\n  newTodoFormTitleInput.id = 'new-todo-form-title-input';\n  newTodoFormTitleInput.required = true;\n  newTitleContainer.appendChild(newTodoFormTitleLabel);\n  newTitleContainer.appendChild(newTodoFormTitleInput);\n  parentElement.appendChild(newTitleContainer);\n};\n\nconst createNewTodoFormDescriptionInput = (parentElement) => {\n  const newDescriptionContainer = document.createElement('div');\n  newDescriptionContainer.classList.add('new-todo-form-container');\n  const newTodoFormDescriptionLabel = document.createElement('label');\n  newTodoFormDescriptionLabel.classList.add('new-todo-form-label');\n  newTodoFormDescriptionLabel.htmlFor = 'new-todo-form-description-input';\n  newTodoFormDescriptionLabel.textContent = 'Todo description:';\n  const newTodoFormDescriptionInput = document.createElement('input');\n  newTodoFormDescriptionInput.type = 'text';\n  newTodoFormDescriptionInput.classList.add('new-todo-form-input');\n  newTodoFormDescriptionInput.id = 'new-todo-form-description-input';\n  newTodoFormDescriptionInput.required = true;\n  newDescriptionContainer.appendChild(newTodoFormDescriptionLabel);\n  newDescriptionContainer.appendChild(newTodoFormDescriptionInput);\n  parentElement.appendChild(newDescriptionContainer);\n};\n\nconst setTodayAsMinimumDueDate = () => {\n  const today = new Date();\n  let dd = today.getDate();\n  let mm = today.getMonth() + 1; // Months act like an array so Jan is 0, etc.\n  const yyyy = today.getFullYear();\n  if (dd < 10) {\n    dd = '0' + dd;\n  }\n  if (mm < 10) {\n    mm = '0' + mm;\n  }\n  const todayFormatted = `${yyyy}-${mm}-${dd}`;\n  return todayFormatted;\n};\n\nconst createNewTodoFormDueDateInput = (parentElement) => {\n  const newDueDateContainer = document.createElement('div');\n  newDueDateContainer.classList.add('new-todo-form-container');\n  const newTodoFormDueDateLabel = document.createElement('label');\n  newTodoFormDueDateLabel.classList.add('new-todo-form-label');\n  newTodoFormDueDateLabel.htmlFor = 'new-todo-form-due-date-input';\n  newTodoFormDueDateLabel.textContent = 'Due date:';\n  const newTodoFormDueDateInput = document.createElement('input');\n  newTodoFormDueDateInput.type = 'date';\n  newTodoFormDueDateInput.classList.add('new-todo-form-input');\n  newTodoFormDueDateInput.id = 'new-todo-form-due-date-input';\n  newTodoFormDueDateInput.required = true;\n  newTodoFormDueDateInput.min = setTodayAsMinimumDueDate();\n  newDueDateContainer.appendChild(newTodoFormDueDateLabel);\n  newDueDateContainer.appendChild(newTodoFormDueDateInput);\n  parentElement.appendChild(newDueDateContainer);\n};\n\nconst createNewTodoFormPriorityInput = (parentElement) => {\n  const newPriorityInputContainer = document.createElement('div');\n  newPriorityInputContainer.classList.add('new-todo-form-container');\n  const priorityLabel = document.createElement('label');\n  priorityLabel.classList.add('new-todo-form-label');\n  priorityLabel.textContent = 'Priority level:';\n  priorityLabel.htmlFor = 'new-todo-form-priority-input';\n  const priorityInput = document.createElement('select');\n  priorityInput.classList.add('new-todo-form-input');\n  priorityInput.id = 'new-todo-form-priority-input';\n  priorityInput.required = true;\n  const defaultOption = document.createElement('option');\n  defaultOption.value = '';\n  defaultOption.disabled = true;\n  defaultOption.selected = true;\n  defaultOption.hidden = true;\n  defaultOption.textContent = 'Choose priority level';\n  priorityInput.appendChild(defaultOption);\n  const highOption = document.createElement('option');\n  highOption.value = 'high';\n  highOption.textContent = 'high';\n  priorityInput.appendChild(highOption);\n  const mediumOption = document.createElement('option');\n  mediumOption.value = 'medium';\n  mediumOption.textContent = 'medium';\n  priorityInput.appendChild(mediumOption);\n  const lowOption = document.createElement('option');\n  lowOption.value = 'low';\n  lowOption.textContent = 'low';\n  priorityInput.appendChild(lowOption);\n  newPriorityInputContainer.appendChild(priorityLabel);\n  newPriorityInputContainer.appendChild(priorityInput);\n  parentElement.appendChild(newPriorityInputContainer);\n};\n\nconst createSubmitBtn = (parentElement) => {\n  const submitTodoBtn = document.createElement('button');\n  submitTodoBtn.classList.add('submit-todo-btn');\n  submitTodoBtn.textContent = 'Add todo';\n  parentElement.appendChild(submitTodoBtn);\n};\n\nconst onNewTodoSubmit = (e) => {\n  e.preventDefault();\n  const parentProject = e.target.closest('.project-card');\n  const newTodoForm = document.querySelector('.new-todo-form');\n  const todoList = parentProject.querySelector('.todo-list');\n  const newTitle = document.querySelector('#new-todo-form-title-input');\n  const newDescription = document.querySelector(\n    '#new-todo-form-description-input'\n  );\n  const newDueDate = document.querySelector('#new-todo-form-due-date-input');\n  const newPriority = document.querySelector('#new-todo-form-priority-input');\n  const newTodo = (0,_Todo__WEBPACK_IMPORTED_MODULE_1__.default)(\n    newTitle.value,\n    newDescription.value,\n    newDueDate.value,\n    newPriority.value\n  );\n  for (let i = 0; i < projects.length; i++) {\n    if (projects[i].id === parentProject.id) {\n      projects[i].todos.push(newTodo);\n    }\n    console.log(projects[i]);\n  }\n  createTodo(newTodo, todoList);\n  resetAddTodoBtn();\n  removeElement(parentProject, newTodoForm);\n};\n\nconst createNewTodoForm = () => {\n  const newTodoForm = document.createElement('form');\n  newTodoForm.classList.add('new-todo-form');\n  createNewTodoFormTitleInput(newTodoForm);\n  createNewTodoFormDescriptionInput(newTodoForm);\n  createNewTodoFormDueDateInput(newTodoForm);\n  createNewTodoFormPriorityInput(newTodoForm);\n  createSubmitBtn(newTodoForm);\n  newTodoForm.addEventListener('submit', onNewTodoSubmit);\n  return newTodoForm;\n};\n\nconst toggleNewTodoForm = (e) => {\n  const todoForm = document.querySelector('.new-todo-form');\n  const parentProject = e.target.closest('.project-card');\n  if (!todoForm) {\n    const projectFooter = parentProject.querySelector('.project-footer');\n    const newTodoForm = createNewTodoForm();\n    parentProject.insertBefore(newTodoForm, projectFooter);\n    rotateAddTodoBtn();\n  } else {\n    resetAddTodoBtn();\n    removeElement(parentProject, todoForm);\n  }\n};\n\nconst createAddTodoBtn = (parentElement) => {\n  const addTodoBtn = document.createElement('button');\n  addTodoBtn.classList.add('add-todo-btn');\n  const faPlus = document.createElement('i');\n  faPlus.classList.add('fas');\n  faPlus.classList.add('fa-plus');\n  addTodoBtn.appendChild(faPlus);\n  addTodoBtn.addEventListener('click', toggleNewTodoForm);\n  parentElement.appendChild(addTodoBtn);\n};\n\nconst createProjectToggler = (parentElement) => {\n  const projectBtn = document.createElement('button');\n  projectBtn.classList.add('project-button');\n  const faChevron = document.createElement('i');\n  faChevron.classList.add('fas');\n  faChevron.classList.add('fa-chevron-down');\n  projectBtn.appendChild(faChevron);\n  projectBtn.addEventListener('click', handleProjectBtnClick);\n  parentElement.appendChild(projectBtn);\n};\n\nconst createProjectCardFooter = (projectObj, parentProject) => {\n  const projectFooter = document.createElement('footer');\n  projectFooter.classList.add('project-footer');\n  createFooterNums(projectObj, projectFooter);\n  createAddTodoBtn(projectFooter);\n  createProjectToggler(projectFooter);\n  parentProject.appendChild(projectFooter);\n};\n\nconst createProjectCard = (project) => {\n  const main = document.querySelector('main');\n  const projectCard = document.createElement('section');\n  projectCard.classList.add('project-card');\n  projectCard.classList.add('hide-todo-list');\n  projectCard.id = project.id;\n  createProjectCardTitle(project, projectCard);\n  createProjectTodos(project.todos, projectCard);\n  createProjectCardFooter(project, projectCard);\n  main.appendChild(projectCard);\n  return projectCard;\n};\n\n// add new project logic\n\nconst addProjectBtn = document.querySelector('.add-project-btn');\nconst addProjectForm = document.querySelector('.add-project-form');\nconst projectTitleInput = document.querySelector('#project-title-input');\n\nconst toggleAddProjectForm = (e) => {\n  addProjectForm.classList.toggle('hide-form');\n  projectTitleInput.value = '';\n};\n\naddProjectBtn.addEventListener('click', toggleAddProjectForm);\n\nconst createProject = (e) => {\n  e.preventDefault();\n  const newProject = (0,_Project__WEBPACK_IMPORTED_MODULE_0__.default)(projectTitleInput.value);\n  projects.push(newProject);\n  createProjectCard(newProject);\n  toggleAddProjectForm();\n};\n\naddProjectForm.addEventListener('submit', createProject);\n\n// create initial project\n\nfor (let i = 0; i < projects.length; i++) {\n  createProjectCard(projects[i]);\n}\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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