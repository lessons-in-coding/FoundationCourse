## 1. Task Management Functions

	•	tasks = {}:
This is an empty object that will store tasks categorized by their status (toDo, inProgress, inReview, done). Each status will have an array of task objects (with text and date properties).
	•	createTask(taskText, taskDate, taskList) function:
This function creates a task dynamically and appends it to the respective task list (toDo, inProgress, etc.). Here’s the breakdown:
	•	It creates a list item (<li>) element for the task, with two children:
	•	A <span> for the task’s due date, styled with Bootstrap classes.
	•	A <p> for the task description.
	•	It appends the <span> and <p> to the <li>.
	•	The auditTask(taskLi) function checks the task’s due date and applies appropriate styling based on whether it’s overdue or near the due date.
	•	Finally, it appends the task item to the task list on the page (#list-[taskList]).

## 2. Loading and Saving Tasks

	•	loadTasks function:
This function retrieves tasks from localStorage and loads them into the tasks object. If there is no data in localStorage, it initializes empty arrays for each task status. The function then iterates over each status and creates tasks using createTask for each entry in the array.
	•	saveTasks function:
This function saves the current state of the tasks object into localStorage. It converts the tasks object into a JSON string using JSON.stringify().

## 3. Task Date Audit

	•	auditTask(taskEl) function:
This function checks the due date of a task and applies different Bootstrap classes depending on how close or overdue the task is:
	•	If the task’s date has passed, it adds the class list-group-item-danger (red background).
	•	If the task is due in two days or less, it adds the class list-group-item-warning (yellow background).

## 4. Task Sorting and Drag & Drop

	•	Sortable Feature:
The .sortable() function makes the task lists sortable (i.e., tasks can be dragged between lists). Here’s what happens when dragging a task:
	•	The task lists are connected (connectWith) so tasks can be dragged across lists.
	•	When a task is dragged, certain visual feedback is provided using classes like dropover, bottom-trash-drag, and dropover-active.
	•	When a task is dropped into a new list, the update function is triggered. It:
	•	Loops through the tasks in the updated list.
	•	Updates the tasks object with the new order of tasks and saves it to localStorage.

## 5. Deleting Tasks

	•	Droppable Trash Icon:
The #trash element is droppable, which means tasks can be dragged to it to be deleted. When a task is dropped on the trash, the task is removed from the DOM.

## 6. Task Editing

	•	Editing Task Text:
When a task description (<p>) is clicked, it is replaced with a <textarea> so the text can be edited. When the textarea loses focus (blur event), the updated task text is saved to the tasks array and localStorage, and the <textarea> is replaced with a new <p>.
	•	Editing Task Due Date:
When the due date (<span>) is clicked, it is replaced with an <input type="text"> element that is hooked up to a jQuery date picker. Once a new date is selected and the input loses focus, the date is updated in the tasks array and localStorage, and the <input> is replaced by a new <span>.

## 7. Task Modal

	•	Adding a Task via Modal:
When the modal is triggered (opened via show.bs.modal), it clears the input fields for task description and due date. After the user enters values and clicks the save button (.btn-save), a new task is created and added to the toDo list. It is also saved to localStorage.

## 8. Clearing All Tasks

	•	#remove-tasks button:
This button clears all tasks from the page and from the tasks object. It empties the task arrays and removes all the tasks from the DOM using .empty() on each list.

## 9. Auto Auditing Task Due Dates

	•	setInterval Function:
Every 30 minutes, the tasks’ due dates are checked using the auditTask function. This ensures that if a task becomes overdue, the appropriate styling is applied automatically.

Key Features Using jQuery:

	•	Dynamic DOM Manipulation:
The code dynamically creates, updates, and removes elements from the DOM using jQuery methods like .append(), .replaceWith(), .remove(), etc.
	•	Event Handling:
The code listens for various events (click, blur, change, etc.) using jQuery’s .on() and .click() methods. These events are used for editing tasks, adding tasks, and interacting with the UI.

## Key Libraries:

	•	Bootstrap:
Provides the layout (grid system) and styling (e.g., badge, list-group-item, modal, etc.).
	•	jQuery:
Used extensively for DOM manipulation and event handling.
	•	jQuery UI:
Provides the sortable feature and the date picker.
	•	Moment.js:
A library for parsing, validating, and manipulating dates. Here, it’s used to calculate the task’s due date and determine if it’s overdue.

In summary, the code implements a robust task management system where users can create, edit, delete, and sort tasks, with real-time updates and deadline management. Key concepts like DOM manipulation, event handling, and usage of libraries (Bootstrap, jQuery, Moment.js) are employed to provide a smooth user experience.