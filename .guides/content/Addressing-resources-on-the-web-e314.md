We need a way to be able to reference content from other folders on our server or even from other servers on the web. For this purpose URLs exists to describe the locations of these resources in a standard way.

|||definition
# URL : Uniform Resource Locator
It is the standard way of writing the address or the location of a resource on the internet.

Let's take a simple example :

$$
{\sf\large
\underbrace{\text{http}}_\text{protocol}\text{://} \underbrace{\text{www.codio.com}}_\text{hostname} }
$$

protocol 

: http stands for "Hyper-Text Transfer Protocol". As we have seen before we are currently learning to write HTML pages, Hyper-Text Markup Language. So it is the protocol to transport web pages over the internet.


hostname

: the hostame is the name on the internet of the host (or server) we are trying to reach.

Now let's have a look at a more complex url : 

$$
{\sf
\underbrace{\text{https}}_\text{protocol}
\text{://} 
\underbrace{\text{codio.com}}_\text{hostname}  \text{/}
\underbrace{\text{folder1/folder2}}_\text{subdirectory}  \text{/}
\underbrace{\text{index.html}}_\text{filename} 
}
$$

In addition to the protocol and hostname we have 2 new parts :

subdirectory

: It's the subdirectory you want to access on the server.

filename

: It's the name of the file you want to view inside the subdirectory.

|||

# Your codio box URL

Now let's learn how to find out what is your codio box url (Every codio box has its own url).

In order to do that, click on the "Project Index (static)" button in the top bar (Step 1).

Then a dropdown will open (Step 2) click on the first line "Project Index (static)".

| Step 1 | Step 2 |
| :----: | :----: |
| ![](.guides/img/s4.png) | ![](.guides/img/s5.png) |

When you click, it should open something similar to this :

![](.guides/img/s6.png)
- In (1) you will see your box url. In this case its https://artist-chef.codio.io. It will be different in your case !
- In (2) is a button that allows you to open the same page in another browser tab outside of the codio environment (full screen).

{Check It!|assessment}(test-3906376235)


What we have just seen with full urls is the first way of referencing things on the web. It is called "absolute", in the next section we will explore this in more details.