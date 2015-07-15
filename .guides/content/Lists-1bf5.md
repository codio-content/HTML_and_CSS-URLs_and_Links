Let's introduce some new html tags for lists and tables.

# Ordered and unordered lists

Here is a simple list we would like to reproduce :

<iframe  width="100%" height="30%" src="/lists/ex1.html" frameborder="0" allowfullscreen></iframe>

How do we do it ?

The tag to start an unordered list is `<ul>` (as in <u>u</u>nordered <u>l</u>ist).

If you just use the tags `<ul> </ul>` We are opening a new list and then closing it. But there is nothing inside it.

In order to add items to the list, we need to use the `<li>` tag (as in <u>l</u>ist <u>i</u>tem)

So every entry of the list must be wrapped in `<li>` and the whole thing must be wrapped in a `<ul>`


|||challenge
# A simple unordered list.

Open the file `challenge1.html` which is in the left treeview and under the title `<h2> Here is a (unordered) list : </h2>` add a list with 3 items as shown here :

<iframe  width="100%" height="30%" src="/lists/ex1.html" frameborder="0" allowfullscreen></iframe>

When you are satisfied with it :

{Check it!! | custom}(test-bui)

|||

Now let's see ordered list. Basically they are almost the same as unordered lists.

The only difference being you use `<ol> </ol>` around your `<li>`'s and your list will be numbered !

Here is an example :

<iframe  width="100%" height="30%" src="/lists/ex2.html" frameborder="0" allowfullscreen></iframe>

|||challenge
# A (nested) ordered list.

Open the file `challenge2.html` which is in the left treeview and under the title `<h2> Here is a nested ordered list : </h2>` add a list with 3 items and 3 nested items as shown here :

<iframe  width="100%" height="40%" src="/lists/ex3.html" frameborder="0" allowfullscreen></iframe>

When you are satisfied with it :

{Check it!! | custom}(test-bui)

|||



