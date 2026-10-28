/*Menu Toggle*/
const menuToggleBtn = document.getElementById('menuToggleBtn');
if(menuToggleBtn){
    const hiddenItems = document.querySelectorAll('.menu-section .hidden-item');

    menuToggleBtn.addEventListener('click', () => {
        const isExpanded = menuToggleBtn.classList.contains('expanded');

        hiddenItems.forEach(item => {
            item.style.display = isExpanded ? 'none' : 'block';
        });

        menuToggleBtn.textContent = isExpanded ? 'Tüm Menüyü Gör' : 'Daha Az Göster';
        menuToggleBtn.classList.toggle('expanded');
    });
}


/*Gallery Lightbox*/
const lightbox = document.getElementById('lightbox');
if(lightbox){
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');

    galleryItems.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImage.src = img.src;
            lightbox.classList.add('active');
        });
    });

    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
        if(e.target === lightbox){
            lightbox.classList.remove('active');
        }
    });
}




/*Testimonials Slider*/
const track = document.getElementById('testimonialsTrack');
if(track){
    const viewport = document.getElementById('testimonialsViewport');
    const prevBtn = document.getElementById('sliderPrev');
    const nextBtn = document.getElementById('sliderNext');
    const dotsContainer = document.getElementById('testimonialsDots');
    const cards = document.querySelectorAll('.testimonial-card');

    let currentIndex = 0;

    /*Dots oluştur*/
    cards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if(index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function updateSlider(){
        const cardWidth = viewport.clientWidth;
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    function goToSlide(index){
        currentIndex = index;
        updateSlider();
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateSlider();
    });

    window.addEventListener('resize', updateSlider);

    setInterval(() => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateSlider();
    }, 6000);
}