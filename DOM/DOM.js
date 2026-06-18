//DOM: Document Object Model
/*It means html document is made up of objects like head, body, etc. So, DOM basically means 
from which model our document has been made, what
is it's structure, how pages will look and how we can make changes to the given document

console.log(document) or console.log(window) or console.dir(document) in browser

console.log(document.baseURI): It gives the url of the webpage
console.log(document.links) : It would provide all the links of the page (These are HTML collection and not array . These can be 
converted into arrays)
console.log(document.links[2]): 2nd link

We can manipulate the document with the help of JS

In JavaScript, the DOM (Document Object Model) is a programming interface that represents an HTML document as a tree of objects.
It allows JavaScript to read, modify, add, or delete elements on a web page.

Example HTML
<!DOCTYPE html>
<html>
<body>
  <h1 id="title">Hello World</h1>
  <button onclick="changeText()">Click Me</button>
</body>
</html>
Accessing the DOM with JavaScript
function changeText() {
  document.getElementById("title").textContent = "DOM Updated!";
}

When the button is clicked:

JavaScript finds the <h1> element using getElementById().
It changes the text content.
The browser updates the page immediately.

DOM Tree Structure

The browser converts HTML into a tree like this:

Document
 └── html
      ├── head
      └── body
           ├── h1
           └── button

Each item in the tree is called a node.

Common DOM Methods
// Select elements
document.getElementById("id")
document.querySelector(".class")
document.querySelectorAll("p")

// Change content
element.textContent = "New text"
element.innerHTML = "<b>Bold</b>"

// Change styles
element.style.color = "red"

// Add elements
const p = document.createElement("p")
p.textContent = "New paragraph"
document.body.appendChild(p)

// Remove elements
element.remove()

Why is the DOM Important?

The DOM lets JavaScript make web pages interactive by:

Handling button clicks
Updating content dynamically
Changing styles
Creating animations
Validating forms
Building modern web applications

Think of it this way:

HTML = structure of the page
CSS = appearance of the page
DOM = JavaScript's way of accessing and manipulating that structure in the browser.

The Document Object Model (DOM) connects web pages to scripts or programming languages by
representing the structure of a document—such as the HTML representing a web page—in memory.

The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects.
DOM methods allow programmatic access to the tree. With them, you can change the document's structure, style, or content.

The Document Object Model (DOM) is a programming interface for web documents. It represents
 the page so that programs can change the document structure, style, and content.
 The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

A web page is a document that can be either displayed in the browser window or as the HTML source. In both cases, it is the
same document but the Document Object Model (DOM) representation allows it to be manipulated. As an object-oriented
representation of the web page, it can be modified with a scripting language such as JavaScript.

console.log(document); ----Prints the Document object representing the current HTML page.
#document
<html>
  <head>...</head>
  <body>...</body>
</html>

In Chrome, you'll often see an expandable representation of the page structure.

Use case: Quickly inspect the HTML document loaded in the browser.




console.log(window);

Prints the Window object, which is the global object in browsers.

It contains:

window
├─ document
├─ location
├─ history
├─ localStorage
├─ fetch
├─ alert
├─ setTimeout
├─ console
└─ ...

Example:

window.location.href
window.innerWidth
window.document

You'll see hundreds of properties and methods.

Use case: Explore everything available globally in the browser.



console.dir(document)
console.dir(document);

Displays the JavaScript object representation of document.

Instead of showing HTML markup, it shows:

Document {
  URL: "https://example.com",
  body: <body>,
  title: "Example",
  getElementById: f(),
  querySelector: f(),
  ...
}

Use case: Inspect properties and methods of an object.


Because document is actually a property of the global window object.

You can write:

document.getElementById("title");

or

window.document.getElementById("title");

Both work the same way.

document.querySelector('ul')
<ul>​<li style=​"background-color:​ green;​ padding:​ 10px;​">​…​</li>​<li>​…​</li>​<li>​::marker​"three"</li>​</ul>​
const my=document.querySelector('ul')
undefined
my.querySelector('li')
<li style=​"background-color:​ green;​ padding:​ 10px;​">​…​</li>​
const green=my.querySelector('li')
undefined

green.style.backgroundColor="green"
'green'

green.style.padding="10px"
'10px'

green.innerText
'one'

green.innerText="five"
'five'

//Query selector gives or returns only one value

document.querySelectorAll('li') // It returns all the list and not one list like in the case of queryselector
NodeList(3) [li, li, li]

const temp=document.querySelectorAll('li')
undefined
temp.style.color="green'
VM1950:1 Uncaught SyntaxError: Invalid or unexpected token
temp.style.color="green"
VM1958:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:17
(anonymous) @ VM1958:1

temp[0].style.color="green"   // First list's content will be covered in green
'green'

const myH1=document.querySelectorAll("h1")
undefined
myH1
NodeList [h1#title.heading]
myH1.style.color='green'
VM2296:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:17
(anonymous) @ VM2296:1
myH1[0].style.color='green'
'green'  

//Here we have to specify the number like which one to access among a list of lists

temp.forEach(function (L) {})
undefined
temp.forEach(function (L) {
    L.style.backgroundColor='green'
})
undefined

// IN NODELIST, WE CANNOT USE THE MAP FUNCTION
*/