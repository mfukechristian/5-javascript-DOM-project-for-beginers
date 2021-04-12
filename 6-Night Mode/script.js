const modeButton = document.querySelector('.button-icon');

modeButton.addEventListener('click',()=>{
    // change the background 
    const bodyBackground = document.body;
    bodyBackground.classList.toggle('active');
   
    //change the text 
    const titleMode = document.querySelector('.title-mode');
   if(titleMode.innerHTML === 'Night Mode'){
       titleMode.innerHTML = 'Day Mode';
       titleMode.style.color = '#ffbf00';
   }else{
    titleMode.innerHTML = 'Night Mode';
    titleMode.style.color = 'white';
   }

   //change the icon
   const darkIcon = document.querySelector('.night');
   const dayIcon = document.querySelector('.day');

   if(darkIcon.style.display === 'none'){
       darkIcon.style.display = 'block';
       dayIcon.style.display = 'none';
       console.log(darkIcon)
   }else{
        darkIcon.style.display = 'none';
        dayIcon.style.display = 'block';
   }
})