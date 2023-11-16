function showSubmenu() {
    var submenu = document.querySelector("#brochas .submenu");
    submenu.style.display = "block";
}

function hideSubmenu() {
    var submenu = document.querySelector("#brochas .submenu");
    submenu.style.display = "none";
}
    // Script para el carrusel de Maquillaje de Día 
    var currentSlide = 0;
    var slides = document.querySelectorAll('.carousel-item');
    var totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide) => slide.style.transform = `translateX(-${index * 100}%)`);
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000);

    // Script para el carrusel de Maquillaje Nocturno
    var currentSlideNocturno = 0;
    var slidesNocturno = document.querySelectorAll('.carousel-item-nocturno');
    var totalSlidesNocturno = slidesNocturno.length;

    function showSlideNocturno(index) {
        slidesNocturno.forEach((slide) => slide.style.transform = `translateX(-${index * 100}%)`);
    }

    function nextSlideNocturno() {
        currentSlideNocturno = (currentSlideNocturno + 1) % totalSlidesNocturno;
        showSlideNocturno(currentSlideNocturno);
    }

    function prevSlideNocturno() {
        currentSlideNocturno = (currentSlideNocturno - 1 + totalSlidesNocturno) % totalSlidesNocturno;
        showSlideNocturno(currentSlideNocturno);
    }

    setInterval(nextSlideNocturno, 3000);