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
        nav: true,
        dots: false,
        items: 1,
        mouseDrag: true,
        navText: ["<span aria-label='Previous'><i class='bx bx-left-arrow-alt'></i></span>", "<span aria-label='Next'><i class='bx bx-right-arrow-alt'></i></span>"],
        autoplay: true,
        autoplayTimeout: 5000,
    })
    // Testimonials end

    
    // Clients start
    $('.clients_slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        mouseDrag: true,
        navText: ["<span aria-label='Previous'><i class='bx bx-chevron-left'></i></span>", "<span aria-label='Next'><i class='bx bx-chevron-right'></i></span>"],
        autoplay: false,
        autoplayTimeout: 5000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    
    })
    // Clients end
});