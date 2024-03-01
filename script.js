const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

let counter = 1;
const size = images[0].clientWidth;

slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

function nextSlide() {
    if (counter >= images.length - 1) return;
    slider.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

function prevSlide() {
    if (counter <= 0) return;
    slider.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

slider.addEventListener('transitionend', () => {
    if (images[counter].id === 'lastClone') {
        slider.style.transition = 'none';
        counter = images.length - 2;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (images[counter].id === 'firstClone') {
        slider.style.transition = 'none';
        counter = images.length - counter;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

// Optional: Add event listeners to arrow buttons for manual control
document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);
// js for clickble section
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.clickable-section');

    sections.forEach(section => {
        section.addEventListener('click', () => {
            const target = section.getAttribute('data-target');
            if (target) {
                window.location.href = target; // Navigate to the target URL
            }
        });
    });
});