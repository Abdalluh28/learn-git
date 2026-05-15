/*
to initialize a git repo
git init

// add files
git add .

// commit files
git commit -m "message"

// change branch name
git branch -M abdo  (or) git branch -m main abdo

// push to remote repo
git remote add origin https://link

// push to GitHub
git push -u origin main

// stop tracking a file
git rm --cached <file>

// undo changes done in the working tree without removing the file from the staging area
git restore --worktree <file>
ex:
git add file.js
# modify file.js again
git restore --worktree file.js
The unstaged modifications disappear, but the staged version remains.

// remove file from the staging area without deleting changes in the working tree
git restore --staged <file>

// revert a commit (delete changes in the working tree)
git revert <commit>
revert keeps the commit in the commit history and make a new revert commit

// reset to last commit (the commit is deleted from the commit history)
// reset has 3 options: soft, mixed, hard
// soft: keeps the changes in the staging area (to be committed)
git reset --soft HEAD~n to go back n commits

// mixed: keeps the changes in the working directory (to be added to the staging area)
git reset --mixed HEAD~n 

// hard: deletes the changes from the working directory
git reset --hard HEAD~n

// return to a specific commit
git reset --hard HEAD@{n}

// amend the last commit (add the new staged changes to the last commit with the same message)
git add . && git commit --amend --no-edit

// amend the last commit (add the new staged changes to the last commit with a new message)
git commit --amend -m "new message"
if aleardy pushed to GitHub, use git push --force (but not preferred in shared branches)

// show the commit history
git reflog (or)
git log --oneline (or)
git log --oneline --graph

// temporarily save the working directory changes without committing them
// remove the changes from the working directory and save them in the a hidden stack
git stash
suppose u work on login feature, and a bug appears in another feature,
before moving to another branch, stash the changes in the current branch

// stash the untracked files
git stash -u 

// show the stashed changes
git stash list

// apply the stashed changes
git stash apply

// apply a specific stash
git stash apply stash@{n}

// show branch list
git branch

// create a new branch
git branch <branch name>

// delete a branch
git branch -d <branch name>

// switch to a branch
git checkout <branch name>
git switch <branch name>

// create a new branch and switch to it
git checkout -b <branch name>
git switch -c <branch name>

branch naming conventions:
- feature/feature-name
- bugfix/bugfix-name

Real world example of branch naming: <type>/<ticket>-<short-description>
feature/T-101-user-auth
bugfix/T-202-navbar-overlap
hotfix/T-301-payment-failure
docs/T-401-api-docs

// merge a branch (into the current branch)
git merge <branch name>

// rebase a branch (another way to merge a branch)
git switch abdo
git rebase main (make abdo points to the same commit as main points)
git switch main
git merge abdo

// solve a merge conflict
git merge --continue (or)
git rebase --continue

// copy a commit from another branch without merging the entire branch
git cherry-pick <commit hash>

// edit the commit message
git cherry-pick --edit

// copy a commit into the staging area withot committing it
git cherry-pick --no-commit <commit hash>

// solve cherry-pick conflicts
fix files manually, git add . && git cherry-pick --continue

// create a remote repo
git remote add <remote-repo-name> <remote-repo-link>

// change the remote repo link
git remote set-url origin <new-remote-repo-link>

// set the upstream branch
git push --set-upstream origin main

// create an alias
git config --global alias.<name> "command"
git config --global alias.lol "log --oneline"

git config --global alias.done "! git add .; git commit"
git done -m "message"

// show aliasses list
git config --global -e
*/
