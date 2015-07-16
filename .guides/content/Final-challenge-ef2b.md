Now that we have mastered pages, links, urls and paths, let's do a more complex challenge :

|||challenge

# A real navigation

We will create a navigation menu for our website.

This website consists of 3 pages:
1. The home page (index.html)
2. The about page (sections/about.html)
3. The contact page (sections/contact.html)

In the treeview on the left, there is a folder called "nav", we have already created all the pages for you.

Here is the folder structure of the website :

![](.guides/img/nav_structure.png)

The challenges consists of having all the links in the nav section working and leading to the correct page. 

First open `index.html` , if you check under the `<h3> Navigation : </h3>` you will see the code for our nav :

```html
    <ul>
        <li> Home <img src="img/home.png"> </li>
        <li> <a href=""> Contact <img src="img/contact.png"> </a> </li>
        <li> <a href=""> About <img src="img/about.png">  </a> </li>
    </ul>
```

Notice that there are no urls in the `href` of all the `<a>` tags.

Each link should go to the correct page. So please write the correct urls for each of those links so that they point to the correct pages.

Don't forget that about and contact are located in another directory than index.

Now open the about and contact pages, you can notice that there is at the end of each document :
```html
<!-- put here your nav -->
```

This is a "comment", a special fake tag that allow developer to put comments in the html code for themselves or other developers. 

This is totally ignored by the browsers and doesn't display anything.

Replace theses comments by the correct code for the nav, inspired by the one from `index.html`

Make sure that all the urls between the pages are correct and make sure that only the other sections are wrapped in a `<a>` tag. Finally verify that the urls of the little images are correct for all the navs.


{Check it!! | custom}(test-bui)

|||


Congratulations ! You have finished this unit and can continue on the path of becoming a master in web development.


