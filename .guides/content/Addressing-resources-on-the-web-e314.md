# How to address resources on the web ?

We need a way to be able to reference content from other folders on our server or even from other servers on the web. For this purpose URLs exists to describe the locations of these resources in a standard way.

|||definition
# URL : Uniform Resource Locator
It is the standard way of writing the address or the location of a ressource on the internet.

Let's take a simple example :

$$
{\sf\large
\underbrace{\text{http}}_\text{protocol}\text{://} \underbrace{\text{www.codio.com}}_\text{hostname} }
$$

protocol 

: http stands for "Hyper-Text Transfer Protocol". As we have seen before we are currently learning to write HTML pages, Hyper-Text Markup Language. So it is the protocol to transport web pages over the internet.


hostname

: the hostame is the name on the internet of the host (or server) we are trying to reach.



|||

|||challenge
# Challenge

Here is a more complex url :

<div id="MathDiv">
$$
{\sf
\underbrace{\text{https}}_\text{protocol}
\text{://} 
\underbrace{\text{artist-chef.codio.io}}_\text{hostname}  \text{/}
\underbrace{\text{folder1/folder2}}_\text{subdirectory}  \text{/}
\underbrace{\text{index.html}}_\text{filename} 
}
$$
</div>


Let's imagine we have a web server running at <a href="#" class="current_hostname">#</a> and serving the files that are in the [left](#) treeview.

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

{Check it!! | custom}(test-bui)

|||

What we have just seen with full urls is the first way of referencing things on the web. It is called "absolute", in the next section we will explore this in more details.