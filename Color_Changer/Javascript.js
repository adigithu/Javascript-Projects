const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")

buttons.forEach(function (button){
    console.log(button)
    button.addEventListener('click', function (event){
        console.log(event)
        console.log(event.target) //From where the event is coming
        if (event.target==='grey'){
            body.style.backgroundColor=event.target.id;
        }
        if (event.target==='white'){
            body.style.backgroundColor=event.target.id;
        }
        if (event.target==='blue'){
            body.style.backgroundColor=event.target.id;
        }
        if (event.target==='yellow'){
            body.style.backgroundColor=event.target.id;
        }
        if (event.target==='purple'){
            body.style.backgroundColor=event.target.id;
        }
    });
});