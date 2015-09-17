To continue on our journey, let's do a working digital clock !

Before working on the visual side of things, we need to know how we can fire a timer every second, in order to update our clock.

The JS function for that is called : `setInterval`. It is used to start a timer that will call a given function or code at specific intervals. The full syntax is :

```javascript
setInterval( <callback_function> , <interval_time> );
```

Where : 
- `<callback_function`  is the name or the body of a function to call.
- `<interval_time>` is the interval in milliseconds at which the function will be called.

Here is a working example : 

```javascript

function my_function() {
  console.log("hi!");
}

setInterval( my_function , 3000);
```

The `setInterval` will call `my_function` every 3000 milliseconds (that's 3 seconds).

The function `my_function` does only one thing and that is to write 'hi!' to the console.
 
You can see a full working example in the left panes.

As you can see in the bottom left pane, it's printing "hi!" to the console every three seconds.