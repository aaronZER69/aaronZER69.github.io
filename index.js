let formulaire = document.getElementById('form');
formulaire.addEventListener('submit', (event) => {
    event.preventDefault();

})

let button = document.getElementById('button_contact');
button.addEventListener('click', function(){
    alert('message envoyé !')
})