## 1. Let User Enter Name

	• Create an input field where the user can enter their name.
	• Retrieve the value entered by the user and validate it (e.g., ensure it’s not empty).

## 2. Hide the User Name Input Screen and Show the Quiz Screen

	• After the user enters their name, hide the start screen (e.g., by setting its display property to none).
	• Display the quiz screen by setting its display property to block.

## 3. Shuffle Questions

	• Randomize the order of the questions in your questions array to ensure each quiz session is different.
	• You can use a shuffleArray() function to do this.

## 4. Display the First Question

	• Show the first question and its options on the quiz screen.
	• This might involve setting the inner HTML of a container to show the current question and its options.

## 5. Show the Next Question Button

	• Make the “Next” button visible so the user can proceed to the next question after answering the current one.

## 6. Start Timer Every Second

	• Start a countdown timer that runs every second.
	• This can be done using setInterval().

## 7. Decrease the Time by 1 Second

	• With each tick of the timer, reduce the remaining time by 1 second.
	• Update the displayed time accordingly.

## 8. Stop Timer When Time’s Up

	• When the time reaches zero, stop the timer.
	• This can be done by calling clearInterval() on the timer.

## 9. Disable All Options

	• Once time is up or the user selects an answer, disable all options to prevent further changes.
	• This can be done by setting the disabled attribute on each option.

## 10. Move to the Next Question
	• After disabling the options, move to the next question by incrementing the currentQuestion index.
	• If there are more questions, display the next one; otherwise, show the final result.

## Explanation:
	• startQuiz(): This function is triggered when the quiz starts. It handles the user’s name input, hides the start screen, shows the quiz screen, shuffles the questions, and initiates the display of the first question and the timer.
	• shuffleArray(): Randomizes the order of the questions.
	• displayQuestion(): Updates the HTML to show the current question and its options.
	• startTimer(): Starts the countdown, reducing the time by 1 second at each interval, and stops when time runs out.
	• disableOptions(): Prevents users from changing their answers once the time is up or they have selected an answer.
	• nextQuestion(): Moves the quiz to the next question or shows the result if the quiz is complete.