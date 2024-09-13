// Burger menu toggle
document.querySelector('.burger-menu').addEventListener('click', () => {
    document.querySelector('.nav-items').classList.toggle('active');
});

// Search functionality
function searchFunction() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(input)) {
            card.style.backgroundColor = '#ffff99'; // Highlight the card
        } else {
            card.style.backgroundColor = ''; // Remove highlight
        }
    });
}