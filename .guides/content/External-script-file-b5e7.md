To load an external JS file, the syntax is the same with the addition of a `src` attribute and no actual code between the opening and closing tags.

```
<script src="<url>" ></script>
```

Where `<url>` is the effective url of your JS file, for example: 

```
<!-- a JS file loaded from another server -->
<script src="http://superlib.com/awesome-js-helper.js" ></script> 

<!-- a JS file you coded -->
<script src="my-super-script.js" ></script>
```

In the first case we load a JS file from another server we don't own, that could be a library for example.

In the second case we load our own script using a relative URL.