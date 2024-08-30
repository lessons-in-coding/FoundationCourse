var taskIdCounter = 0;

var formEl = document.querySelector("#task-form");
var pageContentEl = document.querySelector("#page-content");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var tasksInProgressEl = document.querySelector("#tasks-in-progress");
var tasksCompletedEl = document.querySelector("#tasks-completed");

// create array to hold tasks for saving
var tasks = [];

var taskFormHandler = function (event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // check if inputs are empty (validate)
  if (!taskNameInput || !taskTypeInput) {
    alert("You need to fill out the task form!");
    return false;
  }

  // reset form fields for next task to be entered
  document.querySelector("input[name='task-name']").value = "";
  document.querySelector("select[name='task-type']").selectedIndex = 0;

  // check if task is new or one being edited by seeing if it has a data-task-id attribute
  var isEdit = formEl.hasAttribute("data-task-id");

  if (isEdit) {
    var taskId = formEl.getAttribute("data-task-id");
    completeEditTask(taskNameInput, taskTypeInput, taskId);
  } else {
    var taskDataObj = {
      name: taskNameInput,
      type: taskTypeInput,
      status: "to do",
    };

    createTaskEl(taskDataObj);
  }
};

var createTaskEl = function(taskDataObj) {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.setAttribute("data-task-id", taskIdCounter);

  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML =
    "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  var taskActionsEl = createTaskActions(taskIdCounter);
  listItemEl.appendChild(taskActionsEl);

  switch (taskDataObj.status) {
    case "to do":
      taskActionsEl.querySelector("select[name='status-change']").selectedIndex = 0;
      /*
      let selectElement = document.querySelector("select[name='status-change']");
selectElement.selectedIndex = 1; // This would select "In Progress"
      */
      tasksToDoEl.append(listItemEl);
      break;
    case "in progress":
      taskActionsEl.querySelector("select[name='status-change']").selectedIndex = 1;
      tasksInProgressEl.append(listItemEl);
      break;
    case "completed":
      taskActionsEl.querySelector("select[name='status-change']").selectedIndex = 2;
      tasksCompletedEl.append(listItemEl);
      break;
    default:
      console.log("Something went wrong!");
  }

  // save task as an object with name, type, status, and id properties then push it into tasks array
  taskDataObj.id = taskIdCounter;

  tasks.push(taskDataObj);

  // save tasks to localStorage
  saveTasks();

  // increase task counter for next unique task id
  taskIdCounter++;
};
/*
<li class="task-item" data-task-id="1">
  <div class="task-info">
    <h3 class="task-name">Study JavaScript</h3>
    <span class="task-type">Programming</span>
  </div>
  <div class="task-actions">
    <button class="btn edit-btn" data-task-id="1">Edit</button>
    <button class="btn delete-btn" data-task-id="1">Delete</button>
    <select name="status-change" data-task-id="1" class="select-status">
      <option value="To Do">To Do</option>
      <option value="In Progress" selected>In Progress</option>
      <option value="Completed">Completed</option>
    </select>
  </div>
</li>
*/

var createTaskActions = function (taskId) {
  // create container to hold elements
  // <div class="task-actions"></div>
  var actionContainerEl = document.createElement("div");
  actionContainerEl.className = "task-actions";

  // create edit button
  // <button class="btn edit-btn" data-task-id="1">Edit</button>
  var editButtonEl = document.createElement("button");
  editButtonEl.textContent = "Edit";
  editButtonEl.className = "btn edit-btn";
  editButtonEl.setAttribute("data-task-id", taskId);
  actionContainerEl.appendChild(editButtonEl);
  // create delete button
  // <button class="btn delete-btn" data-task-id="1">Delete</button>
  var deleteButtonEl = document.createElement("button");
  deleteButtonEl.textContent = "Delete";
  deleteButtonEl.className = "btn delete-btn";
  deleteButtonEl.setAttribute("data-task-id", taskId);
  actionContainerEl.appendChild(deleteButtonEl);
  // create change status dropdown
  var statusSelectEl = document.createElement("select");
  statusSelectEl.setAttribute("name", "status-change");
  statusSelectEl.setAttribute("data-task-id", taskId);
  statusSelectEl.className = "select-status";
  actionContainerEl.appendChild(statusSelectEl);
  // create status options
  var statusChoices = ["To Do", "In Progress", "Completed"];

  for (var i = 0; i < statusChoices.length; i++) {
    // create option element
    var statusOptionEl = document.createElement("option");
    statusOptionEl.setAttribute("value", statusChoices[i]);
    statusOptionEl.textContent = statusChoices[i];

    // append to select
    statusSelectEl.appendChild(statusOptionEl);
  }

  return actionContainerEl;
//   <div class="task-actions">
//   <button class="btn edit-btn" data-task-id="1">Edit</button>
//   <button class="btn delete-btn" data-task-id="1">Delete</button>
//   <select name="status-change" data-task-id="1" class="select-status">
//     <option value="To Do">To Do</option>
//     <option value="In Progress">In Progress</option>
//     <option value="Completed">Completed</option>
//   </select>
// </div>
};

