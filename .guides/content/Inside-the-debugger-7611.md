When you are in the debugger, It will look something like this :

![](.guides/img/debugger-example.png)

- In (1) we see the code which the debugger is currently running.
- In (2) we see a blue line, that shows us on which line the debugger is currently paused.
- In (3) we see the "Scope" panel, It's composed of 2 parts "Local" and "Global". "Local" are the variables that are local to your script and global are all the variables that are globally accessible in the browser. Most of the time you will inspect your local variables. Here we can see the actual value of our variables `a`, `b`, `c`. In this case we see that as we declared in our code : `a=10` and `b=20` but we also see that `c=30` which is correct as we defined it to be `c = a + b`

Now, let's try it in the next section.