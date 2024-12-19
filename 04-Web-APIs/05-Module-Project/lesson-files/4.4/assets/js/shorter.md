## 1. Set Up Initial Variables and Select Elements

   ### Declare Variables:
	•	taskIdCounter: A variable to keep track of task IDs, starting at 0.
	•	tasks: An array to store tasks for saving.
   ### Select Elements:
	•	formEl: Selects the form element with ID #task-form.
	•	tasksToDoEl, tasksInProgressEl, tasksCompletedEl: Select elements where tasks will be displayed based on their status.
	•	pageContentEl: Selects the element with ID #page-content for handling user actions like edit, delete, and status change.

## 2. Handle Task Form Submission

   ### Form Submission:
	•	Listen for form submissions, preventing the default behavior.
	•	Retrieve user inputs (task name and type) and validate them (ensure they are not empty).
	•	If editing a task, update the task; otherwise, create a new task with the entered details.

## 3. Create Task Element

   ### Create New Task:
	•	Create a new task element (li) and assign a unique data-task-id attribute.
	•	Add task details (name and type) and action buttons (edit, delete, status change).
	•	Append the task to the appropriate status list (To Do, In Progress, Completed).
	•	Save the task in the tasks array and localStorage, and increment the taskIdCounter.

## 4. Create Task Action Buttons

   ### Add Task Buttons:
	•	Create action buttons (Edit, Delete) and a status dropdown menu (To Do, In Progress, Completed).
	•	Attach appropriate attributes and append them to the task element.

## 5. Edit Existing Task

   ### Edit Task:
	•	Allow the user to update a task’s name and type. Once edited, update the task in the list and the tasks array.

## 6. Handle Task Actions (Edit/Delete)

   ### Handle Actions:
	•	Listen for clicks on the task actions (Edit, Delete buttons) and handle them accordingly.

## 7. Change Task Status

   ### Change Status:
	•	Listen for changes in the task status dropdown. Move the task to the correct list and update its status in the tasks array.

## 8. Load Saved Tasks

   ### Load Tasks:
	•	Load tasks from localStorage and recreate them using the createTaskEl() function.

## 9. Save and Delete Tasks

   ### Save to LocalStorage:
	•	Save the tasks array to localStorage whenever a task is added, edited, or deleted.


## Explanation:
	•	Initialization: Define a task counter, an empty array to hold tasks, and cache DOM elements used frequently.
	•	Form Handling: The taskFormHandler function processes the form submission. It resets the form after submission and either edits an existing task or creates a new one.
	•	Task Creation: createTaskEl creates a new task element in the DOM and appends it to the corresponding section (To Do, In Progress, Completed).
	•	Actions Creation: createTaskActions generates the Edit, Delete buttons, and the status dropdown for each task.
	•	Task Editing: completeEditTask updates the task’s name and type and saves the changes.
	•	Button Handling: taskButtonHandler delegates the click events for Edit and Delete buttons.
	•	Status Change: taskStatusChangeHandler moves the task to the appropriate section based on the status selected.
	•	Local Storage: loadTasks loads saved tasks from localStorage, and saveTasks saves the current state of tasks to localStorage.