// Step 1: Let User Enter Name
function startQuiz() {
    const username = document.getElementById("username").value;
    if (username.trim() === "") {
      alert("Please enter your name.");
      return; // Stop execution if the name is empty
    }
  
    // Step 2: Hide the User Name Input Screen and Show the Quiz Screen
    document.getElementById("start-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
  
    // Step 3: Shuffle Questions
    questions = shuffleArray(questions);
  
    // Step 4: Display the First Question
    displayQuestion();
  
    // Step 5: Show the Next Question Button
    document.getElementById("next-question").style.display = "block";
  
    // Step 6: Start Timer Every Second
    startTimer();
  }
  
  // Step 3: Shuffle Questions Function
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Step 4: Display the First Question
  function displayQuestion() {
    const questionContainer = document.getElementById("question");
    const questionText = questions[currentQuestion].question;
    const options = questions[currentQuestion].options;
  
    const questionHtml = `
      <div class="question-number">Question ${currentQuestion + 1}:</div>
      <div class="question-text">${questionText}</div>
      <div class="options">
        ${options.map((option) => createOption(option)).join("")}
      </div>
    `;
    questionContainer.innerHTML = questionHtml;
  }
  
  // Step 7: Decrease the Time by 1 Second and Step 8: Stop Timer When Time's Up
  function startTimer() {
    timer = setInterval(function () {
      if (timeLeft > 0) {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
      } else {
        clearInterval(timer);
        document.getElementById("time").textContent = "Time's up!";
        disableOptions();
        setTimeout(nextQuestion, 2000); // Move to the next question after a short delay
      }
    }, 1000);
  }
  
  // Step 9: Disable All Options
  function disableOptions() {
    document.querySelectorAll('input[type="radio"]').forEach((input) => {
      input.disabled = true;
    });
  }
  
  // Step 10: Move to the Next Question
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      timeLeft = 36; // Reset the timer
      displayQuestion(); // Show the next question
      startTimer(); // Start the timer again
      document.getElementById("feedback").textContent = "";
    } else {
      showResult(); // Show the result if the quiz is finished
    }
  }