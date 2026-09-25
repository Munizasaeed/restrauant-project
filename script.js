function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active');
}
// Function to load external HTML components
function loadNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            const placeholder = document.getElementById('navbar-placeholder');
            if (placeholder) {
                placeholder.innerHTML = data;
            }
        })
        .catch(error => console.error('Error loading navbar:', error));
}
function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            const placeholder = document.getElementById('footer-placeholder');
            if (placeholder) {
                placeholder.innerHTML = data;
            }
        })
        .catch(error => console.error('Error loading footer:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    loadNavbar();
    loadFooter();
});

let filterbutton = document.querySelectorAll('.btns .btn2');
const foodCards = document.querySelectorAll('.cards-container .card');


filterbutton.forEach((item) => {
    item.addEventListener('click', (e) => {
        let selectedCategory = e.target.dataset.category;
        console.log(selectedCategory);

        foodCards.forEach((card) => { // Here parameter is 'card'
            let cardCategory = card.dataset.category;

            if (selectedCategory === 'all' || selectedCategory === cardCategory) {
                card.style.display = 'block';
            } else { // Added 'else' here
                card.style.display = 'none';
            }
        });
    });
});