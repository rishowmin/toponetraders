$(document).ready(function () {
    // Hero Slider start
    $('.home_slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        items: 1,
        mouseDrag: true,
        navText: ["<span aria-label='Previous'><i class='bx bx-left-arrow'></i></span>", "<span aria-label='Next'><i class='bx bx-right-arrow'></i></span>"],
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'flipInX',
    })
    // Hero Slider end

    
    // Testimonials start
    $('.testimonials_slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        items: 1,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 5000,
    })
    // Testimonials end
});