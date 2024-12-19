// Declare Variables
let taskIdCounter = 0;

// create array to hold tasks for saving
let tasks = [];

// Select Elements
const formEl = document.querySelector("#task-form");
const pageContentEl = document.querySelector("#page-content");
const tasksToDoEl = document.querySelector("#tasks-to-do");
const tasksInProgressEl = document.querySelector("#tasks-in-progress");
const tasksCompletedEl = document.querySelector("#tasks-completed");

/*
// 1. Task Creation:
taskFormHandler(), 
createTaskEl(), createTaskActions(), 
saveTasks()
*/
// Handle form submission
const taskFormHandler = (event) => {
  event.preventDefault();
  const taskName = document.querySelector("input[name='task-name']").value;
  const taskType = document.querySelector("select[name='task-type']").value;

  if (!taskName || !taskType) {
    alert("You need to fill out the task form!");
    return;
  }

  var isEdit = formEl.hasAttribute("data-task-id");

  if (isEdit) {
    // Handle editing an existing task
    const taskId = formEl.getAttribute("data-task-id");
    completeEditTask(taskName, taskType, taskId);
  } else {
    // Create a new task
    createTaskEl({ name: taskName, type: taskType, status: "to do" });
  }
  /*
  else{
  var taskData = {
      name: taskName,
      type: taskType,
      status: "to do",
    };
  createTaskEl(taskData);
  }
  */

  /*
  // reset form fields for next task to be entered
  document.querySelector("input[name='task-name']").value = "";
  document.querySelector("select[name='task-type']").selectedIndex = 0;
  */

  // Clear the form fields
  formEl.reset();
};

/*
//ဒီလိုပုံစံကို တည်ဆောက်ဖို့ createTaskEl()
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

// Create a new task element
const createTaskEl = (taskData) => {
  const listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.setAttribute("data-task-id", taskIdCounter);

  /*
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML =
    "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  var taskActionsEl = createTaskActions(taskIdCounter);
  listItemEl.appendChild(taskActionsEl);
  */

  listItemEl.innerHTML = `
    <div class='task-info'>
      <h3 class='task-name'>${taskData.name}</h3>
      <span class='task-type'>${taskData.type}</span>
    </div>
  `;

  listItemEl.appendChild(createTaskActions(taskIdCounter));

  switch (taskData.status) {
    case "to do":
      /*
      // option ရဲ့ index ကို သတ်မှတ်ချင်လို့၊ မပါလဲ ရပါတယ်
      taskActionsEl.querySelector("select[name='status-change']").selectedIndex = 0;

      let selectElement = document.querySelector("select[name='status-change']");
      selectElement.selectedIndex = 1; // This would select "In Progress"
      */
      tasksToDoEl.appendChild(listItemEl);
      break;
    case "in progress":
      tasksInProgressEl.appendChild(listItemEl);
      break;
    case "completed":
      tasksCompletedEl.appendChild(listItemEl);
      break;
    // မပါလဲရသည်
    // default:
    //   console.log("Something went wrong!");
  }

  /*
  if (taskData.status === "to do") {
    tasksToDoEl.appendChild(listItemEl);
} else if (taskData.status === "in progress") {
    tasksInProgressEl.appendChild(listItemEl);
} else if (taskData.status === "completed") {
    tasksCompletedEl.appendChild(listItemEl);
} else {
  console.log("Something went wrong!")
}
  */

  /*
// save task as an object with name, type, status, and id properties then push it into tasks array
  taskDataObj.id = taskIdCounter;

  tasks.push(taskDataObj);

  // increase task counter for next unique task id
  taskIdCounter++;

  // tasks.push(taskData, taskIdCounter++) လို့တစ်ခါတည်းရေးလဲရသည်

  // save tasks to localStorage
  saveTasks();
*/

  tasks.push({ ...taskData, id: taskIdCounter++ });
  saveTasks();
};

