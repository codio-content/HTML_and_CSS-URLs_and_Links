
Let's imagine we have a website located at url : `http://somesite.com`.
We also have a webserver that serves the files from the folder "somesite" :

![](.guides/img/folders_simple.png)

## Removing the hostname

If we specify the hostname `http://somesite.com` in all our URLs and that someone decides to change our hostname or to move the site to another server, the website will stop working properly, all the links will be broken.

In order to avoid that and to have less repetitions in our code, we can skip the protocol and hostname parts of the URLs and just use the subdirectories and file names. In general, when we use urls and files from our own site it is recommanded to avoid the hostname, only when we target content from other urls and other websites then we have to use full urls with the protocol and hostname.

So for example; if we want to user the picture `2.jpg` from above in an `<img>` tag in the `index.html`, we could write :

```html
<img src="http:/somesite.com/images/2.jpg">
```

Or simply :

```html
<img src="/images/2.jpg">
```

Both will work, and the second notation basically omits the protocol and hostname. The browser when it will load `index.html` knows it come from http://somesite.com and thus, when he will find the `<img src="/images/2.jpg">` tag, it will know we wants to reach `/images/2.jpg` from the same hostname as the index, and it will thus load `http://somesite.com/images/2.jpg`

## Relative and absolute paths.

Can you tell the difference between `<img src="/images/2.jpg">` &nbsp; and &nbsp; `<img src="images/2.jpg">` ?

The only difference is that the first forward slash `/` is missing in the second case. What difference does it make?

The first one which begins with a `/` is called an <u>absolute path</u>, the second one is called a <u>relative path</u>.

To understand the difference between those two, let's add a folder called "somefolder" in our "somesite" folder.

![](.guides/img/folders.png)

### Absolute paths

An absolute path always starts with `/` and the result is that our path will always begin from the topmost folder of our file hierarchy. In our example file structure, it will always start from the folder "somesite".

If we use `<img src="/images/2.jpg">` either from `index.html` or `page2.html` it will point to the same file :

![](.guides/img/folders_absolute.png)

So the final url for the image would be : `http:/somesite.com/images/2.jpg` in both cases.


### Relative paths

In this case there is no `/` at the begining and it means: Don't start from the root but start from the current directory (the directory containing the file which use this path or url).

So if we use: `<img src="images/2.jpg">` from `index.html` and `page2.html` we will land on 2 different files :

![](.guides/img/folders_relative.png)

- In the case of `index.html`, the final url will be `http:/somesite.com/images/2.jpg` (In red in the picture above).

- In the case of `page2.html`, the final url will be `http:/somesite.com/somefolder/images/2.jpg` (In gree in the picture above).

If from `page2.html` we wanted to target the same image as the one from `index.html`, we would need to go "up" one level in the file hierarchy.

For this purpose we have the <u>special path components</u> `.` and `..` : 

![](.guides/img/folders_special.png)

- If you use `./images/2.jpg` it is exactly the same as `images/2.jpg` .. it means start from the current directory, so `.` represents the current directory (in green in the picture above)

- If you use `../images/2.jpg` in our `page2.html` it will go one level up then go down again to the image folders and point to the other 2.jpg (in red in the picture above)

Please, head to the next section to test your understanding of these concepts.
