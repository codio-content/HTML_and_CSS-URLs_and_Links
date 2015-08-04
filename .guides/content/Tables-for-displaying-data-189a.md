In the previous section we have seen how to display ordered and ordered list.

Let's now see how to display data in a structured way using a table.

In order to display tables we need to introduce a few new tags.

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

First we start with the `<table>` tag to open the table.
Then we continue with a `<tr>` which means <u>t</u>able <u>r</u>ow and is the begining of a new row in the table (as you might expect)

Then we have two times `<td> ... </td>` Which is basically an entry of <u>t</u>able <u>d</u>ata.

Then we close the row with `</tr>`
And we do it once again for a new row.
And then we close the table.

{Check It!|assessment}(test-1070810640)