var completeEditTask = function (taskName, taskType, taskId) {
  // find task list item with taskId value
  var taskSelected = document.querySelector(
    ".task-item[data-task-id='" + taskId + "']"
  );

  // set new values
  taskSelected.querySelector("h3.task-name").textContent = taskName;
  taskSelected.querySelector("span.task-type").textContent = taskType;

  // loop through tasks array and task object with new content
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].id === parseInt(taskId)) {
      tasks[i].name = taskName;
      tasks[i].type = taskType;
    }
  }

  alert("Task Updated!");

  // remove data attribute from form
  formEl.removeAttribute("data-task-id");
  // update formEl button to go back to saying "Add Task" instead of "Edit Task"
  formEl.querySelector("#save-task").textContent = "Add Task";
  // save tasks to localStorage
  saveTasks();
};

var taskButtonHandler = function (event) {
  // get target element from event
  var targetEl = event.target;

  if (targetEl.matches(".edit-btn")) {
    console.log("edit", targetEl);
    var taskId = targetEl.getAttribute("data-task-id");
    editTask(taskId);
  } else if (targetEl.matches(".delete-btn")) {
    console.log("delete", targetEl);
    var taskId = targetEl.getAttribute("data-task-id");
    deleteTask(taskId);
  }
};

var taskStatusChangeHandler = function (event) {
  console.log(event.target.value);

  // find task list item based on event.target's data-task-id attribute
  // Step 1: Get the taskId from the event target (the dropdown)
  var taskId = event.target.getAttribute("data-task-id");

  // Step 2: Use taskId to find the entire task <li> element
  var taskSelected = document.querySelector(
    ".task-item[data-task-id='" + taskId + "']"
  );
  /*
    taskSelected = event.target.closest('.task-item');

	•	querySelector: Good for finding an element based on known attributes.
	•	closest: Ideal for event handling to find the nearest parent element that matches a selector.
  */

  // convert value to lower case
  // Now, taskSelected can be moved to another section based on status
  var statusValue = event.target.value.toLowerCase();

  if (statusValue === "to do") {
    tasksToDoEl.appendChild(taskSelected);
  } else if (statusValue === "in progress") {
    tasksInProgressEl.appendChild(taskSelected);
  } else if (statusValue === "completed") {
    tasksCompletedEl.appendChild(taskSelected);
  }

  // update task's in tasks array
  // Update the task's status in the tasks array and save
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].id === parseInt(taskId)) {
      tasks[i].status = statusValue;
    }
  }

  // save to localStorage
  saveTasks();
};

var editTask = function (taskId) {
  console.log(taskId);

  // get task list item element
  var taskSelected = document.querySelector(
    ".task-item[data-task-id='" + taskId + "']"
  );

  // get content from task name and type
  var taskName = taskSelected.querySelector("h3.task-name").textContent;
  console.log(taskName);

  var taskType = taskSelected.querySelector("span.task-type").textContent;
  console.log(taskType);

  // write values of taskName and taskType to form to be edited
  document.querySelector("input[name='task-name']").value = taskName;
  document.querySelector("select[name='task-type']").value = taskType;

  // set data attribute to the form with a value of the task's id so it knows which one is being edited
  formEl.setAttribute("data-task-id", taskId);
  // update form's button to reflect editing a task rather than creating a new one
  formEl.querySelector("#save-task").textContent = "Save Task";
};

var deleteTask = function (taskId) {
  console.log(taskId);
  // find task list element with taskId value and remove it
  var taskSelected = document.querySelector(
    ".task-item[data-task-id='" + taskId + "']"
  );
  taskSelected.remove();

  // create new array to hold updated list of tasks
  var updatedTaskArr = [];

  // loop through current tasks
  for (var i = 0; i < tasks.length; i++) {
    // if tasks[i].id doesn't match the value of taskId, let's keep that task and push it into the new array
    if (tasks[i].id !== parseInt(taskId)) {
      updatedTaskArr.push(tasks[i]);
    }
  }

  // reassign tasks array to be the same as updatedTaskArr
  tasks = updatedTaskArr;
  saveTasks();
};

