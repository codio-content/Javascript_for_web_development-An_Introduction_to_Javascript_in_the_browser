This is an extract of the network panel of a random html page.

In (1) and (2) you can see the `DOMContentLoaded` event was triggered by the browser 674 ms after the start of the page load.

The `onload` event was triggered after 2.4 s

In (3) and (4) you can see when the two events where triggered using blue and red lines in the timeline.

So in this case there is a big difference, in the example HTML pages we will do, we don't embed much medias so the difference will be smaller.

![](.guides/img/dom-vs-load.png)

For the moment let's use `DOMContentLoaded`.