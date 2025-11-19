/*
remote repository means a repository hosted on a server (like GitHub, GitLab, etc.) 
that can be accessed over the internet.
remote repository also called bare repository because it does not have a working directory.

local repository means a repository stored on your local machine.


to add a remote repository:
git remote add origin remote_repository_URL

to push changes to remote repository:
git push -u origin branchname

to pull changes from remote repository:
git pull

git pull = git fetch + git merge

to clone a remote repository:
git clone remote_repository_URL

what if I am trying to push but someone else has pushed changes to the remote repository?
then you need to pull the changes first using git pull, 
resolve any merge conflicts if they arise by using git merge or git rebase, 
and then push your changes again using git push.

but what if the pushed changes were wrong?
then we can force push our correct changes using:
git push -f origin branchname
and alert the team to reset their local repositories to match the remote repository.
git reset --hard origin/branchname

*/


/*
GitHub

git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/username/repo.git
git push -u origin main

github will ask for username and password
but now github uses personal access tokens instead of passwords for authentication
so we need to generate a personal access token from github settings
then we need to add the personal access token to our git config
setting -> developer settings -> personal access tokens -> generate new token


to add some coollaborators to our repository:
go to repository settings -> coollaborators and teams -> add people

we can add issues as to-do lists for our project
and milestones to group issues and pull requests

we can auto-close issues by including keywords in our commit messages
git commit -m "add function fixes #issue_number"
fixes, closes, resolves are some keywords that can be used

test for auto-close issue with pull request

we can create a pull request to propose changes to the repository
after creating a pull request, we can review the changes and merge them into the main branch

test for pull request

after merging a pull request, we can delete the feature branch
using "Delete branch" button on github
or using git branch -d branchname, then git branch -r -d origin/branchname to delete remote branch

GitHub flow: 
1. create a branch
2. make changes and commit
3. push branch to remote repository
4. create a pull request
5. review and merge pull request
6. delete branch

what if I don't have permission to commit? 
then I can create a fork of the repository and push changes to my fork
then create a pull request from my fork to the original repository.


*/