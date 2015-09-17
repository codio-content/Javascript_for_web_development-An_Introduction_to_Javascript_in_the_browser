This is an extract of the network panel of a random html page:

![](.guides/img/dom-vs-load.png)

In (1) and (2) you can see the `DOMContentLoaded` event was triggered by the browser 674 ms after the start of the page load. The `onload` event was triggered after 2.4 s

In (3) and (4) you can see when the two events were triggered using blue and red lines in the timeline.

So in this case there is a big difference! In the example HTML pages we will use, we don't embed much medias so the difference will be much smaller.

For the moment, let's use `DOMContentLoaded`.