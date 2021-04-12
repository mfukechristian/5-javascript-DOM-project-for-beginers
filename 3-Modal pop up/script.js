const ctaButton = document.querySelector('.cta-button');
const modal = document.querySelector('.modal-container');
const closeModal =document.querySelector('.close-icon');



ctaButton.addEventListener('click',function(){
    modal.style.visibility ='visible';
})

closeModal.addEventListener('click',function(){
    modal.style.visibility ='hidden';
})