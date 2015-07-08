Let's add a link to an image in our `page2.html`

There are a few images in our "images" directory, let's pick the `2.jpg` picture and add a link to it.

Add a `<a>` with an href pointing to our image `2.jpg`

In the preview window try to click it.

If you just typed something like : `<a href="2.jpg"> ... </a>` you will  not see the picture. Why is that ?

Let's think a bit, where is our page2 located and where is our picture located ? In what directory ? They are in differente directories, how would the browser know, when he is showing page2.html, that "2.jpg" is located in a different directory.

This brings us to a complex problem which is the one of addressing ressources on the web. Describing where are these resources.

There are 3 ways of describing where a ressources is on the web :

relative

absolute

fully qualified