Have a look at the panes on the left hand side.

It's our clock HTML but without the call to setTimeout. It should work and display the time at page load time but it doesn't ... have a look at the bottom left hand pane, it's displaying `00:00:00` but why ?

Try to check the file `example1.html` in the top left hand pane. Try to understand why it doesn't work? Don't try to analyse the JS code, because it's exactly the same as before when it was working. 

### So why ?

The reason is simple, because we moved our `div id="clock"` AFTER the `script` tag. So when the browser loads the pages, it first gets the script tag and executes the JS code, the JS code calls `set_time` which tries to call `document.getElementById("clock")` to get our clock `div` but at that moment, the browser didn't get to that `div` yet and so it doesn't exist.

So, in general, we don't know for sure if, when our JS code will be executed, the whole HTML page will be loaded, parsed and in memory. We don't know for sure if it will be accessible already by our JS code.