/*
// IIEF
// Define and immediately invoke the function
((taskData) => {
  const listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.setAttribute("data-task-id", taskIdCounter);

  listItemEl.innerHTML = `
    <div class='task-info'>
      <h3 class='task-name'>${taskData.name}</h3>
      <span class='task-type'>${taskData.type}</span>
    </div>
  `;
  listItemEl.appendChild(createTaskActions(taskIdCounter));

  switch (taskData.status) {
    case "to do":
      tasksToDoEl.appendChild(listItemEl);
      break;
    case "in progress":
      tasksInProgressEl.appendChild(listItemEl);
      break;
    case "completed":
      tasksCompletedEl.appendChild(listItemEl);
      break;
  }

  tasks.push({ ...taskData, id: taskIdCounter++ });
  saveTasks();
})({ name: taskName, type: taskType, status: "to do" });

*/

/*
//ဒီလိုပုံစံတည်ဆောက်ဖို့ createTaskActions()
  <div class="task-actions">
  <button class="btn edit-btn" data-task-id="1">Edit</button>
  <button class="btn delete-btn" data-task-id="1">Delete</button>
  <select name="status-change" data-task-id="1" class="select-status">
    <option value="To Do">To Do</option>
    <option value="In Progress">In Progress</option>
    <option value="Completed">Completed</option>
  </select>
</div>
*/

// Create actions (edit, delete, status change) for a task
const createTaskActions = (taskId) => {
  // create container to hold elements <div class="task-actions"></div>
  const actionContainerEl = document.createElement("div");
  actionContainerEl.className = "task-actions";

  /*
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
  */

  actionContainerEl.innerHTML = `
    <button class="btn edit-btn" data-task-id="${taskId}">Edit</button>
    <button class="btn delete-btn" data-task-id="${taskId}">Delete</button>
    <select name="status-change" data-task-id="${taskId}" class="select-status">
      <option value="To Do">To Do</option>
      <option value="In Progress">In Progress</option>
      <option value="Completed">Completed</option>
    </select>
  `;
  return actionContainerEl;
};
/*
// Explaination of CreateTaskActions()
1.	createTaskActions: A function that takes a taskId parameter.
2.	actionContainerEl: A <div> element is created to hold the task action elements.
3.	HTML Content:
	•	An “Edit” button with a data-task-id attribute set to the taskId.
	•	A “Delete” button with a data-task-id attribute set to the taskId.
	•	A dropdown menu to change the task’s status, also including a data-task-id attribute.
4.	Returns: The function returns the <div> element (actionContainerEl) with all the buttons and dropdown menu inside it.
*/

// Save tasks to localStorage
const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

/*
// 2. Task Editing: 
taskButtonHandler(), 
editTask(), completeEditTask(), 
saveTasks()
*/

// Handle edit and delete button clicks
const taskButtonHandler = (event) => {
  /*
  //long way
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
  */
  const taskId = event.target.getAttribute("data-task-id");
  if (event.target.matches(".edit-btn")) {
    editTask(taskId);
  } else if (event.target.matches(".delete-btn")) {
    deleteTask(taskId);
  }
};
/*
// explanation of taskButtonHandler()
1.	Retrieve Task ID: Gets the unique task ID from the button that was clicked.
2.	Edit Task: If the button is an “edit” button, it calls editTask with the task ID to edit the specific task.
3.	Delete Task: If the button is a “delete” button, it calls deleteTask with the task ID to delete the specific task.
*/

// editTask Function
const editTask = (taskId) => {
  // Find the task item with the given ID
  const task = document.querySelector(`.task-item[data-task-id='${taskId}']`);

  // Retrieve the current task details
  // get content from task name and type
  const taskName = task.querySelector(".task-name").textContent;
  const taskType = task.querySelector(".task-type").textContent;
  // console.log(taskName);
  // console.log(taskType);

  // Populate the form with the task details
  document.querySelector("input[name='task-name']").value = taskName;
  document.querySelector("select[name='task-type']").value = taskType;

  // Set a data attribute on the form to indicate which task is being edited
  formEl.setAttribute("data-task-id", taskId);

  // Update the form's button text to "Save Task" to indicate editing
  formEl.querySelector("#save-task").textContent = "Save Task";
};

