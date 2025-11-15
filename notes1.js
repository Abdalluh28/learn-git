/*
to start a git repository:
git init
this creates a .git folder in the current directory

we can change the default branch name from "master" to "main" by using:
git config --global init.defaultBranch main
or git branch -m main, to rename an existing branch

to check the status of our repository:
git status
git status -s  (short format)

to add files to staging area:
git add filename
git add .   (adds all files in the current directory)


to ignore files, create a .gitignore file and add the filenames or patterns to it
if we do not want to include a file in gitignore and still ignore it (useful for my own files):
add this file in exclude file located in .git/info/exclude
this exclude file works like .gitignore but is not tracked by git

files added to index (staging area) cannot be ignored using .gitignore

to remove a file from staging area:
git rm --cached filename


to commit changes (make checkpoints we can go back to later):
git commit -m "message"


commit messages should be short and descriptive
what if we change many things in one file and want to commit only some of them?
git add fileName -e  (interactive mode, allows us to choose which changes to add)

this is for another commit message




*/