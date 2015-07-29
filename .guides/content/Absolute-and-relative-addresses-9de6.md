# Absolute and relative

It works very well but there are problems with it. If we use in our code all theses urls with http:/somesite.com in it and that someone decides to change our hostname or to move the site to another server, the website will stop working properly, all the links will be broken.

In order to avoid that and to have less repetitions you can skip the protocol and hostname parts of urls and just use the subdirectories and file names.

So for example for the picture `2.jpg`

We could write :
```html
<img src="http:/somesite.com/images/2.jpg">
```
Or :
```html
<img src="/images/2.jpg">
```

Both will work, and the second notation basically omits the protocol and hostname, considering we are targetting a resource on the same hostname and protocol as the one where is the page hosted.

So if we have http://somesite.com/index.html that contains : `<img src="/images/2.jpg">`

Then the url that the browser will use to load the image is http://somesite.com/images/2.jpg

In general it is better to omit the hostname if you can. This is called a 'relative' address. It is relative to the current hostname.

Let see some details about it, can you tell the difference between :

`<img src="/images/2.jpg">` &nbsp; and &nbsp; `<img src="images/2.jpg">`

The difference is that the first forward slash `/` is missing in the second case. What difference does it make ?

In the first case the path will always be taken from the root of the site. Meaning the top most directory. To understand this let's imagine we are trying to include this image in a page.

So we have a page : `http:/somesite.com/somefolder/index.html`

Inside, there is somewhere : `<img src="/images/2.jpg">`

What the browser will do is to take the root directory which is :
[http:/somesite.com/]() then add [/images/2.jpg]()

So the final url for the image would be :[http:/somesite.com/images/2.jpg]()

If we used instead : `<img src="images/2.jpg">`
In this case there is no `/` at the begining and it means : Don't start from the root but start from the current directory. In this case the current directory is : `/somefolder/`
So the final url would be : 
[http:/somesite.com/somefolder/images/2.jpg]()

Which in this case wouldn't work as there is no `images` folder inside `somefolder` and no file `2.jpg` either.

How to make it work ? We have to introduce to new <u>special path components</u> `.` and `..` They have a special meaning : if you use `./images/2.jpg`
It is exactly the same as `images/2.jpg` .. it means start from the current directory, so `.` represents the current directory (the directory in which is the file using the ".")

Now the `..` path means the "parent" directory, so if you write `../images/2.jpg` in a file which is located in `/folder1/folder2` The resulting path will be `/folder1/images/2.jpg` (We start from `folder2` but then the `..` goes to the parent directory which is `folder1` and then we add `/images/2.jpg`

So if we want to refence the image `2.jpg` from our page [http:/somesite.com/somefolder/index.html]() and not using a forward / at the begining we would have to write : `<img src="../images/2.jpg">`

Then it would work and resolve to [http:/somesite.com/images/2.jpg]()

One final challenge to verify that you understand all of this correctly.

|||challenge 
# Find the good urls


Here is a folder structure :

<img src=".guides/img/treeview_last_challenge.png" height="250">

Imagine, it's hosted on the url : [http://mysite.com]()

Here is a first example :
In page1.html we have a `<a href="content/index.html">` What is the full url

In this case it would be :

`http://mysite.com` + `content/index.html`

So `http://mysite.com/content/index.html`

Do it now for the following ones :

<hr>

In page5.html we have a `<a href="content/index.html">` 

What is the full url where this link will lead ?

Write it down here :

<input id="q1" type="text" style="width:100%;" />

<hr>

In page2.html we have a `<a href="../index.html">` 

What is the full url where this link will lead ?

Write it down here :

<input id="q2" type="text" style="width:100%;" />

<hr>

In page3.html we have `<a href="/images/2.jpg">`

What is the full url where this link will lead ?

Write it down here :

<input id="q3" type="text" style="width:100%;" />

<hr>

In page3.html we have `<a href="images/2.jpg">`

What is the full url where this link will lead ?

Write it down here :

<input id="q4" type="text" style="width:100%;" />

<a id="test6absolute" href="#"  class="codio-button codio-button-type-custom"> Check your answers!!
</a>

|||
