const tabButtons = document.querySelectorAll('.tablinks');
const container = document.querySelector('.container');

container.addEventListener('click',(e)=>{

    const id = e.target.dataset.id;

    //finding which div contain the an Id and remove the class of 'acitve'
    //change the button color
    if(id){
        tabButtons.forEach(tab => {
            tab.classList.remove('active');   
        });

        e.target.classList.add('active');

        const tabContent = document.querySelectorAll('.tabcontent');

        tabContent.forEach(content => {
            content.classList.remove('active');
        });

        const element = document.getElementById (id);

        element.classList.add('active');

    }
})

