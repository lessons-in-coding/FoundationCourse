var repoNameEl = document.querySelector('#repo-name');
var issueContainerEl = document.querySelector('#issues-container');
var limitWarningEl = document.querySelector('#limit-warning');

var getRepoName = function () {
  // This is coming from the URL search bar in the browser. It is what comes after the `?`.
  var queryString = document.location.search; // Gets the query string from the URL
  var repoName = queryString.split('=')[1]; // Extracts the repository name from the query string

  if (repoName) {
    repoNameEl.textContent = repoName;  // Displays the repository name in the UI

    getRepoIssues(repoName); // Fetches the repository issues
  } else {
    // This will run and return to the homepage if there was nothing in the URL query parameter.
    document.location.replace('./index.html'); // Redirects to the homepage if no repo name is found
  }
};

/*
	•	queryString: Extracts the part of the URL that follows the ?, which contains the repository name.
	•	repoName.split('=')[1]: Retrieves the repository name by splitting the URL at = and taking the second part.
	•	getRepoIssues(repoName): Calls another function to fetch the issues for the repo.
	•	document.location.replace('./index.html'): Redirects the user back to the homepage if no repo name is found in the URL.
*/

var getRepoIssues = function (repo) {
  var apiUrl = 'https://api.github.com/repos/' + repo + '/issues?direction=asc';

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayIssues(data);

        // Since GitHub only returns 30 results at a time, we check to see if there's more than 30 by looking for a next page URL in the response headers.
        if (response.headers.get('Link')) {
          displayWarning(repo);
        }
      });
    } else {
      document.location.replace('./index.html');
    }
  });
};

/*
	•	apiUrl: Constructs the GitHub API URL to fetch issues for the specified repository.
	•	fetch(apiUrl): Makes a network request to the GitHub API to retrieve the issues.
	•	response.ok: Checks if the response from GitHub was successful.
	•	response.headers.get('Link'): If there’s a “Link” header in the response, it indicates that there are more than 30 issues. A warning message will be displayed if more issues are available than what was fetched.
*/

var displayIssues = function (issues) {
  // This will check for strict equality. Using `!issues.length` works, but only because JavaScript considers `0` to be `falsy`.
  if (issues.length === 0) {
    issueContainerEl.textContent = 'This repo has no open issues!';
    return;
  }

  for (var i = 0; i < issues.length; i++) {
    var issueEl = document.createElement('a');
    issueEl.classList = 'list-item flex-row justify-space-between align-center';
    issueEl.setAttribute('href', issues[i].html_url);
    issueEl.setAttribute('target', '_blank');

    var titleEl = document.createElement('span');
    titleEl.textContent = issues[i].title;
    issueEl.appendChild(titleEl);

    var typeEl = document.createElement('span');

    // If there's already a pull request open, it's a good idea we focus on other open issues that no one has worked on.
    if (issues[i].pull_request) {
      typeEl.textContent = '(Pull request)';
    } else {
      typeEl.textContent = '(Issue)';
    }

    issueEl.appendChild(typeEl);

    issueContainerEl.appendChild(issueEl);
  }
};

/*
	•	if (issues.length === 0): Checks if the repository has no open issues, in which case a message is displayed.
	•	issueEl: Creates a clickable link for each issue. Each link opens the issue in a new tab (target="_blank").
	•	titleEl.textContent = issues[i].title: Displays the issue title.
	•	typeEl: Determines if the issue is a pull request or a regular issue, and displays this next to the title.
*/

// When there are more issues than what GitHub has returned, we let the user know by printing a message with a link to the page.
var displayWarning = function (repo) {
  limitWarningEl.textContent = 'To see more than 30 issues, visit ';

  var linkEl = document.createElement('a');
  linkEl.textContent = 'GitHub.com';
  linkEl.setAttribute('href', 'https://github.com/' + repo + '/issues');
  linkEl.setAttribute('target', '_blank');

  // This will appear on the bottom of the page.
  limitWarningEl.appendChild(linkEl);
};

/*
	•	limitWarningEl.textContent: Informs users that only 30 issues are shown and provides a link to view more.
	•	linkEl.setAttribute('href', 'https://github.com/' + repo + '/issues'): Constructs a link to the repository’s GitHub page where users can view more issues.
	•	target="_blank": Ensures that the link opens in a new tab.
*/

getRepoName();

/*
Difference Between "homepage.js" and "single.js"

	1.	Primary Focus:
	•	Previous Code: Focused on searching and displaying repositories based on a GitHub username or programming language.
	•	This Code: Focuses on displaying issues for a specific repository that is selected through a URL parameter.
	2.	URL Handling:
	•	Previous Code: User input (GitHub username or programming language) was taken from an input field or button click.
	•	This Code: The repository name is extracted directly from the URL query string.
	3.	GitHub API Usage:
	•	Previous Code: Uses different GitHub API endpoints to fetch repositories (/users/{username}/repos and /search/repositories?q={language}).
	•	This Code: Uses the GitHub API to fetch issues for a specific repository (/repos/{repo}/issues).
	4.	Pagination and Limits:
	•	Previous Code: Did not handle pagination or API limits explicitly.
	•	This Code: Includes logic to detect if the GitHub API returned more than 30 issues and displays a warning with a link to view more.
	5.	Displaying Issues vs Repositories:
	•	Previous Code: Displays repositories and their open issue counts.
	•	This Code: Displays specific issues for a repository, including whether they are pull requests or regular issues.

Conclusion

	•	The first code example is designed for searching and displaying repositories, whereas the second example focuses on displaying issues from a single repository based on the URL. Both examples interact with GitHub’s API but focus on different aspects of repository management (searching vs issues).
*/
