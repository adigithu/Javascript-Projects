/*

These two examples are showing two very important DOM concepts:

Creating elements dynamically (Create DOM Elements)
Traversing/Navigating the DOM Tree (Parent, Child, Sibling)

Part 1: Creating Elements Dynamically
Step 1: Create a div
const div = document.createElement('div')

Creates a <div> in memory.

At this point:

<div></div>

But it is not visible on the webpage yet because it has not been added to the document.

Step 2: Check the div
console.log(div)

Output:

<div></div>

Step 3: Add class

You wrote:

div.classname="main"

It should be:

div.className = "main"

Result:

<div class="main"></div>

Step 4: Add ID
div.id = Math.round(Math.random()*10+1)

Suppose random number is 7:

<div id="7"></div>

Step 5: Add Custom Attribute
div.setAttribute("title","AB")

Result:

<div title="AB"></div>

Step 6: Add CSS
div.style.background = "green"
div.style.padding = "12px"

Result:

<div style="background:green;padding:12px"></div>

Step 7: Add Text Node
const add = document.createTextNode("Chai aur code")

Creates:

Chai aur code

Then:

div.append(add)

Result:

<div>
   Chai aur code
</div>

Step 8: Attach to Page
document.body.appendChild(div)

Now the div is inserted into the body.

Final output:

<body>
    <div class="main"
         id="7"
         title="AB"
         style="background:green;padding:12px">
         Chai aur code
    </div>
</body>



Part 2: DOM Traversal

HTML:

<div class="parent">
    <div class="day">Monday</div>
    <div class="day">Tuesday</div>
    <div class="day">Wednesday</div>
    <div class="day">Thursday</div>
</div>

DOM Tree:

parent
│
├── Monday
├── Tuesday
├── Wednesday
└── Thursday

Select Parent
const a = document.querySelector('.parent')

Selects:

<div class="parent">
...
</div>
children
console.log(a.children)

Output:

HTMLCollection(4)

Contains:

Monday
Tuesday
Wednesday
Thursday
Access First Child
console.log(a.children[0].innerHTML)

Output:

Monday
Loop Through Children
for(let index=0; index<a.children.length; index++){
    console.log(a.children[index].innerHTML)
}

Output:

Monday
Tuesday
Wednesday
Thursday
Change Style of Child
a.children[1].style.color="orange"

children[1]

means:

0 → Monday
1 → Tuesday
2 → Wednesday
3 → Thursday

Tuesday becomes orange.

firstElementChild
console.log(a.firstElementChild)

Output:

<div class="day">Monday</div>
lastElementChild
console.log(a.lastElementChild)

Output:

<div class="day">Thursday</div>
Parent Traversal

Select first day:

const b=document.querySelector('.day')

Output:

<div class="day">Monday</div>
parentElement
console.log(b.parentElement)

Output:

<div class="parent">
...
</div>

Meaning:

Monday's parent = parent div
Sibling Traversal
nextElementSibling
console.log(b.nextElementSibling)

Output:

<div class="day">Tuesday</div>

Meaning:

Monday → Tuesday
childNodes
console.log(a.childNodes)

Output:

NodeList(9)

Why 9 and not 4?

Because browser counts:

<div class="parent">
    <div class="day">Monday</div>
    <div class="day">Tuesday</div>
    <div class="day">Wednesday</div>
    <div class="day">Thursday</div>
</div>

as:

Text Node (line break)
Monday
Text Node
Tuesday
Text Node
Wednesday
Text Node
Thursday
Text Node

So:

1 text
2 Monday
3 text
4 Tuesday
5 text
6 Wednesday
7 text
8 Thursday
9 text

Therefore:

NodeList(9)
Most Important DOM Properties Used Here
Property/Method	Purpose
createElement()	Create new HTML element
createTextNode()	Create text node
append()	Add content inside element
appendChild()	Add element to DOM
querySelector()	Select first matching element
children	Get element children
firstElementChild	First child element
lastElementChild	Last child element
parentElement	Get parent
nextElementSibling	Get next sibling
childNodes	Get all nodes (including text nodes)
style	Change CSS dynamically
Simple Memory Trick

Think of the DOM like a family tree:

Parent
│
├── Child 1 (Monday)
├── Child 2 (Tuesday)
├── Child 3 (Wednesday)
└── Child 4 (Thursday)
parentElement → go up ⬆️
children → go down ⬇️
nextElementSibling → move sideways ➡️
firstElementChild → first child
lastElementChild → last child
childNodes → everything, including spaces and line breaks.

*/