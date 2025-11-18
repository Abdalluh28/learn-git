/*
to make a new branch:
git branch branchname
git checkout -b branchname  (creates and switches to the new branch)
git switch -c branchname  (creates and switches to the new branch)

to switch between branches:
git checkout branchname
git switch branchname

to see all branches:
git branch

to rename a branch:
git branch -m newbranchname

to merge a branch into the current branch:
git merge branchname
we must be on the branch we want to merge into

to delete a branch:
git branch -d branchname


to move commit(s) from one branch a to another branch b:
1. switch to branch b
2. git rebase a

*/

/*
ch 4
interactive rebase: it is a git tool
used to edit commit history, combine commits, delete commits, change commit messages etc.
to start an interactive rebase:
git rebase -i commitID^
this opens an editor with a list of commits
starting from the commit after the specified commitID up to the current commit

interactive rebase test 1

interactive rebase test 2 & 3


cherry-pick: to apply specific commits from one branch to another branch
to cherry-pick a commit:
git checkout branchname  (switch to the branch where we want to apply the commit)
git cherry-pick commitID

bisect: to find a specific commit that introduced a bug
to start bisecting:
git bisect start
git bisect bad  (mark the current commit as bad)
git bisect good commitID  (mark a known good commit)

to end bisecting:
git bisect reset

to know who made this error:
git blame filename

git blame -C1 filename (to detect code moved from other files)

*/