var saveTasks = function() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

var loadTasks = function() {
  var savedTasks = localStorage.getItem("tasks");
  // if there are no tasks, set tasks to an empty array and return out of the function
  if (!savedTasks) {
    return false;
  }
  console.log("Saved tasks found!");
  // else, load up saved tasks

  // parse into array of objects
  savedTasks = JSON.parse(savedTasks);

  // loop through savedTasks array
  for (var i = 0; i < savedTasks.length; i++) {
    // pass each task object into the `createTaskEl()` function
    createTaskEl(savedTasks[i]);
  }
};

// Create a new task
formEl.addEventListener("submit", taskFormHandler);

// for edit and delete buttons
pageContentEl.addEventListener("click", taskButtonHandler);

// for changing the status
pageContentEl.addEventListener("change", taskStatusChangeHandler);

loadTasks();

/*
Here’s an updated grouping of functions based on different user interactions, including all the functions you mentioned:

1. First Time Creating a New Task (No Other Saved Tasks)

	•	taskFormHandler(event): Handles form submission when creating a new task.
	•	Checks if the form fields (task-name and task-type) are filled.
	•	If it’s a new task (i.e., no data-task-id attribute on the form), it creates a new task object and calls createTaskEl(taskDataObj) to add the task to the list.
	•	createTaskEl(taskDataObj): Creates the HTML structure for the new task.
	•	Generates a unique data-task-id for the task.
	•	Adds the task to the appropriate task list (To Do, In Progress, Completed).
	•	Calls createTaskActions(taskId) to add Edit and Delete buttons to the task.
	•	Pushes the task object into the tasks array.
	•	Calls saveTasks() to save the tasks to localStorage.
	•	createTaskActions(taskId): Creates the Edit and Delete buttons for the task.
	•	Adds event listeners to the buttons for handling edits and deletions.
	•	saveTasks(): Saves the current state of the tasks array to localStorage.
	•	loadTasks(): Loads tasks from localStorage when the page is loaded.
	•	Calls createTaskEl(task) for each task retrieved from localStorage to render it on the page.

2. User Clicks Edit Button

	•	taskButtonHandler(event): Detects when the Edit button is clicked.
	•	Calls editTask(taskId) with the taskId of the task to be edited.
	•	editTask(taskId): Prepares the task for editing.
	•	Retrieves the task details (name, type) and populates them in the form fields.
	•	Changes the form button text to “Save Task” and sets the data-task-id attribute on the form to the taskId.
	•	taskFormHandler(event): When the form is submitted after editing, this function detects if the form has a data-task-id attribute and proceeds to complete the task editing process by calling completeEditTask(taskName, taskType, taskId).
	•	completeEditTask(taskName, taskType, taskId): Handles the form submission for editing.
	•	Updates the task’s details in both the UI and the tasks array.
	•	Calls saveTasks() to save the updated tasks to localStorage.
	•	Changes the form button text back to “Add Task” and removes the data-task-id attribute.

3. User Clicks Delete Button

	•	taskButtonHandler(event): Detects when the Delete button is clicked.
	•	Calls deleteTask(taskId) with the taskId of the task to be deleted.
	•	deleteTask(taskId): Removes the task from the list.
	•	Removes the task element from the DOM.
	•	Filters out the deleted task from the tasks array.
	•	Calls saveTasks() to save the updated tasks to localStorage.

4. User Selects to Change Status

	•	taskStatusChangeHandler(event): Handles changes in task status.
	•	Detects the new status selected by the user (from dropdown or other UI elements).
	•	Moves the task to the corresponding list (To Do, In Progress, Completed).
	•	Updates the task’s status in the tasks array.
	•	Calls saveTasks() to save the updated tasks to localStorage.

Summary of Function Roles:

	•	Task Creation: taskFormHandler, createTaskEl, createTaskActions, saveTasks.
	•	Task Editing: taskButtonHandler, editTask, completeEditTask, saveTasks.
	•	Task Deletion: taskButtonHandler, deleteTask, saveTasks.
	•	Status Change: taskStatusChangeHandler, saveTasks.
	•	Loading Tasks: loadTasks.

This grouping now includes all the functions you mentioned, showing how they interact during different user actions.
*/
