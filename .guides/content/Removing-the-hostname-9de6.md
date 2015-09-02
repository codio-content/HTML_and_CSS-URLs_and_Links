
Let's imagine we have a website located at url : `http://somesite.com`.
We also have a webserver that serves the files from the folder "somesite" :

![](.guides/img/folders_simple.png)

## Removing the hostname

If we specify the hostname `http://somesite.com` in all our URLs and then someone decides to change our hostname or to move the site to another server, the website will stop working properly, all the links will be broken.

In order to avoid that and to have less repetitions in our code, we can skip the protocol and hostname parts of the URLs and just use the subdirectories and file names. In general, when we use urls and files from our own site it is recommended  to avoid the hostname, only when we target content from other urls and other websites then we have to use full urls with the protocol and hostname.

So for example; if we want to user the picture `2.jpg` from above in an `<img>` tag in the `index.html`, we could write :

```html
<img src="http:/somesite.com/images/2.jpg">
```

Or simply :

```html
<img src="/images/2.jpg">
```

Both will work, and the second notation basically omits the protocol and hostname. The browser when it will load `index.html` knows it comes from http://somesite.com and thus, when it will find the `<img src="/images/2.jpg">` tag, it will know we want to reach `/images/2.jpg` from the same hostname as the index, and it will thus load `http://somesite.com/images/2.jpg`
