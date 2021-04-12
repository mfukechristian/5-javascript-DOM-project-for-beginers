const circles = document.querySelectorAll('.circle');
const progressBar = document.querySelector('.progress-bar');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
//position of the active circle
let currentCircle = 1;

//next button event listener
nextBtn.addEventListener('click', () => {
    //increment the 'currentcircle' which is === '1'
    //of  '1' evetytime you click
    currentCircle++;
    // to keep the circle within boundaries [1 to 4]
    if (currentCircle > circles.length) {
        currentCircle = circles.length;
       
    }
    
    if (currentCircle === circles.length) {
        nextBtn.disabled = true;
    }
    
    if(currentCircle >1){
        //change the button to able to disabled and vice versa
        prevBtn.disabled = false;
    }



    update()


})



//prev button event listener
prevBtn.addEventListener('click', () => {

    currentCircle--;

    if (currentCircle <1) {
        currentCircle = 1;
    }

    if(currentCircle === 1){
        nextBtn.disabled = false;
        prevBtn.disabled = true;
    }

    update()

})


function update() {

    //making the circle border 'black' when active
    circles.forEach((circle, index) => {
        if(index < currentCircle) {
            circle.classList.add('active-circle');
        } else {
            circle.classList.remove('active-circle');
        }
    })

    
    //call all the active circle
    const activeCircles = document.querySelectorAll ('.active-circle');
    //progress bar 
    progressBar.style.width =  ((activeCircles.length -1)/(circles.length-1)) * 100 + '%';
    
    
}