// completeEdit task
const completeEditTask = (taskName, taskType, taskId) => {
  // find task list item with taskId value
  /*
  var taskSelected = document.querySelector(
    ".task-item[data-task-id='" + taskId + "']"
  );
  */
  const task = document.querySelector(`.task-item[data-task-id='${taskId}']`);

  // set new values
  task.querySelector(".task-name").textContent = taskName;
  task.querySelector(".task-type").textContent = taskType;

  /*
  //same as below
  // loop through tasks array and task object with new content
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].id === parseInt(taskId)) {
      tasks[i].name = taskName;
      tasks[i].type = taskType;
    }
  }
    // alert("Task Updated!");
  */

  const taskObj = tasks.find((task) => task.id == taskId);
  taskObj.name = taskName;
  taskObj.type = taskType;

  alert("Task Updated!");

  formEl.removeAttribute("data-task-id");
  // update formEl button to go back to saying "Add Task" instead of "Edit Task"
  formEl.querySelector("#save-task").textContent = "Add Task";
  saveTasks();
};
/*
// Explaination of completeEditTask()
1.	Find the Task: The function locates the specific task element in the DOM using its taskId.
2.	Update DOM Elements: The task’s name and type are updated in the UI.
3.	Update Task Object: The task object in the tasks array is updated with the new name and type.
4.	Reset Form: The form’s data-task-id attribute is removed, and the button text is changed to indicate the form is now used for adding new tasks.
5.	Save Changes: The saveTasks function is called to persist the updated task list.
*/

/*
// 3. Task Deletion: 
taskButtonHandler(), 
deleteTask(), 
saveTasks()
*/

// deleteTask Function
const deleteTask = (taskId) => {
  // Find the task item with the given ID and remove it from the DOM
  const task = document.querySelector(`.task-item[data-task-id='${taskId}']`);

  /*
  if (task) {
    task.remove();
  }
  */
  task.remove() //can be used without if condition

  /*
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
  */
  // Remove the task from the tasks array
  tasks = tasks.filter((task) => task.id !== parseInt(taskId));

  // Save the updated tasks list to localStorage
  saveTasks();
};

/*
// 4. Status Change: 
taskStatusChangeHandler(), 
saveTasks()
*/
// Change task status
const taskStatusChangeHandler = (event) => {
  // 	Retrieve the Task ID
  // Step 1: Get the taskId from the event target (the dropdown)
  const taskId = event.target.getAttribute("data-task-id");
  //   Get the Selected Status
  const statusValue = event.target.value.toLowerCase();
  //   Find the Task Element
  // Step 2: Use taskId to find the entire task <li> element
  const task = document.querySelector(`.task-item[data-task-id='${taskId}']`);

  /*
  task = event.target.closest('.task-item');
	•	querySelector: Good for finding an element based on known attributes.
	•	closest: Ideal for event handling to find the nearest parent element that matches a selector.
  */

  //   Move the Task to the Correct List
  // တစ်ခုတည်းလုပ်တာဆိုယင် { } ဖြုတ်ထားလို့ရတယ်
  if (statusValue === "to do") tasksToDoEl.appendChild(task);
  else if (statusValue === "in progress") tasksInProgressEl.appendChild(task);
  else if (statusValue === "completed") tasksCompletedEl.appendChild(task);

  /*
  // Update the task's status in the tasks array and save
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].id === parseInt(taskId)) {
      tasks[i].status = statusValue;
    }
  }
  */
  //   Update the Task Object
  const taskObj = tasks.find((task) => task.id == taskId);
  taskObj.status = statusValue;

  //   Save the Updated Task List
  saveTasks();
};

/*
// 5. Loading Tasks: 
loadTasks()
*/
// Load saved tasks from localStorage
const loadTasks = () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  savedTasks.forEach((task) => createTaskEl(task));

  /*
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
  */
};

// Event listeners
formEl.addEventListener("submit", taskFormHandler);
pageContentEl.addEventListener("click", taskButtonHandler);
pageContentEl.addEventListener("change", taskStatusChangeHandler);

// Load tasks on page load
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