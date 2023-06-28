$(function () {
    $('.scroll-up-button-outer').hide(0);
    $(window).on('scroll', function () {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;

        if(Math.ceil(scrolled !== 0)) {
            $('.scroll-up-button-outer').show(100)
        }else{
            $('.scroll-up-button-outer').hide(100)
        }
    })
    $('.scroll-up-button').on('click', function () {
        $(window).scrollTop(1);
    });
})