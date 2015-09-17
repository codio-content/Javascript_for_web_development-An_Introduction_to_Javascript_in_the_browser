First, we declare and implement two functions: `zero_pad` and `set_time`. Then we call our `set_time` function at the beginning.

Our `set_time` function first gets the div with id = `clock` and saves it to a variable called `clock_div`:
```javascript
var clock_div = document.getElementById("clock")
```

`document.getElementById` is the JS internal function to use when you want to get an HTML element based on its id. We will see it in more detail later.

Then we create a new `Date` object and by default it has the time of its creation. The `Date` object is offered by the JS standard library to work with dates and times.

```javascript
var current_date = new Date()
```

Then we use the functions `getHours`, `getMinutes` and `getSeconds` of the new `Date` object to get the Hours, Minutes and Seconds of the current time.

We apply a function called `zero_pad` on all these values. We wrote this function to add a `0` sign at the begining if the value is < 10 so we always have two digits in our numbers in our clock display.

The next instruction creates a string by concatenating these three values and the sign ":" in between.

```javascript
var date_clock =  hours + ":" + minutes + ":" + seconds
```

The last instruction replaces the inner content of the `clock_div`.
  
```javascript
clock_div.innerHTML = date_clock
```

In JS you modify or replace the "inside" of an element by assigning the content to its `innertHTML` property (We will come back to this later as well).

And voilà ! We have a function that takes the current time, formats it nicely and puts it inside our `clock` div!

Well it’s all nice and it displays the time but it’s not updating, it’s just runs once at the beginning. Now, we have to use our `setInterval` function to call our `set_time` function every second.