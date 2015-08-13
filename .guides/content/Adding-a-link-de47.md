# What is a link ?

HTML offers many of the conventional publishing idioms for rich text and structured documents, but what separates it from most other markup languages is its features for hypertext and interactive documents. 

This section introduces the link (or hyperlink, or Web link), a basic hypertext construct. A link is a connection from one Web resource to another. Although a simple concept, the link has been one of the primary forces driving the success of the Web.

||| info

A link is a connection from one Web resource to another.

|||

A link has two ends -- called anchors -- and a direction. The link starts at the "source" anchor and points to the "destination" anchor, which may be any Web resource (e.g. an image, a video clip, a sound bite, a program, an HTML document, an element within an HTML document etc.)

![](.guides/img/ALINK.png)

# Adding a link

Let's add a link from our `index.html` to our `page2.html`
Let say we are going to call our link "Go to page 2". The html tag used for links is `<a> </a>`
The `a` stands for anchor as it is the source anchor of the link.

In your `index.html` file on the left, replace the text `We will replace this by our navigation !` inside the last `p` before the end of the `body` by our link `<a>Go to page 2</a>`

As it is now, the browser does not know what the destination of the link is, we said it should go to our `page2.html` so lets add a href attribute to our `a` tag like this `href="page2.html"`

When we are done, our link should look like this : `<a href="page2.html">Go to page 2</a>`

href stands for "hyper reference" : a reference to an object on the web.

When you have added your href, you can check the preview and click on the link. It should bring you to your page 2.

Now that we are in page 2, we dont really have a way to go back...

{Check It!|assessment}(test-2785969080)

|||guidance

Solution :

Our page2.html should contain :

```html

<!DOCTYPE html>
<html>

<head>
    <title></title>
</head>

<body>
    <h1>Page 2</h1>
    <a href="index.html">Back to index</a>
</body>

</html>

```

|||


