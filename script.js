// FILTER MENU
function filterMenu(category) {
    const items = document.querySelectorAll('.card');

    items.forEach(item => {
        if (category === 'all') {
            item.style.display = 'flex';
        } else if (item.classList.contains(category)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// SMOOTH SCROLL (button)
document.querySelector('.hero button').addEventListener('click', () => {
    document.querySelector('#menu').scrollIntoView({
        behavior: 'smooth'
    });
});

// ACTIVE NAV LINK
const links = document.querySelectorAll('.navbar a');

links.forEach(link => {
    link.addEventListener('click', function() {
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});