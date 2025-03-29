document.getElementById('menu-icon').addEventListener('click', function() {
    var menuMobile = document.getElementById('menu-mobile');
    menuMobile.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

const prevButton = document.querySelector('.btn');
const nextButton = document.querySelector('.btn-1');
const slider = document.querySelector('.slider');

prevButton.addEventListener('click', () => {
    slider.scrollLeft -= 700; 
});

nextButton.addEventListener('click', () => {
    slider.scrollLeft += 700; 
});