let formulaire = document.getElementById('form');
formulaire.addEventListener('submit', (event) => {
    event.preventDefault();

})


let button = document.getElementById('button');
button.addEventListener('click', function(event){
    event.preventDefault()  
    let email = document.getElementById('email').value
    let nomform = document.getElementById('nomform').value
    let commentaire = document.getElementById('commentaire').value
    
    
    if (email.includes("@") && email!=="" && nomform!=="" && commentaire!==""){
       alert('message envoyé !') 
     }
    else
        alert('veuillez saisir une adresse email valide et compléter les champs')
    }
)

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel__slide');
    const prevButton = document.querySelector('.carousel__button.prev');
    const nextButton = document.querySelector('.carousel__button.next');
    let currentIndex = 0;

  
    const updateCarousel = () => {
        const offset = -currentIndex * 100; 
        document.querySelector('.carousel__slides').style.transform = `translateX(${offset}%)`;

        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });
    };

    const nextSlide = () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    };

    const autoScroll = () => setInterval(nextSlide, 3000);
    let interval = autoScroll(); 

  
    const resetAutoScroll = () => {
        clearInterval(interval); 
        interval = autoScroll(); 
    };


    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateCarousel();
        resetAutoScroll(); 
    });

    nextButton.addEventListener('click', () => {
        nextSlide();
        resetAutoScroll(); 
    });


    updateCarousel();
});

    


















