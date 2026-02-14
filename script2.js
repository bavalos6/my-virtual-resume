const centerText = document.getElementById('centerText');
const layers = document.querySelectorAll('.layer[data-section]');

layers.forEach(layer => {
    // Desktop Hover
    layer.addEventListener('mouseenter', function() {
        const section = this.getAttribute('data-section');
        centerText.textContent = section;
    });
    layer.addEventListener('mouseleave', function() {
        centerText.textContent = "i'm betza";
    });

    // Mobile Tap Image Swapping
    layer.addEventListener('touchstart', function() {
        layers.forEach(l => l.classList.remove('active-about', 'active-experience', 'active-projects', 'active-connect'));
        const section = this.getAttribute('data-section');
        this.classList.add('active-' + section);
        centerText.textContent = section;
    });
});

function expandLayer(layer, event) {
    if (event.target.classList.contains('close-btn') || layer.classList.contains('expanded')) {
        return;
    }
    layer.classList.add('expanded');
    document.body.style.overflow = 'hidden';
}

function closeLayer(event) {
    event.stopPropagation();
    const layer = event.target.closest('.layer');
    layer.classList.remove('expanded');
    // Reset mobile state
    layer.classList.remove('active-about', 'active-experience', 'active-projects', 'active-connect');
    centerText.textContent = "i'm betza";
    document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const expanded = document.querySelector('.layer.expanded');
        if (expanded) closeLayer({ target: expanded.querySelector('.close-btn'), stopPropagation: () => {} });
    }
});