{Check It!|assessment}(test-2602509092)

|||guidance

Solution :

```html
<!doctype html>
<html>
<head>
  <title>Digital clock example</title>
  <link rel="stylesheet" href="clock.css">
</head>
<body>
  
  <div id="clock">
    00:00:00
  </div>
  
  <script>
    
    function zero_pad(num) {
      if (!num) { return "00"}
      else if (num<10) { return "0"+num }
      else { return num }
    }  
    
    function set_time() {      
      var clock_div = document.getElementById("clock")

      var current_date = new Date()
      var hours = zero_pad(current_date.getHours())
      var minutes = zero_pad(current_date.getMinutes())
      var seconds = zero_pad(current_date.getSeconds())

      var date_clock =  hours + ":" + minutes + ":" + seconds
      
      clock_div.innerHTML = date_clock
    }


    setInterval( set_time, 1000 )
    
  </script>
</body>
</html>
```

|||