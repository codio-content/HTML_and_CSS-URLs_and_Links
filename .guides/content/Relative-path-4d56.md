In this case there is no `/` at the begining and it means: Don't start from the root but start from the current directory (the directory containing the file which uses this path or url).

So if we use: `<img src="images/2.jpg">` from `index.html` and `page2.html` we will land on 2 different files :

![](.guides/img/folders_relative.png)

- In the case of `index.html`, the final url will be `http:/somesite.com/images/2.jpg` (In red in the picture above).

- In the case of `page2.html`, the final url will be `http:/somesite.com/somefolder/images/2.jpg` (In green in the picture above).

If from `page2.html` we wanted to target the same image as the one from `index.html`, we would need to go "up" one level in the file hierarchy.

For this purpose we have the <u>special path components</u> `.` and `..` : 

![](.guides/img/folders_special.png)

- If you use `./images/2.jpg` it is exactly the same as `images/2.jpg` .. it means start from the current directory, so `.` represents the current directory (in green in the picture above)

- If you use `../images/2.jpg` in our `page2.html` it will go one level up then go down again to the image folders and point to the other 2.jpg (in red in the picture above)

Please, head to the next section to test your understanding of these concepts.