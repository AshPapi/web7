$(document).ready(function() {
    let slides = $(".photo_space");
    let gallerySlider = $(".gallery__slider");
    let currentPager = $("#currentPager");
    let totalPager = $("#totalPager");
    let prevBtn = $("#prevBtn");
    let nextBtn = $("#nextBtn");

    let slidesPerPage = $(window).width() <= 768 ? 1 : 3; // 1 слайд для телефонов, 3 для компьютеров
    let totalPages = Math.ceil(slides.length / slidesPerPage);
    let currentPage = 1;

    function updateGallery() {
        let slideWidth = $(".gallery__slide").outerWidth(true); // Ширина одного слайда с учетом отступов
        let offset = -((currentPage - 1) * slideWidth * slidesPerPage); // Смещение влево
        gallerySlider.css("transform", `translateX(${offset}px)`); // Применение трансформации
        
        currentPager.text(currentPage);
        totalPager.text(totalPages);
    }

    nextBtn.click(function() {
        if (currentPage < totalPages) {
            currentPage++;
            updateGallery();
        }
    });

    prevBtn.click(function() {
        if (currentPage > 1) {
            currentPage--;
            updateGallery();
        }
    });

    $(window).resize(function() {
        slidesPerPage = $(window).width() <= 768 ? 1 : 3; // Пересчитать количество слайдов при изменении размера окна
        totalPages = Math.ceil(slides.length / slidesPerPage);
        if (currentPage > totalPages) currentPage = totalPages;
        updateGallery();
    });

    updateGallery(); // Начальное отображение
});
