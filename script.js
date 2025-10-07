let currentSlideIndex = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = carousel.children.length;
    
    if (index >= totalSlides) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = totalSlides - 1;
    } else {
        currentSlideIndex = index;
    }
    
    carousel.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    
    updateDots(dots);
}

function updateDots(dots) {
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlideIndex);
    });
}

function moveSlide(direction) {
    showSlide(currentSlideIndex + direction);
}

function currentSlide(index) {
    showSlide(index);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(0);
});
