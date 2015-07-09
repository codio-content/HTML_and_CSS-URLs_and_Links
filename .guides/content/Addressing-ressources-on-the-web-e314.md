There are 2 ways of describing where a ressources is on the web, and it depends if the resource your are trying to access is located on the same domain as the page in which it is used.

|||definition
# URL : Uniform Resource Locator
It is the standard way of writing the address or the location of a ressource on the internet.

Let's take a simple example :

![](.guides/img/simple_url.png)

protocol 

: HTTP stands for "Hyper-Text Transfer Protocol". As we have seen before we are currently learning to write HTML pages, Hyper-Text Markup Language. So it is the protocol to transport web pages over the internet.


hostname

: the hostame is the name on the internet of the host (or server) we are trying to reach.



|||

|||challenge
# Challenge

Here is a more complex url :

![](.guides/img/more_url.png)

Let's imagine we have a web server running at [artist-chef.codio.io](https://artist-chef.codio.io) and serving the files that are in the [left](#) treeview.

Create the necessary folders and files so that we view the following html page:

```html
<!DOCTYPE html>
<html>

<head>
    <title> My super page !</title>
</head>

<body>
    <h1>This is my page</h1>
    <p>It is located in folder1/folder2</p>
    <p>On https://artist-chef.codio.io </p>
    
    <p>Thanks for visiting!</p>
</body>

</html>
```

|||

What we have just seen with full urls is the first way of referencing things on the web. It is called "absolute"

It works very well but there are problems with it. If we use in our code all theses urls with https://artist-chef.codio.io in it and that someone decides to change our hostname or to move the site in another directory, the website will stop working properly, all the links will be broken.

In order to avoid that and to have less repetitions you can skip the protocol and hostname parts of urls and just use the subdirectories and file names.

So for example for the pic 2.jpg

I can write :
```html
<img src="https://artist-chef.codio.io/images/2.jpg">
```
Or :
```html
<img src="/images/2.jpg">
```

Both images will load, the difference between the last two is subtile and causes many headaches to the newcomers :

In the firs case ...

In the second case ...

