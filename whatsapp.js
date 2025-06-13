// WhatsApp Contact Button

document.addEventListener('DOMContentLoaded', function () {
    createWhatsAppButton();
});

function createWhatsAppButton() {
    if (document.getElementById('whatsapp-button')) return;

    const button = document.createElement('div');
    button.id = 'whatsapp-button';
    button.className = 'whatsapp-button';

    button.innerHTML = `
        <a href="https://wa.me/601159568894" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-whatsapp"></i>
            <span class="tooltip">Chat with me on WhatsApp</span>
        </a>
    `;

    document.body.appendChild(button);

    button.addEventListener('mouseenter', () => {
        const tooltip = button.querySelector('.tooltip');
        tooltip.style.opacity = '1';
        tooltip.style.visibility = 'visible';
    });

    button.addEventListener('mouseleave', () => {
        const tooltip = button.querySelector('.tooltip');
        tooltip.style.opacity = '0';
        tooltip.style.visibility = 'hidden';
    });
}
