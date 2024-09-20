let currentIndex = 0;

function moveSlide(step) {
    const slider = document.querySelector('.gallery-slider');
    const items = document.querySelectorAll('.gallery-item');
    const totalItems = items.length;
    
    currentIndex += step;

    if (currentIndex >= totalItems) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    }

    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}
