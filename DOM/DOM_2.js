/*
document.getElementById('title')
<h1 id=​"title" class=​"heading">​DOM learning on Chai aur code​</h1>​
Warning: Don’t paste code into the DevTools Console that you don’t understand or haven’t reviewed yourself. This could allow attackers to steal your identity or take control of your computer. Please type “allow pasting” below and press Enter to allow pasting.
document.getElementById('title').id
'title'
document.getElementById('title').className
'heading'
When we write HTML in JS especially in React (JSX), we write className instead of class beacuse the name conflicts with class
and the second is that when we make a structure inside DOM then we call it className

document.getElementById('title').getAttribute('id')
'title'
document.getElementById('title').getAttribute('class')
'heading'

document.getElementById('title').setAttribute('class', 'test')
undefined
document.getElementById('title').getAttribute('class', 'test heading')
'test'
document.getElementById('title').setAttribute('class', 'test heading')
undefined

const title=document.getElementById('title')
undefined
title
<h1 id=​"title" class=​"heading" style=​"background-color:​ green;​">​DOM learning on Chai aur code​</h1>​
title.style.backgroundColor='green'  //The title will be in green color
'green'

title.style.padding="15px"
'15px'
title.style.borderRadius="5px"
'5px'
title.style.borderRadius="20px"
'20px

title.textContent   // It gives the content of the title
'DOM learning on Chai aur code'

title.innerHTML
'DOM learning on Chai aur code'

title.innerText
'DOM learning on Chai aur code'

//After using the span and inside it style: "display:None"
title.innerText //It will return the visible part only
'DOM learning on Chai aur code'
title.textContent //It will return and show all the parts even those part which is hidden
'DOM learning on Chai aur code  test text '

title.innerHTML //These tags support html tags but innercontent and innerText does not support html tags
'DOM learning on Chai aur code <span style="display: none"> test text </span>'

document.getElementsByClassName('heading')
HTMLCollection [h1#title.heading, title: h1#title.heading]

document.querySelector('h1') // It will get the first h1 portion from the document
<h1 id=​"title" class=​"heading">​…​</h1>​

document.querySelector('h2')
<h2>​Lorem ip​</h2>​

document.querySelector('#title')  //It will get the id having title
<h1 id=​"title" class=​"heading">​…​</h1>​ 

document.querySelector('.heading')
<h1 id=​"title" class=​"heading">​…​</h1>​

document.querySelector('input[type="password"]')
<input type=​"password" name=​"hi" id=​"class">​

document.getElementsByClassName('list-item')
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]

We cannot use forEach loop in HTMLCollection

Array.from(a) // IT CONVERTS THE HTML LIST INTO AN ARRAY

const carr=Array.from(a)
undefined
carr.forEach(function (li) {
    li.style.color='orange'
})
undefined