$(document).ready(function () {
    // Tooltip start
    $('[data-bs-toggle="tooltip"]').tooltip();
    // Tooltip end


    // Feather Icons start
    feather.replace();
    // Feather Icons end

    
    // Select Picker start
    $('.select-product-single').select2({
        placeholder: "Select Product"
    });
    $(".select-product-multiple").select2({
        placeholder: "Select Products",
        color: "#fff",
    });
    // Select Picker end

    
    // Pure Counter start
    new PureCounter({
        selector: ".product_count",
        start: 0,
        end: 50,
        duration: 2,
        delay: 10,
    });
    new PureCounter({
        selector: ".associate_count",
        start: 0,
        end: 65,
        duration: 2,
        delay: 10,
    });
    new PureCounter({
        selector: ".commissioned_count",
        start: 0,
        end: 11,
        duration: 2,
        delay: 100,
    });
    // Pure Counter end

    
    // Copyright year start
    thisyear = new Date().getFullYear(),
    $(".copyright-year").text(thisyear)    
    // Copyright year end


    // Animation on scroll start
    window.addEventListener('load', () => {
        AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false
        });
    });
    // Animation on scroll end    
});




