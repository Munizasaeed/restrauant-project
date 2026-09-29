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

        foodCards.forEach((card) => { 
            let cardCategory = card.dataset.category;

            if (selectedCategory === 'all' || selectedCategory === cardCategory) {
                card.style.display = 'block';
            } else { // Added 'else' here
                card.style.display = 'none';
            }
        });
    });
});

const faqItems = document.querySelectorAll('.faq');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        // Toggle active class (Answer open/close karne ke liye)
        item.classList.toggle('active');
        // '+' ko '-' aur '-' ko '+' banane ki logic
        const icon = item.querySelector('.faq-icon');
        if (item.classList.contains('active')) {
            icon.textContent = '−';
        } else {
            icon.textContent = '+';
        }
    });
});

let forms = document.querySelector(".contact");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let subject = document.querySelector("#subject");
let message = document.querySelector("#message");

const errorMsg = document.createElement("p");
errorMsg.style.marginTop = "10px";
errorMsg.style.fontWeight = "500";

// Sabhi inputs ko array mein daal kar 'input' event attach karein
const allInputs = [name, email, subject, message];

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        // Jaise hi user kuch bhi type karega, error message saaf ho jayega
        errorMsg.textContent = "";
    });
});

forms.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!forms.contains(errorMsg)) {
        forms.append(errorMsg);
    }

    if (name.value.trim() === "" || email.value.trim() === "" || subject.value.trim() === "" || message.value.trim() === "") {
        errorMsg.textContent = "Please fill all fields!";
        errorMsg.style.color = "red";
    } 
    else if (message.value.trim().length < 10) {
        errorMsg.textContent = "Message must be at least 10 characters long!";
        errorMsg.style.color = "red";
    } 
    else {
        errorMsg.textContent = "Form submitted successfully!";
        errorMsg.style.color = "green";

        name.value = "";
        email.value = "";
        subject.value = "";
        message.value = "";
    }
});