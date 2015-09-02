An absolute path always starts with `/` and the result is that our path will always begin from the topmost folder of our file hierarchy. In our example file structure, it will always start from the folder "somesite".

If we use `<img src="/images/2.jpg">` either from `index.html` or `page2.html` it will point to the same file :

![](.guides/img/folders_absolute.png)

So the final url for the image would be : `http:/somesite.com/images/2.jpg` in both cases.
