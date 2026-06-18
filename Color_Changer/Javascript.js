const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")

buttons.forEach(function (button){
    console.log(button)
    button.addEventListener('click', function (event){
        console.log(event)
        console.log(event.target) //From where the event is coming and it is the entire HTML document
        if (event.target.id==='grey'){
            body.style.backgroundColor=event.target.id;
        }
        if (event.target.id==='white'){
            body.style.backgroundColor=event.target.id;
        }
        if (event.target.id==='blue'){
            body.style.backgroundColor=event.target.id;
        }
        if (event.target.id==='yellow'){
            body.style.backgroundColor=event.target.id;
        }
        if (event.target.id==='purple'){
            body.style.backgroundColor=event.target.id;
        }
    });
});