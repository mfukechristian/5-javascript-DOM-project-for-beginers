//all var from the DOM
const searchContainer = document.querySelector('.search-container');
const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');

searchButton.addEventListener('click', function () {
    searchContainer.classList.toggle('active');
})