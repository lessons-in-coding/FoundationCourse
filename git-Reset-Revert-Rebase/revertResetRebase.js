/*
1. Git Reset

git reset is used to undo changes by moving the HEAD and optionally updating the working directory and staging area. It changes the history of your branch and can be destructive, meaning it can erase commits.

Modes of git reset

	•	--soft: Moves the HEAD to a specified commit but leaves the changes from the undone commits in the staging area.
	•	--mixed (default): Moves the HEAD to a specified commit, unstages the changes from the undone commits but keeps them in the working directory.
	•	--hard: Moves the HEAD to a specified commit and removes all changes from the undone commits, both from the staging area and the working directory.

A -- B -- C -- D (HEAD)

You want to undo the last commit D.

	•	git reset --soft HEAD~1:
	•	Moves HEAD to C, but keeps the changes from D in the staging area.
	•	git reset --mixed HEAD~1:
	•	Moves HEAD to C, unstages the changes from D, but keeps them in your working directory.
	•	git reset --hard HEAD~1:
	•	Moves HEAD to C and removes the changes from D entirely.

After a --hard reset:

A -- B -- C (HEAD)
	•	Commit D is gone, and its changes are lost.

•	git reset is typically used in the current branch and affects the commit history of that branch. It is often used in local branches where rewriting history is acceptable.
*/

/*
2. Git Revert

git revert is used to create a new commit that undoes the changes introduced by an earlier commit. This command is safer because it doesn’t rewrite the history; instead, it adds a new commit.

Example:

Continuing from the previous scenario:

A -- B -- C -- D (HEAD)

To undo the changes in commit D, but keep the history intact:

	•	git revert D:

This creates a new commit E that undoes the changes made in D.

A -- B -- C -- D -- E (HEAD)
	•	Commit D still exists in history, but its changes are reversed by E.

•	git revert is safe to use on shared branches like master because it doesn’t alter the commit history; it just adds a new commit.
*/

/*
3. Git Rebase

git rebase is used to move or combine a sequence of commits to a new base commit. It’s often used to clean up a feature branch before merging it into the main branch.

Example:

Suppose you have a branch feature based off master:

master: A -- B -- C
feature:        C -- D -- E

You can rebase feature onto the latest master:

	•	git checkout feature
	•	git rebase master:

This replays the commits D and E on top of master, making it look like this:

master: A -- B -- C -- D' -- E' (feature)
Here, D' and E' are new commits with the same changes as D and E, but with a different base.

•	git rebase can be applied to feature branches before merging into a shared branch. It’s generally not recommended to rebase commits that have already been pushed to a shared branch because it rewrites history.
*/

/*
Key Differences and Use Cases

	•	git reset:
	•	Purpose: Undo commits by moving HEAD and optionally removing changes.
	•	Use Case: When you want to remove or adjust the most recent commits in a branch, especially in local or private branches.
	•	Caution: Be careful with --hard as it permanently deletes changes.
	•	git revert:
	•	Purpose: Safely undo a commit by creating a new commit that reverses the changes.
	•	Use Case: When you need to undo changes in a shared branch without altering commit history.
	•	git rebase:
	•	Purpose: Reapply commits on top of another base, often used to keep a linear history.
	•	Use Case: When you want to clean up or reorganize commits before merging or when integrating changes from another branch.
*/