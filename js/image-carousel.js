let currentSlideIndex = 0;
let currentBuildingImages = [];

function initCarousel(building) {
    const images = building.images || [];
    currentBuildingImages = images;
    currentSlideIndex = 0;

    const slidesContainer = document.getElementById('carouselSlides');
    const counter = document.getElementById('carouselCounter');
    
    if (!slidesContainer) return;

    slidesContainer.innerHTML = '';

    if (images.length === 0) {
        slidesContainer.innerHTML = createPlaceholderSlide();
        counter.textContent = '0 / 0';
        updateArrowStates();
        return;
    }

    images.forEach((image, index) => {
        const slide = createImageSlide(image, index);
        slidesContainer.appendChild(slide);
    });

    counter.textContent = `1 / ${images.length}`;

    showSlide(0);
    updateArrowStates();
}

function createImageSlide(imageData, index) {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    slide.style.backgroundImage = `url('${imageData.url}')`;
    
    const description = document.createElement('div');
    description.className = 'image-description';
    description.innerHTML = `
        <div class="image-description-title">${imageData.title}</div>
        <div class="image-description-detail">${imageData.description}</div>
    `;
    
    slide.appendChild(description);
    return slide;
}

function createPlaceholderSlide() {
    return `
        <div class="carousel-slide placeholder">
            <div class="cloud large"></div>
            <div class="cloud small"></div>
            <div class="hills">
                <div class="hill hill-back"></div>
                <div class="hill hill-front"></div>
            </div>
            <div class="image-description">
                <div class="image-description-title">No Images Available</div>
                <div class="image-description-detail">Images coming soon</div>
            </div>
        </div>
    `;
}

function showSlide(index) {
    const slidesContainer = document.getElementById('carouselSlides');
    const counter = document.getElementById('carouselCounter');
    
    if (!slidesContainer || currentBuildingImages.length === 0) return;

    currentSlideIndex = Math.max(0, Math.min(index, currentBuildingImages.length - 1));

    const offset = -currentSlideIndex * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;

    counter.textContent = `${currentSlideIndex + 1} / ${currentBuildingImages.length}`;

    updateArrowStates();
}

function nextSlide() {
    if (currentSlideIndex < currentBuildingImages.length - 1) {
        showSlide(currentSlideIndex + 1);
    }
}

function prevSlide() {
    if (currentSlideIndex > 0) {
        showSlide(currentSlideIndex - 1);
    }
}

function updateArrowStates() {
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    
    if (!prevBtn || !nextBtn) return;

    prevBtn.disabled = currentSlideIndex === 0;
    nextBtn.disabled = currentSlideIndex === currentBuildingImages.length - 1 || currentBuildingImages.length === 0;
}

function initCarouselEventListeners() {
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            prevSlide();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            nextSlide();
        });
    }

    document.addEventListener('keydown', (e) => {
        const popup = document.getElementById('buildingPopup');
        if (!popup || !popup.classList.contains('active')) return;

        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarouselEventListeners);
} else {
    initCarouselEventListeners();
}