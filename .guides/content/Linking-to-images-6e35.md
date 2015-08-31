Let's add a link to an image, in `page2.html`

There are a few images in our "images" directory, let's pick the `2.jpg` picture and add a link to it.

Add a `<a>` with an href pointing to our image `2.jpg`

In the preview window try to click it. It will not work.

# Why is it not working?

If you just typed something like : `<a href="2.jpg"> ... </a>` you will not see the picture. Why is that ?

Let's think a bit, where is our `page2.html` located and where is our picture located? In what directory? They are in different directories, how would the browser know, when it is showing `page2.html` that the `2.jpg` file is located in a different directory.

This brings us to how we describe the location of resources on the web.

Let's head to the next section to know more about this.