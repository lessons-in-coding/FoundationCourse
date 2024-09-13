var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

function handleFormSubmit(event) {
  event.preventDefault();

  var shoppingItem = $('input[name="shopping-input"]').val();

  if (!shoppingItem) {
    console.log('No shopping item filled out in form!');
    return;
  }

  var shoppingListItemEl = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  shoppingListItemEl.text(shoppingItem);

  // add delete button to remove shopping list item
  shoppingListItemEl.append(
    '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
  );

  // print to the page
  shoppingListEl.append(shoppingListItemEl);

  // clear the form input element
  $('input[name="shopping-input"]').val('');
}

function handleRemoveItem(event) {
  // convert button we pressed (`event.target`) to a jQuery DOM object
  var btnClicked = $(event.target);

  // get the parent `<li>` element from the button we pressed and remove it
  btnClicked.parent('li').remove();
}

// use event delegation on the `shoppingListEl` to listen for click on any element with a class of `delete-item-btn`
shoppingListEl.on('click', '.delete-item-btn', handleRemoveItem);
shoppingFormEl.on('submit', handleFormSubmit);

/*
// Get the form and list elements by their IDs
var shoppingForm = document.getElementById('shopping-form');
var shoppingList = document.getElementById('shopping-list');

// Handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the value of the input field
  var shoppingItem = document.querySelector('input[name="shopping-input"]').value;

  // If the input is empty, log a message and stop
  if (!shoppingItem) {
    console.log('No shopping item filled out in form!');
    return;
  }

  // Create a new list item (li) and set its text to the shopping item
  var listItem = document.createElement('li');
  listItem.className = 'flex-row justify-space-between align-center p-2 bg-light text-dark';
  listItem.textContent = shoppingItem;

  // Create a remove button and add it to the list item
  var removeButton = document.createElement('button');
  removeButton.className = 'btn btn-danger btn-small delete-item-btn';
  removeButton.textContent = 'Remove';
  listItem.appendChild(removeButton);

  // Add the list item to the shopping list
  shoppingList.appendChild(listItem);

  // Clear the input field
  document.querySelector('input[name="shopping-input"]').value = '';
}

// Handle item removal when the remove button is clicked
function handleRemoveItem(event) {
  if (event.target.classList.contains('delete-item-btn')) {
    event.target.parentElement.remove();
  }
}

// Set up event listeners
shoppingForm.addEventListener('submit', handleFormSubmit);
shoppingList.addEventListener('click', handleRemoveItem);
*/

/*
Difference Between Clearing and Removing an Input:

	•	Clearing an Input:
	•	To clear the content of an input field, you use .val(''), which sets the value of the input to an empty string. The input element remains on the page, and users can continue to enter new data.

  $('input[name="shopping-input"]').val('');

  	•	Removing an Input:
	•	Using .remove() would delete the input element from the DOM entirely, meaning it disappears from the page and can’t be used again until reloaded or re-added.

  $('input[name="shopping-input"]').remove();

  When to Use Each:
====================
	•	Clear the Input Field: Use .val('') to reset the input field after each submission, allowing the user to enter a new item.
	•	Remove the Input Field: Use .remove() if you want to permanently or temporarily remove the input element from the page, which is rarely what you want when handling form inputs like this.
*/