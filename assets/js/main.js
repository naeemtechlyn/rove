(function ($) {

    "use strict"
    $(document).ready(function () {

        // mobile menu
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "991.98",
            onePage: false
        });

        // counter up
        $('.counter').counterUp({
            delay: 10,
            time: 1500
        });

        // magnific popup init
        $(".popup-gallery").magnificPopup({
            delegate: '.popup-img',
            type: 'image',
            gallery: {
                enabled: true
            },
        });
        $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        // service single
        $('.service-single').hover(function () {
            $('.service-single').removeClass('active');
            $(this).addClass('active');
        });
        $('.service-single:nth-child(2)').addClass('active');

        // testimonial slider 
        var swiper = new Swiper(".testimonial-slider", {
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        // blog-slider
        var swiper = new Swiper(".blog-slider", {
            slidesPerView: 2,
            spaceBetween: 60,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        //tab
        // service details tab
        $('.tab-link').on('click', function (event) {
            event.preventDefault(); // Prevent the default action of the <a> tag

            var tab_id = $(this).attr('data-tab');

            $('.tab-link').removeClass('active');
            $('.tab-content').removeClass('active');

            $(this).addClass('active');
            $("#" + tab_id).addClass('active');
        });

    });

    $(window).on('scroll', function () {

        // navbar fixed
        const headerHeight = $(".header-area").outerHeight();
        if ($(this).scrollTop() > headerHeight) {
            $('.menu-area').addClass("fixed-top");
        } else {
            $('.menu-area').removeClass("fixed-top");
        }

    });

    $(window).on('load', function () {

        // preloader
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

    });

})(jQuery);
