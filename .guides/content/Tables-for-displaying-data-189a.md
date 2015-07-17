In the previous section we have seen how to display ordered and ordered list.

Let's now see how to display data in a structured way, a table !

In order to display tables we need to learn different tags.

Here is a very simple table :

<table>
<tr> 
    <td> Entry 1.1 </td> 
    <td> Entry 1.2 </td> 
</tr>
<tr> 
    <td> Entry 2.1 </td> 
    <td> Entry 2.2 </td> 
</tr>
</table>

Lets have a look at the markup for it :

```html
<table>
<tr> 
    <td> Entry 1.1 </td> 
    <td> Entry 1.2 </td> 
</tr>
<tr> 
    <td> Entry 2.1 </td> 
    <td> Entry 2.2 </td> 
</tr>
</table>
```

So first we start with a `<table>` to open the table.
Then we continue with a `<tr>` which means <u>t</u>able <u>r</u>ow and is the begining of a new row in the table (as you might expect)

Then we have two times `<td> ... </td>` Which is basically an entry of <u>t</u>able <u>d</u>ata.

Then we close the row with `</tr>`
And we do it once again for a new row.
And then we close the table.

|||Challenge
# Fix this table!

Please preview the file `challenge1.html` in the left treeview (Right click on it and choose "Preview static")

The table in `challenge1.html` is broken and should look like this :

<iframe width="100%" src="tables/ex1.html" frameborder="0" allowfullscreen id="iframe_ex_1" onLoad="autoResize('iframe_ex_1');"></iframe>

Please fix it !

*Hint* : You might want to consider using the "Beautify" feature of Codio on the html in `challenge1.html` in order to be able to see correctly the structure of table markup.

{Check it!! | custom}(test-bui)

|||


