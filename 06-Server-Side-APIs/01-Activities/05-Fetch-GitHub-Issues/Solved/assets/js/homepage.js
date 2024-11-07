var userFormEl = document.querySelector('#user-form');
var languageButtonsEl = document.querySelector('#language-buttons');
var nameInputEl = document.querySelector('#username');
var repoContainerEl = document.querySelector('#repos-container');
var repoSearchTerm = document.querySelector('#repo-search-term');

var formSubmitHandler = function (event) {
  event.preventDefault();  // Prevents the default form submission behavior (page refresh)

  var username = nameInputEl.value.trim();  // Gets and trims the entered username

  if (username) {
    getUserRepos(username);  // Calls the function to get repos if the username is valid

    repoContainerEl.textContent = '';  // Clears the repository container for new data
    nameInputEl.value = '';  // Clears the input field after submission
  } else {
    alert('Please enter a GitHub username');  // If no username was entered, show an alert
  }
};

var buttonClickHandler = function (event) {
  var language = event.target.getAttribute('data-language');  // Gets the language from the button clicked

  if (language) {
    getFeaturedRepos(language);  // Calls the function to get repos for the selected language

    repoContainerEl.textContent = '';  // Clears previous search results
  }
};

var getUserRepos = function (user) {
  var apiUrl = 'https://api.github.com/users/' + user + '/repos';// API URL for fetching user repos

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);// Calls displayRepos with fetched data
          displayRepos(data, user);
        });
      } else {
        alert('Error: ' + response.statusText); // If the response is not okay, show an error
      }
    })
    .catch(function (error) {
      alert('Unable to connect to GitHub'); // Catches network errors
    });
};

var getFeaturedRepos = function (language) {
  var apiUrl = 'https://api.github.com/search/repositories?q=' + language + '+is:featured&sort=help-wanted-issues'; // API URL to search for featured repos by language

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayRepos(data.items, language);// Passes the data to the displayRepos function
      });
    } else {
      alert('Error: ' + response.statusText);// If there’s an issue, display an error message
    }
  });
};

var displayRepos = function (repos, searchTerm) {
  if (repos.length === 0) {
    repoContainerEl.textContent = 'No repositories found.';
    return;
  }

  repoSearchTerm.textContent = searchTerm; // Displays the search term (username or language)

  for (var i = 0; i < repos.length; i++) {
    var repoName = repos[i].owner.login + '/' + repos[i].name; // Constructs the repository name

    var repoEl = document.createElement('a'); // Creates a clickable link for the repo
    repoEl.classList = 'list-item flex-row justify-space-between align-center';
    repoEl.setAttribute('href', './single-repo.html?repo=' + repoName);

    var titleEl = document.createElement('span');
    titleEl.textContent = repoName; // Sets the name of the repo in the span

    repoEl.appendChild(titleEl); // Adds the repo name to the anchor element

    var statusEl = document.createElement('span');
    statusEl.classList = 'flex-row align-center';

    if (repos[i].open_issues_count > 0) {
      statusEl.innerHTML =
        "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + ' issue(s)';
    } else {
      statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
    }

    repoEl.appendChild(statusEl); // Appends the issue status to the repo element

    repoContainerEl.appendChild(repoEl); // Adds the repo to the container
  }
};
// 	•	repoSearchTerm.textContent = searchTerm: Displays the search term (either username or programming language).
// 	•	statusEl: Adds the open issue count for each repository, displaying different icons based on the number of issues.

userFormEl.addEventListener('submit', formSubmitHandler); // Listens for form submission (search by username)
languageButtonsEl.addEventListener('click', buttonClickHandler);   // Listens for clicks on the language buttons

// 	•	The code allows users to search for GitHub repositories by username or programming language.
// •	It fetches data from GitHub’s API and displays the relevant repositories with open issue counts.
// •	The form and buttons are set up with event listeners to handle user input dynamically.
