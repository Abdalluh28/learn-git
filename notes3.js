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