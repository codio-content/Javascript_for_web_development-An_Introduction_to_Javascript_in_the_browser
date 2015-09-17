We have to ask the browser to "call" us when it has finished loading the content of the page.

Historically, we used :

```
window.onload = function() {
  // your code
};
```

In modern browsers, we tend to use :

```javascript
document.addEventListener("DOMContentLoaded", function() {
  // your code
});
```

The `window.onload` happens after the `DOMContentLoaded` event.

The `DOMContentLoaded` is triggered by the browser after the current document's HTML content has been parsed and added to the DOM.

This `window.onload` happens after this, when the browser has loaded all the documents referenced by the page's HTML content.