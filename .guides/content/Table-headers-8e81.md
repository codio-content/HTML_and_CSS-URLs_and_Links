Now let's add a header to our table :

<table>
<tr style="text-align:left;"> 
    <th> Col 1 </th> 
    <th> Col 2 </th> 
</tr>
<tr> 
    <td> Entry 1.1 </td> 
    <td> Entry 1.2 </td> 
</tr>
<tr> 
    <td> Entry 2.1 </td> 
    <td> Entry 2.2 </td> 
</tr>
</table>

In order to do that we have added the following code  before our first tr in the previous code :

```html
<tr> 
    <th> Col 1 </th> 
    <th> Col 2 </th> 
</tr>
```

`<th>` stands for <u>t</u>able <u>h</u>eader

{Check It!|assessment}(test-1614308083)

|||guidance

Solution :

```html
<!DOCTYPE html>
<html>
<head>
    <title> Challenge 1 </title>
    <style>
        body { background-color:#fff; }
        td { border: 1px dashed #333; padding:5px; }
        th { background-color:#ddd; color:#333; }
    </style>
</head>
<body>
    
   <h2> Here is simple table : </h2>
<table>

<tr>
    <th> Col 1 </th>
    <th> Col 2 </th>
    <th> Col 3 </th>
</tr>

<tr>
    <td>Entry 1.1</td>
    <td>Entry 1.2</td>
    <td>Entry 1.3</td>
</tr>
<tr>
    <td>Entry 2.1</td>
    <td>Entry 2.2 </td>
    <td>Entry 2.3 </td>
</tr>
<tr>
    <td>Entry 3.1</td>
    <td>Entry 3.2</td>
    <td>Entry 3.3</td>
</tr>
</table>

</body>
</html>
````

|||

We will see more about tables in future units. Let's start the final section of this unit.