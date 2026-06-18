/*Think of selectors as ways to find/select HTML elements from the page.

1. getElementById()

Selects an element using its id.

document.getElementById('title')

HTML:

<h1 id="title">DOM Learning</h1>

Output:

<h1 id="title">DOM Learning</h1>

Other examples:

document.getElementById('title').id
document.getElementById('title').className

Returns only one element because IDs are unique.

2. getElementsByClassName()

Selects elements using a class name.

document.getElementsByClassName('list-item')

Output:

HTMLCollection(4)

Containing:

<li class="list-item">one</li>
<li class="list-item">two</li>
<li class="list-item">three</li>
<li class="list-item">four</li>

Returns an HTMLCollection.

Cannot directly use:

forEach()
map()

Convert to array first:

const arr = Array.from(document.getElementsByClassName('list-item'))
3. querySelector()

Returns the first matching element only.

By tag name
document.querySelector('h1')

Returns first <h1>.

document.querySelector('h2')

Returns first <h2>.

By ID
document.querySelector('#title')

# means ID.

Returns:

<h1 id="title">
By Class
document.querySelector('.heading')

. means class.

Returns:

<h1 class="heading">
By Attribute
document.querySelector('input[type="password"]')

Returns:

<input type="password">
Nested Selection
const my = document.querySelector('ul')

Selects the <ul>.

Now search inside it:

my.querySelector('li')

Returns the first <li> inside the <ul>.

<li>one</li>
4. querySelectorAll()

Returns all matching elements.

document.querySelectorAll('li')

Output:

NodeList(4)

Containing:

<li>one</li>
<li>two</li>
<li>three</li>
<li>four</li>

Access by index:

temp[0]
temp[1]

Example:

temp[0].style.color = "green"
NodeList vs querySelector
querySelector

Returns one element

document.querySelector('li')

Output:

<li>one</li>
querySelectorAll

Returns multiple elements

document.querySelectorAll('li')

Output:

NodeList(4)
NodeList and forEach

NodeList supports forEach().

const temp = document.querySelectorAll('li')

temp.forEach(function(li){
    li.style.backgroundColor = 'green'
})

Works perfectly.

HTMLCollection
document.getElementsByClassName('list-item')

Returns:

HTMLCollection(4)

Does not support:

forEach()
map()

Convert first:

const arr = Array.from(
    document.getElementsByClassName('list-item')
)

Then:

arr.forEach(function(li){
    li.style.color = 'orange'
})
Quick Revision Table
Selector	Select By	Returns
getElementById('id')	ID	Single Element
getElementsByClassName('class')	Class	HTMLCollection
querySelector('selector')	CSS Selector	First Matching Element
querySelectorAll('selector')	CSS Selector	NodeList
Symbols used in querySelector
Symbol	Meaning	Example
#	ID	#title
.	Class	.heading
tag	HTML tag	h1, ul, li
[attr=value]	Attribute	input[type="password"]

Interview one-liner:
getElementById() selects by ID, getElementsByClassName() returns an HTMLCollection, 
querySelector() returns the first matching element, and querySelectorAll() returns all matching elements as a NodeList.
*/