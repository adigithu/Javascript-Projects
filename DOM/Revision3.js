/*
Initial HTML
<ul class="language">
    <li>Javascript</li>
</ul>

Initially the page contains:

Javascript
Step 1: Add Python
addLanguage("python")

Function:

function addLanguage(langName){
    const a = document.createElement('li');
    a.innerHTML = `${langName}`;
    document.querySelector('.language').appendChild(a);
}
What happens?

Create:

<li></li>

Add text:

<li>python</li>

Append to <ul>.

Now:

<ul class="language">
    <li>Javascript</li>
    <li>python</li>
</ul>
Step 2: Add Typescript
addLanguage("Typescript")

Creates:

<li>Typescript</li>

Appends it.

Now:

<ul class="language">
    <li>Javascript</li>
    <li>python</li>
    <li>Typescript</li>
</ul>
Step 3: Add Golang (Optimized)
addoptimal("golang")

Function:

function addoptimal(languagename){
    const a=document.createElement('li');
    a.appendChild(document.createTextNode(languagename))
    document.querySelector('.language').appendChild(a)
}
What happens?

Create:

<li></li>

Create text node:

golang

Put text inside li:

<li>golang</li>

Append it.

Now:

<ul class="language">
    <li>Javascript</li>
    <li>python</li>
    <li>Typescript</li>
    <li>golang</li>
</ul>
Why is this called Optimized?

This:

a.innerHTML = langName

makes the browser parse HTML.

But:

document.createTextNode(langName)

creates text directly.

Less work for the browser.

So:

createTextNode()

is slightly faster and safer.

Current List

At this point:

1. Javascript
2. python
3. Typescript
4. golang
Step 4: Select Second Item
const second=document.querySelector("li:nth-child(2)")
What is nth-child(2)?

Means:

Select the 2nd child

Current list:

1. Javascript
2. python  ← selected
3. Typescript
4. golang

So:

second

contains:

<li>python</li>
Step 5: Create Mojo
const newli=document.createElement('li')
newli.textContent="Mojo"

Creates:

<li>Mojo</li>
Step 6: Replace Python with Mojo
second.replaceWith(newli)

Before:

<li>python</li>

After:

<li>Mojo</li>

Now:

1. Javascript
2. Mojo
3. Typescript
4. golang
Step 7: Select First Item
const first=document.querySelector("li:first-child")

Selects:

<li>Javascript</li>
Step 8: Replace First Item
first.outerHTML="<li>Typescript</li>"
What is outerHTML?

It replaces the entire element.

Before:

<li>Javascript</li>

After:

<li>Typescript</li>

Now:

1. Typescript
2. Mojo
3. Typescript
4. golang

Notice now there are two Typescript items.

Step 9: Select Last Item
const last=document.querySelector("li:last-child")

Selects:

<li>golang</li>
Step 10: Remove It
last.remove()

Deletes:

<li>golang</li>

Final list becomes:

1. Typescript
2. Mojo
3. Typescript
DOM Methods Used
Method	Purpose
createElement()	Create a new HTML element
createTextNode()	Create text
appendChild()	Add child to parent
querySelector()	Select element
replaceWith()	Replace one element with another
outerHTML	Replace whole element
remove()	Delete element
textContent	Set text inside element
Final Flow
Initial
---------
Javascript

Add python
---------
Javascript
python

Add Typescript
---------
Javascript
python
Typescript

Add golang
---------
Javascript
python
Typescript
golang

Replace python → Mojo
---------
Javascript
Mojo
Typescript
golang

Replace Javascript → Typescript
---------
Typescript
Mojo
Typescript
golang

Remove golang
---------
Typescript
Mojo
Typescript

This example demonstrates the four most common DOM operations:

Create → createElement()
Add → appendChild()
Update → replaceWith(), outerHTML
Delete → remove()
*/