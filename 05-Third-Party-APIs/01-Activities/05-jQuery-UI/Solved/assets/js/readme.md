## 1. Variables and DOM Elements
<!-- 
var formEl = $('#skills-form');
var nameInputEl = $('#skill-name');
var dateInputEl = $('#datepicker');
var skillsListEl = $('#skills-list');
 -->
 	•	formEl: Selects the form element with the ID #skills-form. It will be used to handle form submissions.
	•	nameInputEl: Selects the input element where users enter the skill name (ID #skill-name).
	•	dateInputEl: Selects the input element for picking the date (ID #datepicker).
	•	skillsListEl: Selects the <ul> element with ID #skills-list where skills will be displayed.

These variables hold jQuery objects corresponding to specific form elements.

## 2. printSkills Function
<!-- 
var printSkills = function(name, date) {
  var listEl = $('<li>');
  var listDetail = name.concat(' on ', date);
  listEl.addClass('list-group-item').text(listDetail);
  listEl.appendTo(skillsListEl);
};
 -->
 	•	printSkills: A function that takes a name and a date as parameters. It creates a new list item (<li>) with these details and appends it to the skills list.
	•	$('<li>'): Dynamically creates a new <li> element using jQuery.
	•	listDetail: Combines the skill name and the date with the string ' on '. For example, “JavaScript on 2023-09-08”.
	•	listEl.addClass('list-group-item'): Adds the Bootstrap class list-group-item to style the list item.
	•	listEl.text(listDetail): Sets the text of the <li> to the combined name and date.
	•	listEl.appendTo(skillsListEl): Appends the new <li> element to the skillsListEl, which is the <ul> where the skills are listed.

## 3. handleFormSubmit Function
<!-- 
var handleFormSubmit = function(event) {
  event.preventDefault();

  var nameInput = nameInputEl.val();
  var dateInput = dateInputEl.val();

  if (!nameInput || !dateInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printSkills(nameInput, dateInput);

  // resets form
  nameInputEl.val('');
  dateInputEl.val('');
};
 -->
 	•	handleFormSubmit: This function is called when the form is submitted.
	•	event.preventDefault(): Prevents the default form submission behavior, which would normally refresh the page.
	•	nameInputEl.val() and dateInputEl.val(): These get the current values from the skill name and date input fields.
	•	if (!nameInput || !dateInput): This checks whether both fields are filled. If either is empty, the function logs a message (console.log('You need to fill out the form!')) and exits early (return).
	•	printSkills(nameInput, dateInput): Calls the printSkills function to add the new skill and date to the list.
	•	nameInputEl.val('') and dateInputEl.val(''): After adding the skill, these reset the input fields to empty strings.

## 4. Form Submission Event Listener
<!-- 
formEl.on('submit', handleFormSubmit);
 -->
 	•	formEl.on('submit', handleFormSubmit): This sets up an event listener that listens for the form’s submit event. When the form is submitted, the handleFormSubmit function is triggered.

## 5. Autocomplete Widget
<!-- 
$(function() {
  var skillNames = [
    'Bootstrap', 'C', 'C++', 'CSS', 'Express.js', 'Git', 'HTML', 'Java',
    'JavaScript', 'jQuery', 'JSON', 'MySQL', 'Node.js', 'NoSQL', 'PHP', 
    'Python', 'React', 'Ruby'
  ];
  $('#skill-name').autocomplete({
    source: skillNames
  });
});
 -->
 	•	$(function() {...}): A shorthand for running code when the document is ready. It ensures the DOM is fully loaded before the script runs.
	•	skillNames: An array of predefined skill names. These are options for the autocomplete feature.
	•	$('#skill-name').autocomplete({ source: skillNames }): Initializes the autocomplete widget on the skill name input (#skill-name). When the user types in the input, they will be shown suggestions from the skillNames array.

## 6. Datepicker Widget
<!-- 
$(function() {
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true
  });
});
 -->
 	•	$('#datepicker').datepicker(): Attaches a datepicker widget to the #datepicker input element. This widget allows users to select a date from a calendar popup.
	•	changeMonth: true, changeYear: true: Enables the user to change both the month and the year in the datepicker widget.

## 7. Sortable List Interaction
<!-- 
$(function() {
  $('#skills-list').sortable({
    placeholder: 'ui-state-highlight'
  });
  $('#skills-list').disableSelection();
});
 -->
 	•	$('#skills-list').sortable(): Turns the list (#skills-list) into a sortable list. This allows users to drag and drop list items to reorder them.
	•	placeholder: 'ui-state-highlight': Adds a visual placeholder (ui-state-highlight) when an item is being dragged, showing where it will drop.
	•	disableSelection(): Disables text selection while dragging, which makes the drag-and-drop interaction smoother.

## Summary

	•	Form Submission and Validation: The script handles form submissions, validates that both the skill name and date are filled out, and adds the new skill and date to a list.
	•	Autocomplete: The skill name input has an autocomplete feature, which suggests predefined skills as the user types.
	•	Datepicker: The date input uses a datepicker widget to make selecting dates easier.
	•	Sortable List: Users can reorder the list of skills by dragging and dropping the list items.