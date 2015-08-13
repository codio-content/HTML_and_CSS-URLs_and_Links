Let's introduce some new html tags for lists and tables.

# Ordered and unordered lists

Here is a simple list we would like to reproduce :

![](.guides/img/iframe1.png)


How do we do it ?

The tag to start an unordered list is `<ul>` (as in <u>u</u>nordered <u>l</u>ist).

If you just use the tags `<ul> </ul>`, we are opening a new list and then closing it. But there is nothing inside it.

In order to add items to the list, we need to use the `<li>` tag (as in <u>l</u>ist <u>i</u>tem)

So every entry of the list must be wrapped in `<li>` and the whole thing must be wrapped in a `<ul>`

Here is a full examples :

```html
<ul>
    <li> List item 1</li>
    <li> List item 2</li>
</ul>
```

{Check It!|assessment}(test-551623780)

|||guidance

Solution : 

```html
<!DOCTYPE html>
<html>
<head>
    <title> Challenge 1 </title>
</head>
<body>
    
   <h2> Here is a (unordered) list : </h2>
    <ul>
        <li> List item 1</li>
        <li> List item 2</li>
        <li> List item 3</li>
    </ul>
    
</body>
</html>
```

|||

Now let’s see an ordered list. Basically they are almost the same as unordered lists.

The only difference being you use `<ol> </ol>` around your `<li>`'s and your list will be numbered !

Here is an example :

![](.guides/img/iframe2.png)




